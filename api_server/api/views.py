from django.utils.timezone import now
from django.utils.dateparse import parse_datetime
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Interaction, Feedback
import json


@api_view(['POST'])
@permission_classes([AllowAny])
def log_interaction(request):
    try:
        data = request.data
        if isinstance(data, dict):
            data = [data]
        interactions = []
        for interaction in data:
            timestamp_str = interaction.get('timestamp')
            timestamp = parse_datetime(timestamp_str) if isinstance(timestamp_str, str) else now()
            interactions.append(Interaction(
                username=interaction.get('username', 'Anonymous'),
                type=interaction.get('type', 'Unknown'),
                details=interaction.get('details', {}),
                timestamp=timestamp
            ))
        Interaction.objects.bulk_create(interactions)
        return Response({"status": "success"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def submit_form(request):
    try:
        feedback = Feedback(
            ease_of_use=request.data.get('easeOfUse'),
            interface_satisfaction=int(request.data.get('interfaceSatisfaction')),
            features_used=request.data.get('featuresUsed', []),
            experience_issues=request.data.get('experienceIssues', 'no') == 'yes',
            issue_description=request.data.get('issueDescription', ''),
            performance_rating=request.data.get('performanceRating'),
            recommendation_likelihood=int(request.data.get('recommendationLikelihood')),
            additional_comments=request.data.get('additionalComments', '')
        )
        feedback.save()
        return Response({"status": "success", "message": "Feedback submitted successfully."}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": "Failed to submit feedback", "message": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def api_login_or_register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)
        return Response({'status': 'success', 'message': 'Login successful.'}, status=status.HTTP_200_OK)
    else:
        if User.objects.filter(username=username).exists():
            return Response({'status': 'error', 'message': 'Invalid username or password.'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            login(request, user)
            return Response({'status': 'success', 'message': 'User registered and logged in.'}, status=status.HTTP_201_CREATED)

