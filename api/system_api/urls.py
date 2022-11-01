from django.urls import re_path, path
from api.system_api.views import userApi, emailAPi
from . import views

urlpatterns=[
    re_path(r'^usuarios/',views.userApi),
    path(r'usuariosdelete/<int:id>',views.userEditApi),
    re_path(r'^company$',views.companyApi),
    path(r'company/<int:id>',views.companyEditApi),
    re_path(r'^company/([0-9]+$)',views.companyApi),
    

    re_path(r'^login$',views.emailAPi),
]