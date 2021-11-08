import discord
from discord.flags import Intents
from dotenv import load_dotenv
import os
load_dotenv()
botToken=os.getenv("botToken")

#sample emoji sentence:
# React here with: :laughing: :100: :yum: 


class MyClient(discord.client):
    def __init__(self,*args,**kwargs):
        super().__init__(*args,**kwargs)
        self.target_message_id=907365286838161459

    async def on_ready(self):
        print('Ready')
    async def on_raw_reaction_add(self,payload):
         pass #aici ai ramas min 13:42

intents= discord.Intents.default()
intents.members=True


client= MyClient(intents=intents)


client.run(botToken)