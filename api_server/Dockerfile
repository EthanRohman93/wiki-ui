# Dockerfile for Django
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install dependencies
COPY ./requirements.txt /app/
RUN pip install -r requirements.txt

# Copy project
COPY . /app/

# Copy and grant execution rights to the startup script
COPY startup.sh /app/startup.sh
RUN chmod +x /app/startup.sh

# Start server using the startup script
CMD ["/app/startup.sh"]
