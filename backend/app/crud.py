from sqlmodel import Session, select
from .models import Project
from .schemas import ProjectRead

def get_projects(session: Session):
    return session.exec(select(Project)).all()

def get_project(session: Session, project_id: int):
    return session.get(Project, project_id)
