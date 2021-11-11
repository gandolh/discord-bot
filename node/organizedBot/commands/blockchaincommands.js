
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


const getBallance= async (msg,args)=>{
    const username= args[0];
    // console.log(username)
    //daca nu e username ia-l default pe cel al authorului
    //search userId with username on this channell
    user_id='04729aaee497f99ff7ed4da9b7a5c23912da6533783b5cee16839b1e2628bc3413672b407a68c7a15a6fe3ea238b16f26e7a35755e258a0b9fb3d007da7a2e9c94'
    const response =await axios.get(`http://localhost:8000/get_ballance?user_id=${user_id}`)
    msg.channel.send(response.data.toString());
}
module.exports.register = register;
module.exports.getBallance = getBallance;
