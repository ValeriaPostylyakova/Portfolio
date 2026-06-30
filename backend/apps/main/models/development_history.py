from django.db import models

class DevelopmentHistory(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.CharField(max_length=20)

    def __str__(self):
        return self.title


class DevelopmentHistoryIcons(models.Model):
    image = models.ImageField(upload_to='development_history_icons', blank=True, null=True)
    development_history = models.ForeignKey(DevelopmentHistory, on_delete=models.CASCADE, related_name='icons')

    def __str__(self):
        return f"{self.development_history.title} - {self.image.name}"