
const nextlyrics= require('./commands/nextlyrics');
const sendgif = require('./commands/sendgif');
const getBallance = require('./commands/blockchaincommands/getballance');
const register = require('./commands/blockchaincommands/registerblockchain');
const roll_pacanea  = require('./commands/pacaneacommands/pacanea');
const barbut = require('./commands/pacaneacommands/barbut')
const commands={
    'next': nextlyrics,
    'gif': sendgif,
    'register': register,
    'getballance':getBallance,
    'rollpacanea':roll_pacanea,
    'barbut':barbut.init_barbut
}


const gotMessage= async(msg)=>{
    try{
        let tokens=msg.content.split(' ')
        let command = tokens.shift();
        if(command.charAt(0)==='>'){
            command=command.substring(1)
            await commands[command.toLowerCase()](msg,tokens)
        }
    }catch(err){
        console.log('eh')
        console.log(err)

    }
}

const ReactionAdded = async (reaction, user) => {
   if(reaction.emoji.name =='🎲' && user.bot==false){
       let player1_name="";
       let player2_name="";
       reacts_dict= reaction.message.mentions.users;
       extracted_data=[];
       for(let [key,value] of reacts_dict)
       extracted_data.push(value)
        if(extracted_data.length<2)return;
        if(user.id == extracted_data[0].id ){
                   player1_name= `<@!${extracted_data[0].id}>`
                   player2_name=`<@!${extracted_data[1].id}>`
                   barbut.play_barbut(player1_name,player2_name,reaction.message);
        }
   }
  }

module.exports.GotMessageHandler= gotMessage;
module.exports.ReactionAddedHandler= ReactionAdded;