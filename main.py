# backend/app/main.py
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta
from typing import List, Optional

from .config import settings
from .database import get_db_session, init_db
from . import schemas, crud, models

# Import routers
from .api import auth, symptoms, doctors, appointments

# Initialize database
init_db()

# Create FastAPI app
app = FastAPI(
    title=settings.APP_NAME,
    description="SeemantSaathi - Rural Healthcare Assistant Backend",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(symptoms.router, prefix="/api/symptoms", tags=["Symptoms"])
app.include_router(doctors.router, prefix="/api/doctors", tags=["Doctors"])
app.include_router(appointments.router, prefix="/api/appointments", tags=["Appointments"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to SeemantSaathi API",
        "status": "running",
        "timestamp": datetime.now().isoformat(),
        "docs": "/docs"
    }

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "database": "connected",  # You can add actual DB check
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/stats")
async def get_stats(db: Session = Depends(get_db_session)):
    """Get basic statistics"""
    user_count = db.query(models.User).count()
    doctor_count = db.query(models.Doctor).count()
    analysis_count = db.query(models.SymptomAnalysis).count()
    
    return {
        "users": user_count,
        "doctors": doctor_count,
        "symptom_analyses": analysis_count,
        "timestamp": datetime.now().isoformat()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)