
const nextlyrics= require('./commands/nextlyrics')
const sendgif = require('./commands/sendgif')
const commands={
    'next': nextlyrics,
    'gif': sendgif
}


const gotMessage= async(msg)=>{
    if(msg.channel.id==process.env.botsTalkChanelId || msg.channel.id==process.env.loveChanell){
    try{
        let tokens=msg.content.split(' ')
        let command = tokens.shift();
        if(command.charAt(0)==='!'){
            command=command.substring(1)
            await commands[command](msg,tokens)
        }
    }catch(err){
        console.log('eh')
    }
}
}

module.exports= gotMessage;