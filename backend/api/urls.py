from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.users, name='users'),
    path('users/<uuid:user_id>/', views.update_user, name='update_user'),
]
