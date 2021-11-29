
const nextlyrics= require('./commands/nextlyrics');
const sendgif = require('./commands/sendgif');
const getBallance = require('./commands/blockchaincommands/getballance');
const register = require('./commands/blockchaincommands/registerblockchain');
const roll_pacanea  = require('./commands/pacaneacommands/pacanea');
const barbut = require('./commands/pacaneacommands/barbut')
const _21 = require('./commands/pacaneacommands/_21')
const memedealer = require('./commands/memedealer')
const commands={
    'next': nextlyrics,
    'gif': sendgif,
    'register': register,
    'getballance':getBallance,
    'rollpacanea':roll_pacanea,
    'barbut':barbut.init_barbut,
    '_21':_21.init_21,
    'memer':memedealer.memer,
    'socialize': memedealer.socializer,
    'animals':memedealer.animals,
    'generatememe':memedealer.memeGenerator
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
    if(user.bot==true)
        return;
    mentions_dict= reaction.message.mentions.users;
    mentions_data=[];
    for(let [key,value] of mentions_dict)
    mentions_data.push(value)

   if(reaction.emoji.name =='🎲'){
       let player1_name="";
       let player2_name="";
        if(mentions_data.length<2)return;
        if(user.id == mentions_data[0].id ){
                   player1_name= `<@!${mentions_data[0].id}>`
                   player2_name=`<@!${mentions_data[1].id}>`
                   barbut.play_barbut(player1_name,player2_name,reaction.message);
        }
   }

   if(reaction.emoji.name =='🃏' && user.id == mentions_data[0].id){
       let content =reaction.message.content
       old_score=parseInt(content.slice(content.indexOf('```')+3))
       new_score = old_score + Math.floor(Math.random()*13+1)
       content=content.replace(`\`\`\`${old_score}\`\`\``,`\`\`\`${new_score}\`\`\``)
       if(new_score>21){
           content= `Ai pierdut la 21 cu ${new_score}, <@!${mentions_data[0].id}>`
           await reaction.message.reactions.removeAll()
       }
       await reaction.users.remove(user.id);
       await reaction.message.edit(content)

   }
   if(reaction.emoji.name =='☑️' && user.id == mentions_data[0].id){
    let result_message;   
    let bot_score = Math.floor(Math.random()*7+15)
    let content =reaction.message.content
    let your_score= parseInt(content.slice(content.indexOf('```')+3))
    if(bot_score>your_score || your_score>21)result_message= `Ai pierdut`;
    else result_message=`Ai castigat`
    result_message+=` la 21 cu ${your_score} versus ${bot_score}, <@!${mentions_data[0].id}>`;
    await reaction.message.reactions.removeAll()
    reaction.message.edit(result_message)
   }


  }

module.exports.GotMessageHandler= gotMessage;
module.exports.ReactionAddedHandler= ReactionAdded;