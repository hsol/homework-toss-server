import os
import re
import inspect
import importlib

from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
dirName = os.path.dirname(os.path.abspath(__file__)) + '/../src/ViewSets'
for viewSetFileName in os.listdir(dirName):
    if re.compile("ViewSet.py$").search(viewSetFileName):
        basename = viewSetFileName.replace(".py", "")
        viewSet = importlib.import_module('src.ViewSets.' + basename)

        for className, data in inspect.getmembers(viewSet, inspect.isclass):
            if className == basename:
                cls = getattr(viewSet, className)
                router.register(basename.replace("ViewSet", "").lower(), cls, basename=basename.lower())

urlpatterns = [
    url(r'', include(router.urls))
]
