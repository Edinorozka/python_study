# Generated by Django 4.1.9 on 2023-05-18 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_category_alter_post_options_post_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='slug',
        ),
    ]
