from django.db import models


class DevelopmentHistory(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.CharField(max_length=20)
    icons = models.ManyToManyField("DevelopmentHistoryIcons", blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Development History"
        verbose_name_plural = "Development Histories"


class DevelopmentHistoryIcons(models.Model):
    image = models.FileField(
        upload_to="development_history_icons", blank=True, null=True
    )

    def __str__(self):
        return self.image.name

    class Meta:
        verbose_name = "Development History Icon"
        verbose_name_plural = "Development History Icons"
