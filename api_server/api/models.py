from django.db import models
from django.contrib.auth import get_user_model
import uuid


User = get_user_model()


class Feedback(models.Model):
    color_scheme = models.IntegerField()
    layout_organization = models.IntegerField()
    execution_performance = models.IntegerField()
    website_interactivity = models.IntegerField()
    navigation_confusion = models.IntegerField()

    def __str__(self):
        return f"Feedback {self.id}"


class Interaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=150, blank=True, null=True)
    type = models.CharField(max_length=50)
    details = models.JSONField()
    timestamp = models.DateTimeField()

    def __str__(self):
        return f"{self.username if self.username else 'Unknown'} - {self.type} - {self.timestamp}"
