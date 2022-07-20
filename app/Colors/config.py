import os

class CONFIG:
    DB_NAME = os.environ.get("DATABASE_NAME","postgres")
    DB_USER = os.environ.get("DATABASE_USER","postgres")
    DB_PASSWORD = os.environ.get("DATABASE_PASSWORD","postgres")
    DB_HOST = os.environ.get("DATABASE_HOST","localhost")
    DB_PORT = os.environ.get("DATABASE_PORT",5432)
    # DB_SCHEMA = os.environ.get("DATABASE_SCHEMA",'')