from rest_framework import viewsets

from src.Models import Position


class PositionsViewSet(viewsets.ModelViewSet):
    queryset = Position.PositionModel.objects.all()
    serializer_class = Position.PositionSerializer
