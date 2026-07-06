from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from apps.main.models import (
    DevelopmentHistory,
)


class DevelopmentHistoryIconsInline(admin.TabularInline):
    model = DevelopmentHistory.icons.through
    extra = 1


@admin.register(DevelopmentHistory)
class DevelopmentHistoryAdmin(TranslationAdmin):
    inlines = [DevelopmentHistoryIconsInline]
