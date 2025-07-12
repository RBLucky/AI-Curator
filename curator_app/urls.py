from django.urls import path
from .views import NewsItemList, AiToolList, AiToolDetail, trigger_fetch_news_view

app_name = 'curator_app'

urlpatterns = [
    path('api/news/', NewsItemList.as_view(), name='api-news-list'),
    path('api/tools/', AiToolList.as_view(), name='api-tool-list'),
    path('api/tool/<int:pk>/', AiToolDetail.as_view(), name='api-tool-detail'),
    path('fetch-news/<str:secret>/', trigger_fetch_news_view, name='fetch-news'),
]