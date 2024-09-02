import os
import sys
import django
from django.core.management import execute_from_command_line
from django.contrib.auth import get_user_model

def create_superuser():
    User = get_user_model()
    if not User.objects.filter(username='root').exists():
        User.objects.create_superuser('root', 'root@example.com', '1234')

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'todoapp.settings')
    django.setup()
    
    try:
        print("Applying migrations...")
        execute_from_command_line(['manage.py', 'migrate'])
        
        print("Creating superuser...")
        create_superuser()
        
        print("Initialization complete.")
    except Exception as e:
        print(f"Error initializing database: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
