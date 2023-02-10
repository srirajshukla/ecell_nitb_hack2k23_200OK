from django.urls import include, path

from .views import handleSharing

urlpatterns = [
    path('file/<str:filename>/', handleSharing)
]