from django.contrib import admin
from .models import ExtractRow
# Register your models here.
# admin.site.register(ExtractRow)

@admin.register(ExtractRow)
class ExtractRowAdmin(admin.ModelAdmin):
    list_display = ("nom", "prénom", "groupe")
    list_filter = ("groupe", )
    search_fields = ("nom__startswith", )