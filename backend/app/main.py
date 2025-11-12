# backend/app/main.py
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Session, create_engine, select
from . import models, crud, schemas
from typing import List, Generator

DATABASE_URL = "sqlite:///./portfolio.db"
engine = create_engine(DATABASE_URL, echo=False, connect_args={"check_same_thread": False})

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        crud.seed_initial_data(session)

def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session

@app.get("/")
def root():
    return {"message": "Welcome to the Portfolio API"}

@app.get("/projects", response_model=list[schemas.ProjectRead])
def read_projects(*, session: Session = Depends(get_session)):
    return crud.get_projects(session)

@app.get("/projects/{project_id}", response_model=schemas.ProjectRead)
def read_project(project_id: int, *, session: Session = Depends(get_session)):
    project = crud.get_project(session, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.get("/skills", response_model=list[schemas.SkillRead])
def read_skills(*, session: Session = Depends(get_session)):
    return crud.get_skills(session)


@app.get("/contacts", response_model=List[schemas.ContactRead])
def read_contacts(*, session: Session = Depends(get_session)):
    return crud.get_contacts(session)