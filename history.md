#frontend
npm create vite .
npm i
npm run dev
npm install @mui/x-date-pickers@^6.19.0 dayjs@^1.11.10
npm i react-router-dom

#backend
git clone git@github.com:UMAtaullin/FoodEase.git
cd server
python3 -m venv .env
source .env/bin/activate
python -m pip install Django==5.1.5
pip list
./manage.py startapp main
django-admin startproject core .
python manage.py startapp order
python manage.py makemigrations
python manage.py migrate
pip freeze > requirements.txt
pip install djangorestframework
pip install django-cors-headers
pip install psycopg2-binary  # Рекомендуется вместо psycopg2 для простой установки




 2005  django-admin startproject config .
 2006  python manage.py runserver
 2007  python manage.py startapp recipes

 2020  sudo kill $(sudo lsof -t -i :80)
 2021  python manage.py runserver
 2022  sudo netstat -tulpn
 2023  docker rm CONTAINER food_backend
 2024  sudo fuser -k 5432/tcp
 2025  sudo netstat -tulpn
 2026  python manage.py runserver
 2027  sudo fuser -k 7200/tcp
 2028  python manage.py runserver
 2029  sudo netstat -tulpn

 2037  python manage.py startapp recipes
 2038  python manage.py startapp users
 2039  python manage.py startapp api
 2040  python manage.py makemigrations users
 2045  pip freeze | grep -v "pkg-resources" > requirements.txt 
 2046  pip install --upgrade -r requirements.txt
 2047  python manage.py makemigrations users
 2048  python manage.py migrate
 2049  python manage.py makemigrations recipes
 2050  python manage.py migrate
 2051  python manage.py runserver
 2052  python manage.py createsuperuser # ural Zcchw
 2053  python manage.py runserver
