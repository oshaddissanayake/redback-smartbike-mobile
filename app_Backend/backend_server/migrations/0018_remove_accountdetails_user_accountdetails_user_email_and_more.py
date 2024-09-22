# Generated by Django 4.2.11 on 2024-04-26 10:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend_server', '0017_alter_user_user_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accountdetails',
            name='user',
        ),
        migrations.AddField(
            model_name='accountdetails',
            name='user_email',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='email_accountdetails', serialize=False, to='backend_server.user'),
        ),
        migrations.AddField(
            model_name='accountdetails',
            name='user_username',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, related_name='username_accountdetails', to='backend_server.user'),
        ),
    ]
