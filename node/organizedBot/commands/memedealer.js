const Memer = require("random-jokes-api");
const { MessageEmbed } = require('discord.js');
const { trivia } = require("random-jokes-api");


const  memer= async (msg,args)=>{
    if(args[0]=='help'){
        let embed = buildMemerHelper();
        msg.channel.send({ embeds: [embed] })
    }else{
        let memerThoughts = Memer[args[0]]()
        if(args[0]=='roast' && args.length>1){
            memerThoughts= memerThoughts.slice(0,-1)+`,${args[1]}`
        }


        msg.channel.send(memerThoughts)
    }

}
const socializer =async(msg,args)=>{
    if(args[0]=='help'){
        let embed = buildSocializerHelper();
        msg.channel.send({ embeds: [embed] })
    }else{
        if(args[0]=='compliment')args[0]='copmliment';
        let socializerThoughts = Memer[args[0]]()
        if(args[0]=='trivia'){
            let temporary_thought = socializerThoughts.question;
            temporary_thought+=`\n ||${socializerThoughts.answer} ||`
            socializerThoughts = temporary_thought;
        }
        if(args[0]=='copmliment' && args.length>1){
            socializerThoughts= socializerThoughts.slice(0,-1)+`,${args[1]}`
        }
        msg.channel.send(socializerThoughts)
    }
}

const animals =async(msg,args)=>{
    if(args[0]=='help'){
        let embed = buildAnimalHelper();
        msg.channel.send({ embeds: [embed] })
    }else{
        let socializerThoughts = Memer[args[0]]()
        msg.channel.send(socializerThoughts)
    }
}

const memeGenerator= async(msg,args)=>{
    let meme = Memer.meme()

        let embed = new MessageEmbed()
        .setTitle(meme.title)
        .setImage(meme.url)
        .setFooter(`Categroy: ${meme.category}`)
        msg.channel.send({ embeds: [embed] })
}

const buildMemerHelper = ()=>{
    return new MessageEmbed()
    .setColor('#2ECC71')
    .setTitle('Memer helper')
    .setDescription('Argumente ce pot fi folosite dupa Memer pentru a primi ce doriti')
    .addFields(
        { name: 'joke', value: "pentru glume", inline: false },
        { name: 'pun', value: "pentru jocuri de cuvinte", inline: false },
        { name: 'roast', value: "pentru roast", inline: false },
        { name: 'antijoke', value: "pentru antiglume", inline: false },
        { name: 'quotes', value: "pentru citate", inline: false },
        { name: 'uselessweb', value: "pentru chestii inutile", inline: false },
        { name: 'showerThought', value: "pentru ganduri random", inline: false },
        { name: 'chuckNorris', value: "pentru Chuck Norris lol", inline: false }
    )
    .setTimestamp()
    .setFooter('Felicitari!');

}
const buildSocializerHelper = ()=>{
    return new MessageEmbed()
    .setColor('#2ECC71')
    .setTitle('Socializer helper')
    .setDescription('Argumente ce pot fi folosite dupa Memer pentru a primi ce doriti')
    .addFields(
        { name: 'trivia', value: "pentru trivia", inline: false },
        { name: 'compliment', value: "pentru compliment", inline: false },
        { name: 'truth', value: "pentru adevar", inline: false },
        { name: 'wouldYouRather', value: "pentru would you rather", inline: false },
        { name: 'neverHaveIEver', value: "pentru never have i ever", inline: false }
    )
    .setTimestamp()
    .setFooter('Felicitari!');

}
const buildAnimalHelper = ()=>{
    return new MessageEmbed()
    .setColor('#2ECC71')
    .setTitle('Animals helper')
    .setDescription('Argumente ce pot fi folosite dupa Memer pentru a primi ce doriti')
    .addFields(
        { name: 'cat', value: "pentru pisici", inline: false },
        { name: 'dog', value: "pentru caini", inline: false },
        { name: 'snake', value: "pentru serpi", inline: false },
        { name: 'fox', value: "pentru vulpi", inline: false },
        { name: 'redpanda', value: "pentru panda rosu", inline: false },
        { name: 'lizard', value: "pentru soparle", inline: false },
        { name: 'otter', value: "pentru vidre", inline: false },
        { name: 'bunny', value: "pentru iepuri", inline: false }
    )
    .setTimestamp()
    .setFooter('Felicitari!');

}




module.exports.memer = memer
module.exports.socializer = socializer
module.exports.animals = animals
module.exports.memeGenerator = memeGenerator
