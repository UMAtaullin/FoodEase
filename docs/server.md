Ошибка возникает из-за отсутствия Django REST Framework. Давайте исправим проблему и настроим API для вашего приложения заказов еды.

### 1. Установка зависимостей
```bash
pip install djangorestframework
```

### 2. Настройка Django
Добавьте в `settings.py`:
```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'order'  # Убедитесь, что название приложения совпадает с папкой
]
```

### 3. Сериализатор (order/serializers.py)
```python
from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'name', 'drink', 'flavor', 'topping', 'created_at']
        read_only_fields = ['id', 'created_at']  # Эти поля будут автоматически заполняться
```

### 4. Представление (order/views.py)
```python
from rest_framework import viewsets
from .models import Order
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
```

### 5. Маршрутизация (order/urls.py)
```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet

router = DefaultRouter()
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

### 6. Основной urls.py проекта
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('order.urls')),  # Подключение маршрутов приложения
]
```

### 7. Выполните миграции
```bash
python manage.py makemigrations
python manage.py migrate
```

Теперь ваш API будет доступен по адресам:
- `GET/POST http://localhost:8000/api/orders/` - список и создание заказов
- `GET/PUT/DELETE http://localhost:8000/api/orders/{id}/` - работа с конкретным заказом

**Важные моменты:**
1. Проверьте название папки приложения: должно быть `order`, а не `oreder` (как в вашем вопросе)
2. Для фронтенда потребуется настроить CORS (как в предыдущих ответах)
3. Рекомендую добавить валидацию в сериализатор для полей заказа
4. Для безопасности добавьте права доступа в `OrderViewSet`:
```python
from rest_framework import permissions

class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    ...
```