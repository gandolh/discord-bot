import discord
from discord.client import Client
from discord.flags import Intents
from dotenv import load_dotenv
import os
load_dotenv()
botToken=os.getenv("botToken")

#sample emoji sentence:
# React here with: :laughing: :100: :yum: 


class MyClient(discord.Client):
    def __init__(self,*args,**kwargs):
        super().__init__(*args,**kwargs)
        self.target_message_id=907365286838161459

    async def on_ready(self):
        print('Ready')
    async def on_raw_reaction_add(self,payload):
        if payload.message_id != self.target_message_id:
            return
        guild= client.get_guild(payload.guild_id)
        if payload.emoji.name== '😆':
            role=discord.utils.get(guild.roles,name='Funny Mans')
            await payload.member.add_roles(role)
        elif payload.emoji.name== '💯':
            role=discord.utils.get(guild.roles,name='100%')
            await payload.member.add_roles(role)
        elif payload.emoji.name== '😋':
            role=discord.utils.get(guild.roles,name='Imi place sa mananc fanClub')
            await payload.member.add_roles(role)
        
    async def on_raw_reaction_remove(self,payload):
        if payload.message_id != self.target_message_id:
            return
        guild= client.get_guild(payload.guild_id)
        member = guild.get_member(payload.user_id)
        if payload.emoji.name== '😆':
            role=discord.utils.get(guild.roles,name='Funny Mans')
            await member.remove_roles(role)
        elif payload.emoji.name== '💯':
            role=discord.utils.get(guild.roles,name='100%')
            await member.remove_roles(role)
        elif payload.emoji.name== '😋':
            role=discord.utils.get(guild.roles,name='Imi place sa mananc fanClub')
            await member.remove_roles(role)

intents= discord.Intents.default()
intents.members=True


client= MyClient(intents=intents)


client.run(botToken)