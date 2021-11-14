
const axios = require('axios');



const getBallance= async (msg,args)=>{
    let user_id;
    if(args.length==0){
        user_id= msg.author.id
    }
    else{
        user_id=args[0].slice(3,-1)
    }
    const response =await axios.get(`http://localhost:8000/get_ballance?user_id=${user_id}`)
    msg.channel.send(response.data.toString());
}
module.exports= getBallance;
