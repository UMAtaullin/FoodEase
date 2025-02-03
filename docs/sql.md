Для подключения вашего Django-приложения к PostgreSQL выполните следующие шаги:

### 1. Установка необходимых пакетов
```bash
pip install psycopg2-binary  # Рекомендуется вместо psycopg2 для простой установки
```

### 2. Настройка конфигурации БД в settings.py
Замените текущую конфигурацию DATABASES на:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'food_delivery',       # Название вашей БД
        'USER': 'delivery_user',       # Пользователь PostgreSQL
        'PASSWORD': 'securepass123',   # Пароль пользователя
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### 3. Создание БД и пользователя (исправленный скрипт)
```python
import psycopg2

try:
    connection = psycopg2.connect(
        user="postgres",
        password="your_postgres_admin_password",  # Пароль администратора PostgreSQL
        host="localhost",
        port="5432"
    )
    connection.autocommit = True
    cursor = connection.cursor()

    # Создание базы данных
    cursor.execute("CREATE DATABASE food_delivery;")
    
    # Создание пользователя
    cursor.execute("CREATE USER delivery_user WITH PASSWORD 'securepass123';")
    
    # Назначение прав
    cursor.execute("GRANT ALL PRIVILEGES ON DATABASE food_delivery TO delivery_user;")
    cursor.execute("ALTER USER delivery_user CREATEDB;")  # Для выполнения миграций

    print("База данных и пользователь успешно созданы!")

except Exception as error:
    print("Ошибка:", error)

finally:
    if 'connection' in locals() and connection:  # Исправление ошибки из примера
        cursor.close()
        connection.close()
```

### 4. Выполните миграции
```bash
python manage.py migrate
```

### Проверка подключения
1. Убедитесь, что PostgreSQL сервер запущен
2. Проверьте подключение через psql:
```bash
psql -h localhost -U delivery_user -d food_delivery
```

**Важные примечания:**
1. Замените все значения в кавычках на свои реальные данные
2. Для работы скрипта создания БД нужны права администратора PostgreSQL
3. Убедитесь, что в pg_hba.conf разрешены подключения с localhost
4. Для продакшена используйте environment variables для хранения чувствительных данных

После выполнения этих шагов ваше приложение будет работать с PostgreSQL вместо SQLite.