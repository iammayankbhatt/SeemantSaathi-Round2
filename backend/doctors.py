# backend/app/api/doctors.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ...database import get_db_session
from ... import schemas, crud

router = APIRouter()

@router.post("/search", response_model=List[schemas.Doctor])
async def search_doctors(
    search: schemas.DoctorSearch,
    db: Session = Depends(get_db_session)
):
    """Search doctors by location and filters"""
    doctors = crud.get_nearby_doctors(
        db,
        latitude=search.latitude,
        longitude=search.longitude,
        radius_km=search.radius_km,
        specialization=search.specialization,
        doctor_type=search.doctor_type
    )
    
    # Apply max fee filter if provided
    if search.max_fee:
        doctors = [d for d in doctors if d['consultation_fee'] <= search.max_fee]
    
    return doctors

@router.get("/specializations")
async def get_specializations(db: Session = Depends(get_db_session)):
    """Get all available specializations"""
    # This would query distinct specializations from database
    specializations = [
        "General Physician",
        "Cardiologist",
        "Dermatologist",
        "Pediatrician",
        "Gynecologist",
        "Orthopedic",
        "ENT Specialist",
        "Dentist",
        "Psychiatrist",
        "Telemedicine"
    ]
    return specializations

@router.get("/{doctor_id}", response_model=schemas.Doctor)
async def get_doctor_details(doctor_id: int, db: Session = Depends(get_db_session)):
    """Get detailed information about a doctor"""
    # Query doctor from database
    doctor = db.query(models.Doctor).filter(models.Doctor.id == doctor_id).first()
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    
    return doctor

@router.post("/", response_model=schemas.Doctor)
async def add_doctor(
    doctor: schemas.DoctorCreate,
    db: Session = Depends(get_db_session)
):
    """Add a new doctor (admin only)"""
    # In production, add authentication check
    return crud.create_doctor(db, doctor)