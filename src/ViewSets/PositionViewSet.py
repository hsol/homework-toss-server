from rest_framework import viewsets

from src.Models import Position


class PositionViewSet(viewsets.ModelViewSet):
    queryset = Position.PositionModel.objects.all()
    serializer_class = Position.PositionSerializer
