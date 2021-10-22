from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass


class Article(models.Model):
    headline = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True) 
    photo1 = models.ImageField(upload_to="images/", null=True, default=None, blank=True)
    photo2 = models.ImageField(upload_to="images/", null=True, default=None, blank=True)
    photo3 = models.ImageField(upload_to="images/", null=True, default=None, blank=True)
    # category1 = models.CharField(max_length=255, null=True)
    # category2 = models.CharField(max_length=255, null=True, blank=True)
    # category3 = models.CharField(max_length=255, null=True, blank=True)
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

    CURRENT = 'cur'
    CONSPIRACY = 'con'
    ENERGY = 'nrg'
    NONE = 'non'
    AVAIL_CATS = [
        (CURRENT, 'Current Events'),
        (CONSPIRACY, 'Conspiracies'),
        (ENERGY, 'Energy and Tech'),
        (NONE, 'None'),
    ] 
    category1 = models.CharField(
        max_length=3, null=True, blank=True,
        choices=AVAIL_CATS,
        default=NONE,
    )
    category2 = models.CharField(
        max_length=3, null=True, blank=True,
        choices=AVAIL_CATS,
        default=NONE,
    )
    category3 = models.CharField(
        max_length=3, null=True, blank=True,
        choices=AVAIL_CATS,
        default=NONE,
    )



    def __str__(self):
        return self.headline

    #If you need to, you can delete a CharField, migrate, then add it back as a Foreign Key

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="profiles/", null=True)
    alias = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.user.username