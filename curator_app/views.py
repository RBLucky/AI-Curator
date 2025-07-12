# =============================================================== #
#  IMPORTS                                                        #
# =============================================================== #

# --- Django Core Imports ---
from django.shortcuts import get_object_or_404
from django.http import HttpResponse, HttpResponseForbidden
from django.core.management import call_command
import os

# --- Django Rest Framework (DRF) Imports for the API ---
from rest_framework.views import APIView
from rest_framework.response import Response

# --- Local Application Imports ---
from .models import NewsItem, AiTool
from .serializers import NewsItemSerializer, AiToolSerializer

# =============================================================== #
#  SECURE UTILITY VIEWS                                           #
# =============================================================== #

def trigger_fetch_news_view(request, secret):
    """
    A secure view to trigger the fetch_news management command.
    Used for cron jobs or other automated tasks.
    """
    if secret != os.environ.get('CRON_SECRET'):
        return HttpResponseForbidden('Invalid secret.')

    try:
        print("Cron job triggered: Fetching news...")
        call_command('fetch_news')
        print("Cron job finished successfully.")
        return HttpResponse('News fetch command triggered successfully.')
    except Exception as e:
        print(f"Error running fetch_news command via cron: {e}")
        return HttpResponse(f'Error triggering command: {e}', status=500)


# =============================================================== #
#  RESTful API VIEWS (Serves JSON Data)                           #
#  These are the only endpoints your Next.js frontend will call.  #
# =============================================================== #

class NewsItemList(APIView):
    """
    API view to get a list of all news items.
    Accessible at: /api/news/
    """
    def get(self, request):
        news = NewsItem.objects.all().order_by('-published_date', '-fetched_date')
        serializer = NewsItemSerializer(news, many=True)
        return Response(serializer.data)

class AiToolList(APIView):
    """
    API view to get a list of all AI tools.
    Accessible at: /api/tools/
    """
    def get(self, request):
        tools = AiTool.objects.all().order_by('-added_date')
        serializer = AiToolSerializer(tools, many=True)
        return Response(serializer.data)

class AiToolDetail(APIView):
    """
    API view to get details for a single AI tool by its ID.
    Accessible at: /api/tool/<int:pk>/
    """
    def get(self, request, pk):
        tool = get_object_or_404(AiTool, pk=pk)
        serializer = AiToolSerializer(tool)
        return Response(serializer.data)