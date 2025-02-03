from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("order.urls")),
    path("order/", include("order.urls")),
    path("api/", include("tasks.urls")),
]
