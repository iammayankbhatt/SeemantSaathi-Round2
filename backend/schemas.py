# backend/app/schemas.py
from pydantic import BaseModel, EmailStr, validator
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum

class UserBase(BaseModel):
    name: str
    mobile: str
    age: Optional[int] = None
    gender: Optional[str] = None
    village: Optional[str] = None
    district: Optional[str] = "Nainital"
    state: Optional[str] = "Uttarakhand"

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    village: Optional[str] = None

class User(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    last_login: Optional[datetime] = None
    
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: int
    name: str

class TokenData(BaseModel):
    user_id: Optional[int] = None

class SymptomAnalysisBase(BaseModel):
    symptoms: List[str]
    notes: Optional[str] = None

class SymptomAnalysisCreate(SymptomAnalysisBase):
    user_id: int

class SymptomAnalysis(SymptomAnalysisBase):
    id: int
    user_id: int
    predicted_condition: Optional[str] = None
    confidence: Optional[float] = None
    severity: Optional[str] = None
    recommendations: Optional[Dict[str, Any]] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class DoctorBase(BaseModel):
    name: str
    specialization: str
    qualification: Optional[str] = None
    experience_years: Optional[int] = None
    address: str
    city: str = "Bhimtal"
    state: str = "Uttarakhand"
    phone: str
    email: Optional[EmailStr] = None
    consultation_fee: int
    hospital_name: Optional[str] = None
    doctor_type: str = "private"  # government, private, telemedicine
    languages: Optional[List[str]] = ["Hindi", "English"]

class DoctorCreate(DoctorBase):
    latitude: float
    longitude: float

class Doctor(DoctorBase):
    id: int
    is_available: bool
    rating: Optional[float] = None
    distance_km: Optional[float] = None  # Calculated field
    
    class Config:
        from_attributes = True

class AppointmentBase(BaseModel):
    doctor_id: int
    appointment_date: datetime
    symptoms: Optional[List[str]] = None
    notes: Optional[str] = None

class AppointmentCreate(AppointmentBase):
    user_id: int

class Appointment(AppointmentBase):
    id: int
    user_id: int
    status: str
    payment_status: str
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

class DoctorSearch(BaseModel):
    latitude: float = 29.3475
    longitude: float = 79.5530
    radius_km: float = 20.0
    specialization: Optional[str] = None
    doctor_type: Optional[str] = None
    max_fee: Optional[int] = None

class AIResponse(BaseModel):
    prediction: str
    confidence: float
    severity: str
    recommendations: List[str]
    suggested_doctor_type: Optional[str] = None