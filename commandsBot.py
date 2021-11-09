from discord.ext import commands

from dotenv import load_dotenv
import os
load_dotenv()
botToken=os.getenv("botToken")
bot =commands.Bot(command_prefix='!')

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
    !punch Justin
    '''
    await ctx.send(f'{str(ctx.author)[0:-5]} punched {arg}')


@bot.command()
async def combo(ctx,*arg):
    '''
    !punch Justin
    '''
    everyone= ' '.join(arg)
    await ctx.send(f'{str(ctx.author)[0:-5]} Comboed {everyone}')

bot.run(botToken)