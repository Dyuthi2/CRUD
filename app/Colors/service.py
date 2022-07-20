from sqlalchemy.orm import Session
from sqlalchemy.dialects.postgresql import insert
from sqlalchemy import create_engine
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from  Colors.orm import COLOR
from config import CONFIG


from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

user = CONFIG.DB_USER
db = CONFIG.DB_NAME
host = CONFIG.DB_HOST
password = CONFIG.DB_PASSWORD
port = CONFIG.DB_PORT

engine = create_engine(f'postgresql://{user}:{password}@{host}:{port}/{db}')
# session = Session(engine, future=True)



def get_colors():
    session = Session(engine, future=True)
    try:
        details = session.query(COLOR).all()
        return details
    except :
        session.flush()
        session.rollback()
    finally:
        session.close()









    