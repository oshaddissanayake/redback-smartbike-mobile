# Generated by Django 4.2.11 on 2024-04-17 06:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend_server', '0011_messages'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messages',
            name='timestamp_read',
            field=models.DateTimeField(default=django.utils.timezone.now, max_length=50),
        ),
        migrations.AlterField(
            model_name='messages',
            name='timestamp_sent',
            field=models.DateTimeField(default=django.utils.timezone.now, max_length=50),
        ),
    ]
