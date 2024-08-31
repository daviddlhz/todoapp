from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Task
import base64

class TaskAPITestCase(TestCase):
    def setUp(self):
        # Create a user for authentication
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client = APIClient()

        # Configuring basic authentication credentials
        self.client.credentials(HTTP_AUTHORIZATION='Basic ' + base64.b64encode(b'testuser:testpassword').decode('utf-8'))

    def test_create_task(self):
        data = {"title": "Test Task", "description": "Just a test task"}
        response = self.client.post('/api/tasks/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 1)

    def test_retrieve_task(self):
        task = Task.objects.create(title="Test Task", description="Just a test task")
        response = self.client.get(f'/api/tasks/{task.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], "Test Task")

    def test_update_task(self):
        task = Task.objects.create(title="Test Task", description="Just a test task")
        data = {"title": "Updated Task"}
        response = self.client.put(f'/api/tasks/{task.id}/', data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        task.refresh_from_db()
        self.assertEqual(task.title, "Updated Task")

    def test_delete_task(self):
        task = Task.objects.create(title="Test Task", description="Just a test task")
        response = self.client.delete(f'/api/tasks/{task.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Task.objects.count(), 0)
