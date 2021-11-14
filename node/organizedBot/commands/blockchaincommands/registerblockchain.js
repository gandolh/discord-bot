const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const image_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:'+
'ANd9GcSDHO_GpOfFxDzJKGlBUj8CCQZOIuY1olYYng&usqp=CAU';
const congrats_url='https://www.desicomments.com/wp-content/'+
'uploads/2018/10/Congratulations-Image.jpg'

const register = async (msg,args)=>{
    const response =await axios.post('http://localhost:8000/register',{
         user_id:msg.author.id,
         username:  msg.author.username,
         discriminator: msg.author.discriminator
     })
     registeredData =response.data
 
     const exampleEmbed = createEmbedRegister(registeredData.error)
     msg.channel.send({ embeds: [exampleEmbed] });
 
 }
 
 const createEmbedRegister =(error)=>{
     if(error==false)
         return new MessageEmbed()
         .setColor('#2ECC71')
         .setTitle('Inregistrat cu success')
         .setDescription('V-ati creat cu success un wallet pe IACoin Blockhain')
         .setThumbnail(image_url)
         .addFields(
             { name: 'Cheie publica', value: registeredData.publicKey, inline: false },
             { name: 'Cheie privata', value: 'E SECRETA MAN', inline: false },
             { name: 'comanda verificare sold', value: '!getballance <username>', inline: false },
         )
         .setTimestamp()
         .setFooter('Felicitari!', image_url);
 
     return new MessageEmbed()
     .setColor('#E74C3C')
     .setTitle('Sunteti deja inregistrat')
     .setDescription('Posibil sa fi gresit comanda?')
     .setThumbnail(image_url)
     .addFields(
         { name: 'Cheie publica', value: registeredData.publicKey, inline: false },
         { name: 'Cheie privata', value: 'E SECRETA MAN', inline: false },
         { name: 'comanda verificare sold', value: '!getballance <username>', inline: false },
     )
     .setTimestamp()
     .setFooter('OOPS!?', image_url);
 }
 module.exports= register;