from django.db import models
from rest_framework import serializers

from src.Models import Tribe


class SquadModel(models.Model):
    class Meta:
        db_table = 'squad'
    objects = models.Manager()

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    tribe = models.ForeignKey(Tribe.TribeModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class SquadSerializer(serializers.ModelSerializer):
    class Meta:
        model = SquadModel
        fields = ('id', 'name', 'tribe')
