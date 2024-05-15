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
        interactions = []
        for interaction_data in request.data:  # Assuming data is an array of interactions
            details = interaction_data.get('details', {})
            timestamp = parse_datetime(interaction_data.get('timestamp')) or now()
            interactions.append(Interaction(
                username=interaction_data.get('username', 'Anonymous'),
                type=interaction_data.get('type', 'Unknown'),
                details=details,
                timestamp=timestamp
            ))
        Interaction.objects.bulk_create(interactions)
        return Response({"status": "success"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny])
def submit_form(request):
    try:
        username = request.data.get('username', '')
        question_data = {key: int(value) for key, value in request.data.items() if key != 'username'}
        feedback = Feedback(username=username, **question_data)
        feedback.save()
        return Response({"status": "success", "message": "Feedback submitted successfully."}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": "Failed to submit feedback", "message": str(e)}, status=status.HTTP_400_BAD_REQUEST)

