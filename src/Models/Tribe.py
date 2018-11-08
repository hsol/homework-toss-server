from django.db import models
from rest_framework import serializers


class TribeModel(models.Model):
    class Meta:
        db_table = 'tribe'
    objects = models.Manager()

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class TribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TribeModel
        fields = ('id', 'name')
