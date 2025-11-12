# backend/app/schemas.py
from pydantic import BaseModel, EmailStr
from typing import Optional, List

class ProjectCreate(BaseModel):
    title: str
    slug: str
    short_desc: Optional[str] = None
    long_desc: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    is_featured: Optional[bool] = False

class ProjectRead(ProjectCreate):
    id: int

    class Config:
        orm_mode = True

class TagRead(BaseModel):
    id: int
    name: str
    slug: str
    class Config:
        orm_mode = True

class SkillRead(BaseModel):
    id: int
    name: str
    level: Optional[str] = None
    logo_url: Optional[str] = None
    class Config:
        orm_mode = True

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str
    source: Optional[str] = None

class ContactRead(ContactCreate):
    id: int
    created_at: str
    class Config:
        orm_mode = True
