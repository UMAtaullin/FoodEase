# order/views.py
from django.shortcuts import render, redirect
from .forms import OrderForm


def order(request):
    if request.method == "POST":
        form = OrderForm(request.POST)
        if form.is_valid():
            form.save()  # Сохраняем заказ в базу данных
            return redirect("order_success")  # Перенаправляем на страницу успеха
    else:
        form = OrderForm()
    return render(
        request, "forms.html", {"form": form, "title": "Страница заказа"}
    )


def order_success(request):
    return render(request, "order/print.html")
