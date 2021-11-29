const init_21 = (msg, args) => {
    player1_name = `<@!${msg.author.id}>`;
      player2_name = '<@!'+process.env.OnkUserId+'>';
      msg.channel
        .send(`${player1_name}, Reactionati cu cartea de joc pentru a mai trage o carte.\n`+
        `Reactionati cu bifa daca doriti sa va opriti.\n`+
        `Scorul dumneavoastra este \`\`\`${Math.floor(Math.random()*13+1)}\`\`\``
        )
        .then((sentMessage) => {
          sentMessage.react("🃏");
          sentMessage.react("☑️");
        });
  };
  

  
  module.exports.init_21 = init_21;
  