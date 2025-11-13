# backend/app/crud.py
from typing import List, Optional
from sqlmodel import Session, select
from . import models, schemas
from slugify import slugify   

def get_projects(session: Session) -> List[models.Project]:
    return session.exec(select(models.Project)).all()

def get_project(session: Session, project_id: int) -> Optional[models.Project]:
    return session.get(models.Project, project_id)

def create_project(session: Session, project_in: schemas.ProjectCreate) -> models.Project:
    project = models.Project.from_orm(project_in)
    session.add(project)
    session.commit()
    session.refresh(project)
    return project

def get_skills(session: Session) -> List[models.Skill]:
    return session.exec(select(models.Skill)).all()


def get_contacts(session: Session) -> List[models.Contact]:
    return session.exec(select(models.Contact)).all()

def create_skill(session: Session, name: str, level: Optional[str] = None, logo_url: Optional[str] = None) -> models.Skill:
    skill = models.Skill(name=name, level=level, logo_url=logo_url)
    session.add(skill)
    session.commit()
    session.refresh(skill)
    return skill

def create_contact(session: Session, contact_in: schemas.ContactCreate) -> models.Contact:
    contact = models.Contact(**contact_in.dict())
    session.add(contact)
    session.commit()
    session.refresh(contact)
    return contact

def seed_initial_data(session: Session):
    # Avoid seeding repeatedly
    existing = session.exec(select(models.Project)).first()
    if existing:
        return

    resume_projects = [
        {
            "title": "Embedded Gesture Recognition System",
            "short_desc": "High-precision gesture recognition using Mediapipe + feed-forward NN; integrated with smart glove prototype.",
            "long_desc": "Developed a high-precision gesture recognition system ...",
            "github_url": "https://github.com/chandraPrakash-tripathi",
            "live_url": "https://signsense-eccb4.web.app/",
            "is_featured": True,
        },
       
    ]

    for p in resume_projects:
        slug = slugify(p["title"])
        project = models.Project(
            title=p["title"],
            slug=slug,
            short_desc=p["short_desc"],
            long_desc=p["long_desc"],
            github_url=p.get("github_url"),
            live_url=p.get("live_url"),
            is_featured=p.get("is_featured", False),
        )
        session.add(project)
    session.commit()

    tags = [
        ("Python", "python"),
        ("FastAPI", "fastapi"),
        ("Next.js", "nextjs"),
        ("Streamlit", "streamlit"),
    ]
    for name, slug in tags:
        existing_tag = session.exec(select(models.Tag).where(models.Tag.name == name)).first()
        if not existing_tag:
            session.add(models.Tag(name=name, slug=slug))
    session.commit()

    skill_names = [
        "Python", "SQL", "HTML", "CSS", "JavaScript", "TypeScript",
         "Next.js","Flask", "FastAPI"
    ]
    for i, name in enumerate(skill_names):
        existing_skill = session.exec(select(models.Skill).where(models.Skill.name == name)).first()
        if not existing_skill:
            session.add(models.Skill(name=name, level=None, order=i))
    session.commit()
