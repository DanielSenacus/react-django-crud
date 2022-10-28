from django.urls import path, include
from . models import Users
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields=('id',"name","lastName","roles",'company','address','phone','email','password','location')

