from discord.ext import commands
import discord

from dotenv import load_dotenv
import os
load_dotenv()
botToken=os.getenv("botToken")
bot =commands.Bot(command_prefix='!')

bot.remove_command('help')

@bot.command()
async def help(ctx):
    embed= discord.Embed(
        title='TOP SECRET',
        description='This is a private command.',
        color=discord.Colour.green()
    )
    embed.set_thumbnail(url='https://i.pinimg.com/originals/bc/75/06/bc7506ba497f3aad78f8c0381c971cb6.jpg')
    embed.add_field(
        name='!help',
        value='hmm',
        inline=True
    )   
    embed.add_field(
        name='!combo',
        value='second hmm',
        inline=True
    )
    await ctx.send(embed=embed)


@bot.command() 
async def info(ctx):
    '''
    ctx- context object (information about how the command is executed)
    !info
    '''

    # await ctx.send(ctx.guild)
    # await ctx.send(ctx.author)
    # await ctx.send(ctx.message.id)


@bot.command()
async def punch(ctx,arg):
    '''
    ex: !punch Justin
    '''
    await ctx.send(f'{str(ctx.author)[0:-5]} punched {arg}')


@bot.command()
async def combo(ctx,*arg):
    '''
    combo people into one
    '''
    everyone= ' '.join(arg)
    await ctx.send(f'{str(ctx.author)[0:-5]} Comboed {everyone}')

bot.run(botToken)