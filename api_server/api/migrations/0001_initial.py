# Generated by Django 5.0.2 on 2024-04-22 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ease_of_use', models.CharField(choices=[('very_easy', 'Very easy'), ('easy', 'Easy'), ('neutral', 'Neutral'), ('difficult', 'Difficult'), ('very_difficult', 'Very difficult')], max_length=20)),
                ('interface_satisfaction', models.IntegerField()),
                ('features_used', models.JSONField()),
                ('experience_issues', models.BooleanField()),
                ('issue_description', models.TextField(blank=True, null=True)),
                ('performance_rating', models.CharField(choices=[('excellent', 'Excellent'), ('good', 'Good'), ('average', 'Average'), ('poor', 'Poor'), ('terrible', 'Terrible')], max_length=20)),
                ('recommendation_likelihood', models.IntegerField()),
                ('additional_comments', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Interaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50)),
                ('details', models.JSONField()),
                ('timestamp', models.DateTimeField()),
            ],
        ),
    ]
