# core/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("order/", include("order.urls")),  # Подключаем URLs приложения order
]
