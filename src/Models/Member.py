from django.db import models
from rest_framework import serializers

from src.Models import Squad, Position


class MemberModel(models.Model):
    class Meta:
        db_table = 'member'

    objects = models.Manager()

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    squad = models.ForeignKey(Squad.SquadModel, on_delete=models.CASCADE)
    position = models.ForeignKey(Position.PositionModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberModel
        fields = ('id', 'name', 'squad', 'position')
