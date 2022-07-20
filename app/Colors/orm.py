from sqlalchemy.orm import Session
from sqlalchemy import asc, create_engine, Column, Integer, String
import sys, os
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config import CONFIG

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

user = CONFIG.DB_USER
db = CONFIG.DB_NAME
host = CONFIG.DB_HOST
password = CONFIG.DB_PASSWORD
port = CONFIG.DB_PORT

engine = create_engine(f'postgresql://{user}:{password}@{host}:{port}/{db}')
session = Session(engine, future=True)

class COLOR(Base):
    __tablename__ = 'colors'
    id = Column('id',Integer,primary_key = True)
    color_name = Column('color_name',String(25),nullable=True)
    color_category = Column('color_category',String(25),nullable=True)
    # __table_args__ = {'schema':'public'}

Base.metadata.create_all(engine)    