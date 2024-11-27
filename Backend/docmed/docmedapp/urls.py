from django.urls import path
from .views import SearchEcritApiView

urlpatterns = [
    path('search-ecrit/', SearchEcritApiView.as_view(), name='search-ecrit'),
]






