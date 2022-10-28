from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from . models import Users
from . serializers import UserSerializer
from django.http.response import JsonResponse

@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        usersData = Users.objects.all()
        serializer =  UserSerializer(usersData,many=True)
        return JsonResponse(serializer.data,safe=False)
    else:
        return JsonResponse("no hay nada bro",safe=False)
# Create your views here.

