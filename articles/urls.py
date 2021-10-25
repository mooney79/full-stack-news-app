from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.ArticleDetailAPIView.as_view(), name="article_detail"),
    path('', views.ArticleListAPIView.as_view(), name="article_list", ),
    path('users/', views.UserListAPIView.as_view(), name="user_list"),
    path('users/<int:pk>/', views.UserDetailAPIView.as_view(), name="user_detail"),
    path('pub/', views.ArticleListFrontendView.as_view(), name="article_page_list"),
    path('personal/', views.PersonalArticleList.as_view(), name="my_articles_list"),    
    path('bitesize/', views.BitesizeAPIViewList.as_view(), name="bitesize_news_list"),   
    path('bitesize/<int:pk>/', views.BitesizeDetailAPIView.as_view(), name="bitesize_details"),     
]

# path('con/', views.ArticleListConspiracyView.as_view(), name="conspiracy_list"),
