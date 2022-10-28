# Generated by Django 4.1.2 on 2022-10-28 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system_api', '0002_alter_accesslocations_accesshours'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accesslocations',
            name='address',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='accesslocations',
            name='email',
            field=models.EmailField(max_length=100),
        ),
        migrations.AlterField(
            model_name='accesslocations',
            name='location',
            field=models.CharField(max_length=200),
        ),
    ]
