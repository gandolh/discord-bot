const Discord= require('discord.js');
require('dotenv').config();
client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fetch= require('node-fetch')
client.login(process.env.botToken);

client.on('ready',()=>{
    console.log('ready')
})


const replies=[
    'zi ceva',
    '🎵🎵'
]
let k=-1;

client.on('message',async (msg)=>{
    let tokens=msg.content.split(' ')



    if(msg.channel.id==process.env.botsTalkChanelId || msg.channel.id==process.env.loveChanell  ){
        if(msg.content=== 'next'){
            msg.channel.send(replies[++k % replies.length])
            
        }
        else if(tokens[0]== '!gif'){

            let keywords='fox';
            if(tokens.length >1){
                keywords = tokens.slice(1,tokens.length).join(' ');
            }
            let url=`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.tenorApiKey}&ContentFilter=high`
            let response = await fetch(url);
            let json= await response.json()
            let randomIndex= Math.floor(Math.random()*json.results.length-1)
            msg.channel.send(json.results[randomIndex].url)
            msg.channel.send(`gif from TENOR with keywords: ${keywords}`)
        }
    }
})