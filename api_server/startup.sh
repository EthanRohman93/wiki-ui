#!/bin/sh

# Apply database migrations
echo "Applying database migrations..."
python manage.py makemigrations
python manage.py migrate --noinput

# Start server
echo "Starting server..."
gunicorn server.wsgi:application --bind 0.0.0.0:8000

