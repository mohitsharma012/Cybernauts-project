from django.db import models
import uuid

class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=100)
    age = models.IntegerField()
    hobbies = models.JSONField(default=list)

    def __str__(self):
        return self.username
