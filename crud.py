# backend/app/crud.py
from sqlalchemy.orm import Session
from sqlalchemy import func, or_, and_
from geoalchemy2.functions import ST_Distance, ST_GeomFromText
import math
from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta

from . import models, schemas

# User CRUD
def get_user_by_mobile(db: Session, mobile: str):
    return db.query(models.User).filter(models.User.mobile == mobile).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user_last_login(db: Session, user_id: int):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user:
        db_user.last_login = datetime.now()
        db.commit()
        db.refresh(db_user)
    return db_user

# Doctor CRUD with Geo search
def get_nearby_doctors(
    db: Session, 
    latitude: float, 
    longitude: float, 
    radius_km: float = 20.0,
    specialization: Optional[str] = None,
    doctor_type: Optional[str] = None
):
    """Get doctors within radius using PostGIS"""
    
    # Create point from user location
    user_point = f"POINT({longitude} {latitude})"
    
    # Base query
    query = db.query(models.Doctor)
    
    # Add distance calculation (in meters)
    query = query.add_columns(
        ST_Distance(
            models.Doctor.location,
            ST_GeomFromText(user_point, 4326)
        ).label('distance_meters')
    )
    
    # Filter by specialization if provided
    if specialization:
        query = query.filter(models.Doctor.specialization.ilike(f"%{specialization}%"))
    
    # Filter by doctor type if provided
    if doctor_type:
        query = query.filter(models.Doctor.doctor_type == doctor_type)
    
    # Filter by availability
    query = query.filter(models.Doctor.is_available == True)
    
    # Execute query
    results = query.all()
    
    # Convert to list of dicts with distance in km
    doctors_with_distance = []
    for doctor, distance_meters in results:
        distance_km = distance_meters / 1000.0
        
        if distance_km <= radius_km:
            doctor_dict = {
                "id": doctor.id,
                "name": doctor.name,
                "specialization": doctor.specialization,
                "address": doctor.address,
                "phone": doctor.phone,
                "consultation_fee": doctor.consultation_fee,
                "doctor_type": doctor.doctor_type,
                "distance_km": round(distance_km, 1),
                "is_available": doctor.is_available,
                "rating": doctor.rating
            }
            doctors_with_distance.append(doctor_dict)
    
    # Sort by distance
    doctors_with_distance.sort(key=lambda x: x['distance_km'])
    
    return doctors_with_distance

def create_doctor(db: Session, doctor: schemas.DoctorCreate):
    """Create doctor with location"""
    # Create WKT point for location
    location_wkt = f"POINT({doctor.longitude} {doctor.latitude})"
    
    # Remove lat/long from dict
    doctor_data = doctor.dict(exclude={'latitude', 'longitude'})
    
    # Create doctor object
    db_doctor = models.Doctor(
        **doctor_data,
        location=func.ST_GeomFromText(location_wkt, 4326)
    )
    
    db.add(db_doctor)
    db.commit()
    db.refresh(db_doctor)
    return db_doctor

# Symptom Analysis CRUD
def create_symptom_analysis(db: Session, analysis: schemas.SymptomAnalysisCreate, ai_result: Dict[str, Any]):
    """Create symptom analysis with AI results"""
    db_analysis = models.SymptomAnalysis(
        user_id=analysis.user_id,
        symptoms=analysis.symptoms,
        notes=analysis.notes,
        predicted_condition=ai_result.get('prediction'),
        confidence=ai_result.get('confidence'),
        severity=ai_result.get('severity'),
        recommendations=ai_result.get('recommendations'),
        raw_response=ai_result
    )
    
    db.add(db_analysis)
    db.commit()
    db.refresh(db_analysis)
    return db_analysis

def get_user_symptom_history(db: Session, user_id: int, limit: int = 10):
    """Get user's symptom analysis history"""
    return db.query(models.SymptomAnalysis)\
        .filter(models.SymptomAnalysis.user_id == user_id)\
        .order_by(models.SymptomAnalysis.created_at.desc())\
        .limit(limit)\
        .all()

# Appointment CRUD
def create_appointment(db: Session, appointment: schemas.AppointmentCreate):
    db_appointment = models.Appointment(**appointment.dict())
    db.add(db_appointment)
    db.commit()
    db.refresh(db_appointment)
    return db_appointment

def get_user_appointments(db: Session, user_id: int):
    return db.query(models.Appointment)\
        .filter(models.Appointment.user_id == user_id)\
        .order_by(models.Appointment.appointment_date.desc())\
        .all()

def update_appointment_status(db: Session, appointment_id: int, status: str):
    appointment = db.query(models.Appointment).filter(models.Appointment.id == appointment_id).first()
    if appointment:
        appointment.status = status
        appointment.updated_at = datetime.now()
        db.commit()
        db.refresh(appointment)
    return appointment