import json

def handleSharing(request, filename):
    pass


from channels.generic.websocket import AsyncWebsocketConsumer

class FileConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.filename = self.scope["url_route"]["kwargs"]["filename"]
        self.group_name = f"file_{self.filename}"

        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)
    
    async def receive(self, text_data):
        print("got this data: ", text_data)
        text_data_json = json.loads(text_data)

        change = text_data_json["change"]
        username = text_data_json["username"]

        await self.channel_layer.group_send(
            self.group_name,
            {
                "type": "change_message",
                "change": change,
                "username": username,
            },
        )

    async def change_message(self, event):
        change = event["change"]
        username = event["username"]

        await self.send(text_data=json.dumps({"change": change, "username": username}))