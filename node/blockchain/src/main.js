
const express = require('express')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dbs/blockchainData.db',

  },
});
const fs = require('fs')
const blockchainHelpers = require('./blockchainHelpers')
const dbHelpers = require('./dbHelpers')
const app = express()
app.use(express.json());
const port = 8000








app.all('/', (req, res) => {
    res.send({status:'it\'s alive!'}).status(200)
  })

app.post('/register',async (req,res)=>{
    userData=req.body;
    let registeredData= await blockchainHelpers.registerAttempt(userData);
    res.send(registeredData)
    
})


app.post('/reward',async( req,res)=>{
  data=req.body;
  const toPublicKey = await dbHelpers.GetPublicKey(data.taggedUserId)
  blockchainHelpers.rewardPlayer(toPublicKey,data.ammount)
  res.send(`<@!${data.taggedUserId}> a fost recompensat cu ${data.ammount} de catre <@!${data.adminUserId}>`)
})


app.get('/get_ballance',async (req,res)=>{
  user_id=req.query.user_id;
  const toPublicKey = await dbHelpers.GetPublicKey(user_id)
  resultBallance = await blockchainHelpers.getBallance(toPublicKey);
  res.send(resultBallance)

})
 const server= app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


  // send --- loose send la genesis block
  //borrow/lend from bot


  async function exitHandler() {
    await fs.writeFileSync(
      "dbs/blockchainData.json",
      JSON.stringify(blockchainHelpers.IACoin),
      "utf-8"
    );
  }
  // Catches exit event
  process.on("exit", exitHandler.bind(null));

  // Catches ctrl+c event
  process.on("SIGINT", () => {
    exitHandler();
    process.exit(-1);
  });

  // Catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null));
  process.on("SIGUSR2", exitHandler.bind(null));

  // Catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null));