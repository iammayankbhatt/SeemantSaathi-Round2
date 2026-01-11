# backend/app/api/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import jwt
from typing import Optional

from ...database import get_db_session
from ... import schemas, crud, models
from ...config import settings

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """Create JWT token"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

@router.post("/send-otp", response_model=schemas.Token)
async def send_otp(user: schemas.UserCreate, db: Session = Depends(get_db_session)):
    """Send OTP to mobile (demo: always returns 1234)"""
    
    # Check if user exists
    db_user = crud.get_user_by_mobile(db, mobile=user.mobile)
    
    if not db_user:
        # Create new user
        db_user = crud.create_user(db, user)
    
    # Update last login
    crud.update_user_last_login(db, db_user.id)
    
    # Create token (in production, verify OTP first)
    access_token = create_access_token(
        data={"sub": str(db_user.id), "mobile": db_user.mobile}
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": db_user.id,
        "name": db_user.name
    }

@router.post("/verify-otp")
async def verify_otp(mobile: str, otp: str, db: Session = Depends(get_db_session)):
    """Verify OTP (demo: accepts 1234)"""
    if otp != "1234":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid OTP"
        )
    
    db_user = crud.get_user_by_mobile(db, mobile=mobile)
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    # Create token
    access_token = create_access_token(
        data={"sub": str(db_user.id), "mobile": db_user.mobile}
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user_id": db_user.id,
        "name": db_user.name
    }

@router.get("/me", response_model=schemas.User)
async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db_session)
):
    """Get current user info"""
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials"
            )
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials"
        )
    
    db_user = db.query(models.User).filter(models.User.id == int(user_id)).first()
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return db_user