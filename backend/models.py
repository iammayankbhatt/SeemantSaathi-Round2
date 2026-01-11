# backend/app/models.py
from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, Text, ForeignKey, Table
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB, ARRAY
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from geoalchemy2 import Geometry

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    mobile = Column(String(15), unique=True, index=True, nullable=False)
    name = Column(String(100), nullable=False)
    age = Column(Integer)
    gender = Column(String(10))
    village = Column(String(100))
    district = Column(String(100))
    state = Column(String(100))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    last_login = Column(DateTime(timezone=True))
    
    # Relationships
    symptom_analyses = relationship("SymptomAnalysis", back_populates="user")
    appointments = relationship("Appointment", back_populates="user")

class SymptomAnalysis(Base):
    __tablename__ = "symptom_analyses"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    
    # Store symptoms as array
    symptoms = Column(ARRAY(String), nullable=False)
    notes = Column(Text)
    
    # AI Model Results
    predicted_condition = Column(String(200))
    confidence = Column(Float)
    severity = Column(String(50))  # low, medium, high
    recommendations = Column(JSONB)  # Store as JSON
    
    # Raw AI response
    raw_response = Column(JSONB)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    user = relationship("User", back_populates="symptom_analyses")

class Doctor(Base):
    __tablename__ = "doctors"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    specialization = Column(String(100))
    qualification = Column(String(200))
    experience_years = Column(Integer)
    
    # Location with PostGIS
    location = Column(Geometry('POINT', srid=4326))
    address = Column(Text)
    city = Column(String(100))
    state = Column(String(100))
    
    # Contact
    phone = Column(String(20))
    email = Column(String(100))
    
    # Availability
    is_available = Column(Boolean, default=True)
    availability_hours = Column(JSONB)  # Store as JSON: {"mon": "9-5", "tue": "9-5"}
    consultation_fee = Column(Integer)
    
    # Additional info
    hospital_name = Column(String(200))
    doctor_type = Column(String(50))  # government, private, telemedicine
    rating = Column(Float)
    languages = Column(ARRAY(String))  # Languages spoken
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Appointment(Base):
    __tablename__ = "appointments"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    doctor_id = Column(Integer, ForeignKey("doctors.id"), nullable=False)
    
    appointment_date = Column(DateTime(timezone=True), nullable=False)
    symptoms = Column(ARRAY(String))
    notes = Column(Text)
    
    status = Column(String(50), default="pending")  # pending, confirmed, cancelled, completed
    
    # Payment info
    payment_status = Column(String(50), default="pending")
    payment_id = Column(String(200))
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    user = relationship("User", back_populates="appointments")
    doctor = relationship("Doctor")

class EmergencyContact(Base):
    __tablename__ = "emergency_contacts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False)
    relationship = Column(String(50))
    user_id = Column(Integer, ForeignKey("users.id"))
    
    user = relationship("User")

class HealthRecord(Base):
    __tablename__ = "health_records"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    
    record_type = Column(String(50))  # prescription, lab_report, vaccination
    title = Column(String(200))
    description = Column(Text)
    file_url = Column(String(500))  # URL to stored file
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    user = relationship("User")