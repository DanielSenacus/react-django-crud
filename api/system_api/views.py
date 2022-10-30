from email import message
import email
import json
from operator import itemgetter
from tkinter.tix import Tree
from unicodedata import name
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from . models import Users
from . serializers import UserSerializer
from django.http.response import JsonResponse
from . import location

@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        usersData = Users.objects.all()
        serializer =  UserSerializer(usersData,many=True)
        return JsonResponse(serializer.data,safe=False)
    elif request.method=='POST':
        jd = json.loads(request.body)
        Users.objects.create(name=jd[name],lastname=jd[lastname],address=jd[address],phone=jd[phone],email=jd[email],password=jd[password],company=jd[company],roles=[roles],location=location.getUbication())
        return JsonResponse({'message':"User added succesfully"},safe=False)
        
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
 






   



   
