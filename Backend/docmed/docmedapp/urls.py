from django.urls import path
from .views import SearchEcritApiView
from .views import UserSignUpView, EcrivainSignUpView, SignInView

urlpatterns = [
    path('search-ecrit/', SearchEcritApiView.as_view(), name='search-ecrit'),
    path('signup/user/', UserSignUpView.as_view(), name='user-signup'),
    path('signup/ecrivain/', EcrivainSignUpView.as_view(), name='ecrivain-signup'),
    path('signin/', SignInView.as_view(), name='signin'),
]






