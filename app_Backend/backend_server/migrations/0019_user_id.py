# Generated by Django 4.2.11 on 2024-04-26 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_server', '0018_remove_accountdetails_user_accountdetails_user_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='id',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
