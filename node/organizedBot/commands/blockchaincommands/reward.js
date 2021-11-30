const axios = require("axios");
const rewardPlayer = async (msg, args) => {
  const taggedUserId = args[0].slice(3, -1);
  const adminUserId = msg.author.id;
  const ammount = parseInt(args[1]);
  if (args.length < 2) {
    msg.channel.send("Va rugam dati tag user-ului de recompensat si o valoare");
    return;
  }
  if (ammount >= 100 || ammount < 0) {
    msg.channel.send("Va rugam alegeti o recompensa intre 0 si 100 IACOIN-uri");
    return;
  }

  if (
    [
      process.env.GandolhUserId,
      process.env.ThomasUserId,
      process.env.HoriaUserId,
      process.env.OnkUserId,
    ].indexOf(adminUserId) == -1
  ) {
    msg.channel.send("Nu aveti permisiunea pentru a acorda reward-uri");
    return;
  }

  const response = await axios.post(`http://localhost:8000/reward`, {
    taggedUserId,
    adminUserId,
    ammount,
  });
  msg.channel.send(response.data.toString());
};
module.exports = rewardPlayer;
