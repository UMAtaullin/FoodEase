# order/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.order, name="order"),
    path("success/", views.order_success, name="order_success"),
]
