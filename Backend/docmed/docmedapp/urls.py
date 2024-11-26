from django.urls import path
from .views import SearchEcritView

urlpatterns = [
    path('search-ecrit/', SearchEcritView.as_view(), name='search-ecrit'),
]


