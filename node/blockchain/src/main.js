
const express = require('express')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dbs/blockchainData.db',

  },
});

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
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



  // send --- loose send la genesis block
  //borrow/lend from bot
  //reward --- la conditii