from django.urls import path
from DjangoProject import views

urlpatterns = [path("api/signup/", views.signup, name="signup"), path("login/",views.login,name="login"),path("details/",views.details,name="details"),]
