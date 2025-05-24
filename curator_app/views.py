from django.shortcuts import render, get_object_or_404
from .models import NewsItem, AiTool, Category

# Gemini client function
from .ai_client import get_explanation


# Better views than Cape Town

def home_view(request):
    """
    View for the homepage.
    Fetches the 5 most recent news items and 5 most recent AI tools.
    """
    latest_news = NewsItem.objects.all().order_by('-published_date', '-fetched_date')[:5]
    latest_tools = AiTool.objects.all().order_by('-added_date')[:5]
    
    context = {
        'latest_news': latest_news,
        'latest_tools': latest_tools,
    }
    return render(request, 'home.html', context)

def news_list_view(request):
    """
    View to display a full list of all news items, ordered by date.
    """
    news_items = NewsItem.objects.all()
    context = {
        'news_items': news_items,
        'page_title': 'All AI News'
    }
    return render(request, 'curator_app/news_list.html', context)

def tool_list_view(request):
    """
    View to display a full list of all AI tools.
    """
    ai_tools = AiTool.objects.all()
    context = {
        'ai_tools': ai_tools,
        'page_title': 'All AI Tools & Products'
    }
    return render(request, 'curator_app/tool_list.html', context)

def tool_detail_view(request, pk):
    """
    View to display details for a single AI tool and handle AI explanation requests.
    """
    tool = get_object_or_404(AiTool, pk=pk)
    explanation = None # Initialize explanation as None

    # This part handles the form submission when the user clicks the "Ask AI" button
    if request.method == 'POST':
        query = tool.perplexity_query # We use the query stored on our tool model
        if query:
            # Call our verified ai_client function to get the explanation
            explanation = get_explanation(query)
        else:
            explanation = "No specific query is configured for this tool in the admin panel."

    context = {
        'tool': tool,
        'explanation': explanation, # Pass the explanation (or None) to the template
    }
    return render(request, 'curator_app/tool_detail.html', context)