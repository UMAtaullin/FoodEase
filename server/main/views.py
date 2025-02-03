from django.shortcuts import render


def index(request):

    data = {
        "title": "UMHome - Главная",
        "content": "Магазин мебели",
    }
    return render(request, "main/index.html", data)
