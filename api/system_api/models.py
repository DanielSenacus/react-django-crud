from django.db import models

# Create your models here.

class Users(models.Model):
    name = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)
    roles = models.CharField(max_length=10)
    company = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=50)
    location = models.CharField(max_length=100)

class Companies(models.Model):
    adminUser = models.ForeignKey(Users,on_delete=models.CASCADE, null=False,blank=False)
    nit = models.IntegerField()
    companysName = models.CharField(max_length=20)
    companysBrandName = models.CharField(max_length=20)
    address = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    webstie = models.URLField(max_length=200)
    location = models.CharField(max_length=100)

class AccessLocations(models.Model):
    name = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    company = models.ForeignKey(Companies,on_delete=models.CASCADE, null=False,blank=False)
    location = models.CharField(max_length=200)
    state = models.BooleanField()
    accessHours = models.CharField(max_length=100)

class AccessHours(models.Model):
    accesspoint = models.ForeignKey(AccessLocations,on_delete=models.CASCADE, null=False,blank=False)
    startTime = models.TimeField()
    endTime = models.TimeField()
    user = models.ForeignKey(Users,on_delete=models.CASCADE, null=False,blank=False)






