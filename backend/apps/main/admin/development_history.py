from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from apps.main.models import (
    DevelopmentHistory,
    DevelopmentHistoryIcons,
)


class DevelopmentHistoryIconsInline(admin.TabularInline):
    model = DevelopmentHistoryIcons
    extra = 1


@admin.register(DevelopmentHistory)
class DevelopmentHistoryAdmin(TranslationAdmin):
    inlines = [DevelopmentHistoryIconsInline]
