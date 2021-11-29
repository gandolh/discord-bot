const replies=[
    'zi ceva',
    '🎵🎵'
]
let k=-1;

module.exports = (msg,args)=>{
     msg.channel.send(replies[++k % replies.length])
    console.log(args)
}
