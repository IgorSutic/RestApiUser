SETUP DRF:

  * Virtual environment: 
      - python3 -m venv ~/env
      - source ~/env/bin/activate (deactivate)
  
  * Requirements:
      - pip install requirements.txt
  
  * DRF:
      - django-admin.py startproject "project_name"
      - django-admin.py startapp "application_name"
      - python3 manage.py createsuperuser
      - python3 manage.py makemigrations
      - python3 manage.py migrate
      - python3 manage.py runserver
