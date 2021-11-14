
const axios = require('axios');



const getBallance= async (msg,args)=>{
    let user_id;
    if(args.length==0){
        user_id= msg.author.id
    }
    else{
//     const guild = await client.guilds.cache.get(msg.guild.id)
//     guild.members.fetch({
//    query:'gandolh',
//    limit: 1
// })

// const member = guildMember.first()
// console.log(member)
    }
    console.log(user_id)
    const response =await axios.get(`http://localhost:8000/get_ballance?user_id=${user_id}`)
    msg.channel.send(response.data.toString());
    msg.channel.send('works');
}
module.exports= getBallance;
