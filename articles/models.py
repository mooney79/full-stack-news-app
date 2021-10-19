from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass


class Article(models.Model):
    headline = models.CharField(max_length=255)
    text = models.TextField()
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True) 
    photo1 = models.ImageField(upload_to="images/", null=True, default=None, blank=True)
    photo2 = models.ImageField(upload_to="images/", null=True, default=None, blank=True)
    photo3 = models.ImageField(upload_to="images/", null=True, default=None, blank=True)
    category1 = models.CharField(max_length=255, null=True, blank=True)
    category2 = models.CharField(max_length=255, null=True, blank=True)
    category3 = models.CharField(max_length=255, null=True, blank=True)
    DRAFT = 'dft'
    SUBMITTED = 'sub'
    PUBLISHED = 'pub'
    REJECTED = 'rej'
    PHASE_CHOICES = [
        (DRAFT, 'Draft'),
        (SUBMITTED, 'Submitted'),
        (PUBLISHED, 'Published'),
        (REJECTED, 'Rejected'),
    ]
    phase = models.CharField(
        max_length=3,
        choices=PHASE_CHOICES,
        default=DRAFT,
    )

    def __str__(self):
        return self.headline