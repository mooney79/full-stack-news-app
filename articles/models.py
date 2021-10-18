from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class User(AbstractUser):
    pass

class Article(models.Model):
    headline = models.CharField(max_length=255)
    text = models.TextField()
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True) 
    photo1 = models.ImageField(upload_to="images/", null=True)
    photo2 = models.ImageField(upload_to="images/", null=True)
    photo3 = models.ImageField(upload_to="images/", null=True)
    category1 = models.CharField(max_length=255, null=True)
    category2 = models.CharField(max_length=255, null=True)
    category3 = models.CharField(max_length=255, null=True)