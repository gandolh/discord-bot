const init_barbut = (msg, args) => {
  player1_name = `<@!${msg.author.id}>`;
  player2_name = args[0];
  if(player2_name == player1_name)return;

  if (player2_name == undefined) {
    player2_name = '<@!'+process.env.OnkUserId+'>';
    play_barbut(player1_name,player2_name,msg);
  } else {
    msg.channel
      .send(
        `${player2_name}, ${player1_name} v-a provocat. ` +
          `Reactionati ca sa participati.`
      )
      .then((sentMessage) => {
        sentMessage.react("🎲");
      });
  }
};

const play_barbut = (player1_name,player2_name,msg) => {
  p1_roll = Math.floor(Math.random() * 6) + 1;
  p2_roll = Math.floor(Math.random() * 6) + 1;
  let result = "";
  let player_won = "";
  if (p1_roll >= p2_roll) player_won = player1_name;
  else {
    player_won = player2_name;
    [p1_roll,p2_roll] = [p2_roll,p1_roll]
  }
  result = `Jucatorul ${player_won} a castigat cu ${p1_roll} versus ${p2_roll}`;
  msg.channel.send(result)
};

module.exports.init_barbut = init_barbut;
module.exports.play_barbut = play_barbut;
