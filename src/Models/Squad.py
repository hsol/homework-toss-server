from django.db import models


class Position(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    tribe_id = models.IntegerField()

    def __str__(self):
        return self.name
