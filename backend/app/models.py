from sqlmodel import SQLModel, Field
from typing import Optional, List

class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    short_desc: str
    long_desc: Optional[str] = None
    tech: Optional[str] = None  # comma-separated tags or a JSON string
    link: Optional[str] = None
    repo: Optional[str] = None
