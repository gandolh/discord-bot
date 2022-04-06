console.log("beep beep");

const Discord = require("discord.js");
require("dotenv").config();
client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login(process.env.botToken);

client.on("ready", () => {
	console.log("ready");
});

client.on("message", async (msg) => {
    try{
        if (msg.channel.id == process.env.secretCommandsChanellId && msg.content[0] == "~" && msg.author.bot == false) {
            channel = await client.channels.fetch(process.env.chanellToSend);
            if (msg.content.slice(1, 13) == "random selea")
                channel.send({ files: [{ attachment: `./imgs/${Math.floor(Math.random() * 11 + 1)}.jpg` }] });
            else if (msg.content.slice(1, 5) == "send"){
                channel.send({ files: [{ attachment: `./imgs/${msg.content.slice(6)}` }] });
            }
            else channel.send(msg.content.slice(1));
        }
    }catch(ex){
        console.log(ex)
    }

});
