# Generated by Django 3.2.7 on 2021-09-28 10:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0004_sample_city'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sample',
            name='city',
        ),
        migrations.RemoveField(
            model_name='sample',
            name='creation_date',
        ),
        migrations.RemoveField(
            model_name='sample',
            name='surname',
        ),
    ]
