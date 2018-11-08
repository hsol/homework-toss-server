from rest_framework import viewsets

from src.Models import Member


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.MemberModel.objects.all()
    serializer_class = Member.MemberSerializer
