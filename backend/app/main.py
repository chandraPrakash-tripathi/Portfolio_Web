from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Session, create_engine, select
from . import models, crud, schemas

DATABASE_URL = "sqlite:///./portfolio.db"
engine = create_engine(DATABASE_URL, echo=False, connect_args={"check_same_thread": False})

app = FastAPI(title="Portfolio API")

# CORS - allow your frontend origin(s)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","https://your-frontend-domain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/api/projects", response_model=list[schemas.ProjectRead])
def read_projects(session: Session = Depends(get_session)):
    return crud.get_projects(session)

@app.get("/api/projects/{project_id}", response_model=schemas.ProjectRead)
def read_project(project_id: int, session: Session = Depends(get_session)):
    proj = crud.get_project(session, project_id)
    if not proj:
        raise HTTPException(status_code=404, detail="Project not found")
    return proj

@app.get("/api/skills", response_model=list[schemas.SkillRead])
def read_skills(session: Session = Depends(get_session)):
    return crud.get_skills(session)

@app.post("/api/contact", status_code=201)
def submit_contact(item: schemas.ContactCreate):
    # Validate and then send email or store in DB
    # For demo, we just print; replace with an email sender in prod
    print("Contact form submitted:", item)
    # TODO: integrate SMTP or SendGrid
    return {"message":"Contact submitted"}
