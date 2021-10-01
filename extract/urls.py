'''
Created on Sep. 23, 2021

@author: Louis-Philippe
'''
from django.urls import path
from .views import search_page, ajax_response, confirmation_view, \
excel_view, misa_a_jour_extract, mise_a_jour_script, maj_instruction

app_name = 'extract'

urlpatterns = [
    path('search', search_page, name='search'),
    path('ajax', ajax_response, name='ajax_url'),
    path('confirmation', confirmation_view, name='confirmation'),
    path('excel', excel_view, name='generate_excel'),
    path('upload_form', misa_a_jour_extract, name='maj_donnée'),
    path('upload_script', mise_a_jour_script, name='maj_script'),
    path('instruction', maj_instruction, name='aide'),
    
    ]
