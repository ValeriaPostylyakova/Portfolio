from django.contrib import admin

from apps.main.models import Skills


@admin.register(Skills)
class SkillsAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)