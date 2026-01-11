# backend/app/api/appointments.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ...database import get_db_session
from ... import schemas, crud

router = APIRouter()

@router.post("/book", response_model=schemas.Appointment)
async def book_appointment(
    appointment: schemas.AppointmentCreate,
    db: Session = Depends(get_db_session)
):
    """Book an appointment with a doctor"""
    # Check if doctor exists and is available
    doctor = db.query(models.Doctor).filter(models.Doctor.id == appointment.doctor_id).first()
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    
    if not doctor.is_available:
        raise HTTPException(status_code=400, detail="Doctor is not available")
    
    # Check if appointment time is in future
    if appointment.appointment_date < datetime.now():
        raise HTTPException(status_code=400, detail="Appointment date must be in future")
    
    # Create appointment
    db_appointment = crud.create_appointment(db, appointment)
    return db_appointment

@router.get("/my-appointments", response_model=List[schemas.Appointment])
async def get_my_appointments(
    user_id: int,
    db: Session = Depends(get_db_session)
):
    """Get user's appointments"""
    return crud.get_user_appointments(db, user_id)

@router.put("/{appointment_id}/cancel")
async def cancel_appointment(
    appointment_id: int,
    db: Session = Depends(get_db_session)
):
    """Cancel an appointment"""
    appointment = crud.update_appointment_status(db, appointment_id, "cancelled")
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    
    return {"message": "Appointment cancelled successfully"}