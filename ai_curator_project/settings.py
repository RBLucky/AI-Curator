# ai_curator_project/ai_curator_project/settings.py
"""
Django settings for ai_curator_project project.
"""
import os
from pathlib import Path
from dotenv import load_dotenv
import dj_database_url

# --- Initial Setup ---
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables from .env file
load_dotenv()


# --- Security and Deployment Settings ---
# SECRET_KEY is loaded from the .env file for local development,
# and from Render's environment variables in production.
SECRET_KEY = os.environ.get('SECRET_KEY')

# DEBUG is True locally, but will be False in production on Render.
# Render sets the 'RENDER' environment variable.
DEBUG = 'RENDER' not in os.environ

# Defines which hostnames are allowed to serve the site.
ALLOWED_HOSTS = []

# Automatically add Render's external hostname to ALLOWED_HOSTS when deployed.
RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)


# --- Application Definition ---
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'curator_app',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # Add Whitenoise middleware for serving static files.
    # It should be placed right after the SecurityMiddleware.
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'ai_curator_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug', # Added debug for better error pages locally
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ai_curator_project.wsgi.application'


# --- Database Configuration ---
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases
# This configuration uses the PostgreSQL database provided by Render in production,
# but falls back to the local SQLite database for development.
DATABASES = {
    'default': dj_database_url.config(
        default='sqlite:///db.sqlite3',
        conn_max_age=600
    )
}


# --- Password Validation ---
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# --- Internationalization ---
# https://docs.djangoproject.com/en/5.2/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# --- Static Files (CSS, JavaScript, Images) ---
# https://docs.djangoproject.com/en/5.2/howto/static-files/
STATIC_URL = '/static/'

# Following settings only need to be configured for production (when DEBUG is False)
if not DEBUG:
    # Tell Django to collect static files into this directory.
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    # Enable the Whitenoise storage backend to compress static files.
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


# --- Default Primary Key Field Type ---
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'