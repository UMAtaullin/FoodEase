# order/forms.py
from django import forms
from .models import Order


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ["name", "drink", "flavor", "topping"]
