# Generated by Django 3.2.7 on 2021-10-21 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('extract', '0002_extractrow_sex'),
    ]

    operations = [
        migrations.AddField(
            model_name='extractrow',
            name='adresse',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]