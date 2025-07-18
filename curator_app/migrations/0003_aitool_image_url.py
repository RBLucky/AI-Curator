# Generated by Django 5.2.1 on 2025-07-12 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curator_app', '0002_create_superuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='aitool',
            name='image_url',
            field=models.URLField(blank=True, help_text='URL for a logo or promotional image.', null=True),
        ),
    ]
