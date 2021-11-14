
const nextlyrics= require('./commands/nextlyrics')
const sendgif = require('./commands/sendgif')
const {register,getBallance} = require('./commands/blockchaincommands')
const {roll_pacanea } = require('./commands/pacaneacommands')
const commands={
    'next': nextlyrics,
    'gif': sendgif,
    'register': register,
    'getballance':getBallance,
    'rollpacanea':roll_pacanea
}


const gotMessage= async(msg)=>{
    // if(msg.channel.id==process.env.botsTalkChanelId || msg.channel.id==process.env.loveChanell){
        
    try{
        let tokens=msg.content.split(' ')
        let command = tokens.shift();
        if(command.charAt(0)==='!'){
            command=command.substring(1)
            await commands[command.toLowerCase()](msg,tokens)
        }
    }catch(err){
        console.log('eh')
        console.log(err)

    }
// }
}

module.exports= gotMessage;