import discord
from dotenv import load_dotenv
import os
load_dotenv()
botToken=os.getenv("botToken")

client= discord.Client()

@client.event
async def on_ready():
    print('Bot is now online and ready to roll!')


@client.event
async def on_message(message):
    if message.author ==client.user:
        return 
    if message.content== 'hello':
        await message.channel.send('Welcome to test Channell')
        return
    
    # await message.channel.send('follow random casualtiess')


client.run(botToken)