from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.task_viewset import TaskViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
