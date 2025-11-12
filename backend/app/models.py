from typing import Optional, List
from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship

class ProjectTag(SQLModel, table=True):
    project_id: Optional[int] = Field(default=None, foreign_key="project.id", primary_key=True)
    tag_id: Optional[int] = Field(default=None, foreign_key="tag.id", primary_key=True)

class ProjectImage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: int = Field(foreign_key="project.id")
    url: str
    alt_text: Optional[str] = None
    order: int = Field(default=0)

    # relationship back to Project
    project: Optional["Project"] = Relationship(back_populates="images")

class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    slug: str = Field(index=True, unique=True)
    short_desc: Optional[str] = None
    long_desc: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    is_featured: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    images: List[ProjectImage] = Relationship(back_populates="project")
    tags: List["Tag"] = Relationship(back_populates="projects", link_model=ProjectTag)

class Tag(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True)
    slug: str = Field(unique=True)

    projects: List[Project] = Relationship(back_populates="tags", link_model=ProjectTag)

class Skill(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True)
    logo_url: Optional[str] = None
    level: Optional[str] = None
    order: int = Field(default=0)

class Contact(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    message: str
    source: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
