from django.db import models


class Member(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    squad_id = models.IntegerField()
    position_id = models.IntegerField()

    def __str__(self):
        return self.name
