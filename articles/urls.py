from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.ArticleDetailAPIView.as_view(), name="article_detail"),
    path('', views.ArticleListAPIView.as_view(), name="article_list", ),
    path('users/', views.UserListAPIView.as_view(), name="user_list")
]