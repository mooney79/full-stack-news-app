# Generated by Django 3.2.8 on 2021-10-20 16:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0010_article_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='levels',
        ),
    ]
