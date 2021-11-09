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
    if message.content=='cool':
        await message.add_reaction('\U0001F60E')
    # await message.channel.send('follow random casualtiess')


@client.event
async def on_message_edit(before,after):
    await before.channel.send(
        f'{before.author} edit a message.\n' 
        f'Before:{before.content}\n'
        f'After:{after.content}\n'

        )


@client.event
async def on_reaction_add(reaction,user):
    await reaction.message.channel.send(f'woahhh woah,{user}, you\'re going bankrupt {reaction.emoji}');
client.run(botToken)