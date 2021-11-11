
const axios = require('axios');
const { MessageEmbed } = require('discord.js');
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

    let publicKey,privateKey;
    [publicKey,privateKey] =[response.data[0],response.data[1]];

    const exampleEmbed = new MessageEmbed()
	.setColor('#2ECC71')
	.setTitle('Inregistrat cu success')
	.setDescription('V-ati creat cu success un wallet pe IACoin Blockhain')
	.setThumbnail(image_url)
	.addFields(
		{ name: 'Cheie publica', value: publicKey, inline: false },
		{ name: 'Cheie privata', value: privateKey, inline: false },
		{ name: 'comanda verificare sold', value: 'not implemented yet', inline: false },
	)
	.setTimestamp()
	.setFooter('Felicitari!', image_url);
    msg.channel.send({ embeds: [exampleEmbed] });

}
module.exports.register = register;