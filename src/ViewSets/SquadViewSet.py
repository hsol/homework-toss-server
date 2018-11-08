from rest_framework import viewsets

from src.Models import Squad


class SquadViewSet(viewsets.ModelViewSet):
    queryset = Squad.SquadModel.objects.all()
    serializer_class = Squad.SquadSerializer
