from email import message
import itertools
import email
import json
from operator import itemgetter
from tkinter.tix import Tree
from unicodedata import name
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from . models import Users, Companies
from . serializers import UserSerializer, CompanySerializer
from django.http.response import JsonResponse
from . import location

@csrf_exempt
def userApi(request):
    if request.method=='GET':
        usersData = Users.objects.all()
        serializer =  UserSerializer(usersData,many=True)
        return JsonResponse(serializer.data,safe=False)
    elif request.method=='POST':
        jd = json.loads(request.body)
        idlist = len(Users.objects.values('id'))
        newId = idlist + 1
        Users.objects.create(id=newId,name=jd['name'],lastName=jd['lastname'],address=jd['address'],phone=jd['phone'],email=jd['email'],password=jd['password'],company=jd['company'],roles=jd['roles'],location=location.getUbication())
        return JsonResponse({'message':"User created Successfully"},safe=False)
    
    else:
        return JsonResponse({'message':"Invalid method"},safe=False)

@csrf_exempt
def userEditApi(request,id):
    if request.method=='DELETE':        
        deleteUser = list(Users.objects.filter(id=id).values())
        if len(deleteUser) > 0:
            Users.objects.filter(id=id).delete()
            datos = {'message':"User deleted successfully"}
        else:
            datos = {'message':"User not found"}
        return JsonResponse(datos)
    else:
        return JsonResponse({'message':"Invalid method"},safe=False)                
    

@csrf_exempt
def companyApi(request,id=0):
    if request.method=='GET':
        companyData = Companies.objects.all()
        serializer =  CompanySerializer(companyData,many=True)
        return JsonResponse(serializer.data,safe=False)
    elif request.method=='POST':
        jd = json.loads(request.body)
        idlist = len(Companies.objects.values('id'))
        newId = idlist + 1
        linkedUser = Users.objects.get(id=jd['adminUser'])
        Companies.objects.create(id=newId,adminUser=linkedUser,companysName=jd['companysName'],companysBrandName=jd['companysBrandName'],address=jd['address'],phone=jd['phone'],email=jd['email'],webstie=jd['webstie'],nit=jd['nit'],location=location.getUbication())
        return JsonResponse({'message':'success'},safe=False)
        
    else:
        return JsonResponse({'message':"Invalid method"},safe=False)
    
@csrf_exempt
def companyEditApi(request,id):
    if request.method=='DELETE':        
        deleteCompany = list(Companies.objects.filter(id=id).values())
        if len(deleteCompany) > 0:
            Companies.objects.filter(id=id).delete()
            datos = {'message':"Company deleted successfully"}
        else:
            datos = {'message':"Company not found"}
        return JsonResponse(datos)
    else:
        return JsonResponse({'message':"Invalid method"},safe=False)       

        
       

# Create your views here.

@csrf_exempt
def emailAPi(request):
    if request.method=='POST':
        jd = json.loads(request.body)
        email = jd['email']
        password = jd['password']       
        validateEmail = list(Users.objects.filter(email__contains=email).values())
        if len(validateEmail) > 0:
            validatePassword = validateEmail[0]['password']
            if password == validatePassword:
                res = {'auth':True, 'user': validateEmail}
                return JsonResponse(res,safe=False)
            else:
                res = {'auth':False}
                return JsonResponse(res,safe=False)
        else:
            res = {'auth':False}
            return JsonResponse(res,safe=False)
    else:
        return JsonResponse({'message':"Invalid method"},safe=False)
 






   



   
