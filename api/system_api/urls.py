from django.urls import re_path
from api.system_api.views import userApi, emailAPi
from . import views

urlpatterns=[
    re_path(r'^usuarios$',views.userApi),
    re_path(r'^usuarios/([0-9]+$)',views.userApi),

    re_path(r'^login$',views.emailAPi),
]