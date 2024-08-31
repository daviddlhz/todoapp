from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    """
    Serializer for the Task model.
    """

    class Meta:
        model = Task
        fields = '__all__'

    def validate_title(self, value):
        """
        Validate that the task title is at least 5 characters long.
        """
        if len(value) < 5:
            raise serializers.ValidationError("The title must be at least 5 characters long.")
        return value

    def validate_description(self, value):
        """
        Validate that the description is not empty.
        """
        if not value.strip():
            raise serializers.ValidationError("The description cannot be empty.")
        return value
