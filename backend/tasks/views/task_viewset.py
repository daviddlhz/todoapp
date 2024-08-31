import logging
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, ValidationError
from ..models import Task
from ..serializers import TaskSerializer

# Logger configuration for the application
logger = logging.getLogger(__name__)


class TaskViewSet(viewsets.ModelViewSet):
    """
    ViewSet to handle the CRUD operations of the tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request):
        """
        Returns a list of all tasks.
        """
        return super().list(request)

    def retrieve(self, request, *args, **kwargs):
        """
        Returns a specific task by its ID.
        """
        try:
            task = self.get_object()
        except Task.DoesNotExist:
            logger.error(f"Task with ID {kwargs['pk']} not found.")
            raise NotFound('The task was not found.')
        return Response(self.get_serializer(task).data)

    def create(self, request, *args, **kwargs):
        """
        Create a new task.
        """
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            logger.error(f"Validation error when creating task: {e}")
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        self.perform_create(serializer)
        logger.info(f"Task '{serializer.data['title']}' created successfully.")
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        """
        Updates an existing task.
        """
        try:
            task = self.get_object()
        except Task.DoesNotExist:
            logger.error(f"Task with ID {kwargs['pk']} not found.")
            raise NotFound('The task was not found.')

        serializer = self.get_serializer(task, data=request.data, partial=True)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            logger.error(f"Validation error when updating task: {e}")
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_update(serializer)
        logger.info(f"Task '{serializer.data['title']}' updated successfully.")
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        """
        Eliminates a specific task.
        """
        try:
            task = self.get_object()
        except Task.DoesNotExist:
            logger.error(f"Task with ID {kwargs['pk']} not found.")
            raise NotFound('The task was not found.')

        self.perform_destroy(task)
        logger.info(f"Task with ID {kwargs['pk']} deleted successfully.")
        return Response(status=status.HTTP_204_NO_CONTENT)
