from rest_framework import serializers
from .models import Article, User, Bitesize

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('__all__')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

class BitesizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bitesize
        fields = ('__all__')