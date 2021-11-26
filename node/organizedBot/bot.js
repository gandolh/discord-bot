const Discord= require('discord.js');
const commandHandler = require('./commands')
require('dotenv').config();
client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS"] });
client.login(process.env.botToken);

client.once('ready',()=>{
    console.log('ready')
})
client.on('messageCreate',commandHandler.GotMessageHandler)
client.on('messageReactionAdd',commandHandler.ReactionAddedHandler);