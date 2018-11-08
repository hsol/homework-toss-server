from django.db import models
from rest_framework import serializers


class PositionModel(models.Model):
    class Meta:
        db_table = 'position'
    objects = models.Manager()

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PositionModel
        fields = ('id', 'name')
