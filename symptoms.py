# backend/app/api/symptoms.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import sys
import os
from typing import List

# Add parent directory to path to import AI model
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from ...database import get_db_session
from ... import schemas, crud
from ...config import settings

router = APIRouter()

# Import your AI model
try:
    from model import predict_disease
except ImportError:
    # Fallback for testing
    def predict_disease(text):
        return {
            "prediction": "Viral Fever",
            "confidence": 0.85,
            "severity": "medium",
            "recommendations": ["Rest well", "Stay hydrated", "Consult doctor if fever persists"],
            "suggested_doctor_type": "general_physician"
        }

@router.post("/analyze", response_model=schemas.AIResponse)
async def analyze_symptoms(
    request: schemas.SymptomAnalysisBase,
    user_id: int,  # In production, get from token
    db: Session = Depends(get_db_session)
):
    """Analyze symptoms using AI model"""
    try:
        # Combine symptoms and notes
        symptom_text = ", ".join(request.symptoms)
        if request.notes:
            symptom_text += f". {request.notes}"
        
        # Call AI model
        ai_result = predict_disease(symptom_text)
        
        # Save to database
        analysis_create = schemas.SymptomAnalysisCreate(
            user_id=user_id,
            symptoms=request.symptoms,
            notes=request.notes
        )
        
        db_analysis = crud.create_symptom_analysis(db, analysis_create, ai_result)
        
        # Format response
        response = schemas.AIResponse(
            prediction=ai_result.get('prediction', 'Unknown'),
            confidence=ai_result.get('confidence', 0.0),
            severity=ai_result.get('severity', 'low'),
            recommendations=ai_result.get('recommendations', []),
            suggested_doctor_type=ai_result.get('suggested_doctor_type')
        )
        
        return response
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

@router.get("/history", response_model=List[schemas.SymptomAnalysis])
async def get_symptom_history(
    user_id: int,
    limit: int = 10,
    db: Session = Depends(get_db_session)
):
    """Get user's symptom analysis history"""
    return crud.get_user_symptom_history(db, user_id, limit)

@router.get("/emergency")
async def get_emergency_info():
    """Get emergency contact information"""
    return {
        "emergency_numbers": [
            {"name": "Ambulance", "number": "108"},
            {"name": "Emergency", "number": "112"},
            {"name": "Police", "number": "100"},
            {"name": "Women Helpline", "number": "1091"},
            {"name": "Child Helpline", "number": "1098"}
        ],
        "first_aid_guide": "/api/symptoms/first-aid"
    }