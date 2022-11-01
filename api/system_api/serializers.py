from django.urls import path, include
from . models import Companies, Users
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields=('id',"name","lastName","roles",'company','address','phone','email','password','location')
        
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model=Companies
        fields=('id',"companysName","companysBrandName",'webstie','address','phone','email','nit','location','adminUser')

        

