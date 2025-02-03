from django.db import models


class Order(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    drink = models.CharField(max_length=100, verbose_name="Напиток")
    flavor = models.CharField(max_length=100, verbose_name="Блюдо")
    topping = models.CharField(max_length=100, verbose_name="Гарнир")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")

    def __str__(self):
        return f"Заказ от {self.name}"
