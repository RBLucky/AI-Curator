# curator_app/management/commands/fetch_news.py

import feedparser
from dateutil import parser
from django.core.management.base import BaseCommand
from django.utils import timezone
from curator_app.models import NewsSource, NewsItem, Category

class Command(BaseCommand):
    help = 'Fetches news items from all active NewsSource objects.'

    def handle(self, *args, **kwargs):
        self.stdout.write("Starting news fetch process...")
        
        sources = NewsSource.objects.all()
        created_count = 0
        updated_count = 0

        for source in sources:
            feed = feedparser.parse(source.rss_url)

            for entry in feed.entries:
                published_time = timezone.now() # Default value
                if hasattr(entry, 'published_parsed') and entry.published_parsed:
                    try:
                        # Attempt to parse the date
                        published_time = parser.parse(entry.published)
                        if published_time.tzinfo is None:
                            published_time = timezone.make_aware(published_time, timezone.get_default_timezone())
                    except (parser.ParserError, TypeError):
                        # If parsing fails, keep the default 'now'
                        self.stdout.write(self.style.WARNING(f"Could not parse date for entry: {entry.link}"))
                        pass
                
                # Use update_or_create to avoid duplicates
                news_item, created = NewsItem.objects.update_or_create(
                    link=entry.link,
                    defaults={
                        'title': entry.title,
                        'summary': entry.summary,
                        'published_date': published_time,
                        'source': source,
                        'category': source.category
                    }
                )

                if created:
                    created_count += 1
                else:
                    updated_count += 1

            source.last_fetched = timezone.now()
            source.save()
        
        # A single summary line at the end
        summary_message = f"News fetch process finished. Created: {created_count}, Updated: {updated_count}."
        self.stdout.write(self.style.SUCCESS(summary_message))