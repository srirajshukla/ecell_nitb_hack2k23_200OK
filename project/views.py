import json
import y_py as Y

from channels.generic.websocket import AsyncWebsocketConsumer

class FileConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.filename = self.scope["url_route"]["kwargs"]["filename"]
        self.group_name = f"file_{self.filename}"

        self.ydoc = Y.YDoc()

        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)
    
    async def send_message(self, data_obj):
        if not data_obj:
            return

        await self.channel_layer.group_send(
            self.group_name,
            {
                "type": "change_message",
                "message": data_obj
            },
        )


    async def receive(self, text_data=None, bytes_data=None, **kwargs):
        # print("\n\ngot this data: ", bytes_data, "\n\n")
        await self.send_message(bytes_data)


    async def change_message(self, event):
        # print("change message function is called: \n", event, "\n\n")

        await self.send(bytes_data=event["message"])