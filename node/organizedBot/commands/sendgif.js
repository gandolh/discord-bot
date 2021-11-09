const fetch= require('node-fetch')


const  sendGif= async (msg,args)=>{
    let keywords='fox';
    if(args.length >0){
        keywords = args.join(' ');
    }
    let url=`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.tenorApiKey}&ContentFilter=high`
    let response = await fetch(url);
    let json= await response.json()
    let randomIndex= Math.floor(Math.random()*json.results.length-1)
    msg.channel.send(json.results[randomIndex].url)
    msg.channel.send(`gif from TENOR with keywords: ${keywords}`)
}
module.exports = sendGif