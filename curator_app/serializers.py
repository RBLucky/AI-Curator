from rest_framework import serializers
from .models import NewsItem, AiTool

class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = '__all__'

class AiToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = AiTool
        fields = '__all__'