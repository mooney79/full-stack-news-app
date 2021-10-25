from django.contrib import admin
from .models import Article, User, Bitesize
from django.contrib.auth.admin import UserAdmin


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Article)
admin.site.register(Bitesize)
