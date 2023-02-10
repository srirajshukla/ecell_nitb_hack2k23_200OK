from django.db import models
from users.models import CustomUser

# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=100)
    project_owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.project_name} - {self.project_owner}"

class File(models.Model):
    file_name = models.CharField(max_length=100)
    file_type = models.CharField(max_length=100)
    belongs_to = models.ForeignKey(Project, on_delete=models.CASCADE)
    content = models.TextField()

    def __str__(self) -> str:
        return f"{self.file_name} - {self.belongs_to.project_name}"

