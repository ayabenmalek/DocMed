from django.urls import path
from .views import SearchEcritApiView, EcritApiView, EcritsEcrivainApiView, InfoEcrivainApiView, AddEcritApiView, \
    AddEcrivainApiView, DeleteEcritApiView

urlpatterns = [
    path('search-ecrit/', SearchEcritApiView.as_view(), name='search-ecrit'),
    path('Ecrit/<int:ecrit_id>/', EcritApiView.as_view(), name='Ecrit'),
    path('EcritsEcrivain/<int:ecrivain_id>/', EcritsEcrivainApiView.as_view(), name='EcritsEcrivain'),
    path('InfoEcrivain/<int:ecrivain_id>/', InfoEcrivainApiView.as_view(), name='InfoEcrivain'),
    path('AddEcrit/', AddEcritApiView.as_view(), name='AddEcrit'),
    path('AddEcrivain/', AddEcrivainApiView.as_view(), name='AddEcrivain'),
    path('DeleteEcrit/<int:ecrit_id>/', DeleteEcritApiView.as_view(), name='DeleteEcrit'),
    path('EditEcrit/<int:ecrit_id>/', EditEcritApiView.as_view(), name='EditEcrit'),
]





