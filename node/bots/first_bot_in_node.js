console.log('beep beep')

const Discord    = require('discord.js');
require('dotenv').config();
client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login(process.env.botToken);

client.on('ready',()=>{
    console.log('ready')
})


const replies=[
    'zi ceva',
    'nu vreau sa ma mai joc cu inima',
    'zi daca a ta e la altcineva',
    'dar zi ceva',
    '🎵🎵'
]
let k=-1;

client.on('message',(msg)=>{
    if(msg.channel.id==process.env.botsTalkChanelId && msg.content=== 'next') //bots-comands
        msg.channel.send(replies[++k % replies.length])
})