from rest_framework import viewsets

from src.Models import Tribe


class TribesViewSet(viewsets.ModelViewSet):
    queryset = Tribe.TribeModel.objects.all()
    serializer_class = Tribe.TribeSerializer
