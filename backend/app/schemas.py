from pydantic import BaseModel, EmailStr

class ProjectRead(BaseModel):
    id: int
    title: str
    short_desc: str
    long_desc: str | None
    tech: str | None
    link: str | None
    repo: str | None
    class Config:
        orm_mode = True

class SkillRead(BaseModel):
    name: str
    level: str   # e.g. "Advanced", "Intermediate"
    class Config:
        orm_mode = True

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str
