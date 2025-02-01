# Generated by Django 5.1.5 on 2025-02-01 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Имя')),
                ('drink', models.CharField(max_length=100, verbose_name='Напиток')),
                ('flavor', models.CharField(max_length=100, verbose_name='Блюдо')),
                ('topping', models.CharField(max_length=100, verbose_name='Гарнир')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
            ],
        ),
    ]
