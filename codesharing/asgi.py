"""
ASGI config for codesharing project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import re_path

from project.views import FileConsumer

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "codesharing.settings")

django_asgi_application = get_asgi_application()

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<filename>\w+)/$', FileConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    "http": django_asgi_application,
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    )
})