from django.urls import path
from FollowMeApi import views
from knox import views as knox_views
from .views import LoginAPI
from django.urls import path
app_name='FollowMeApp'


urlpatterns = [
    path('api/User/Login/', views.CustomUserController.Login, name="Login"),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]