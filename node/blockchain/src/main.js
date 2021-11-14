const { Blockchain, Transaction } = require('./blockchain');
const { createRegisterWallet } = require('./keygenerator.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const express = require('express')
const app = express()
app.use(express.json());
const port = 8000

// Create new instance of Blockchain class
const IACoin = new Blockchain();
// Mine first block
//db interaction


const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dbs/blockchainData.db',

  },
});

const registerAttempt= async(userData)=>{
  let publicKey,privateKey;
  [publicKey,privateKey] = createRegisterWallet();
  let registeredData={
    'publicKey':publicKey,
    error:true
  }
  let ThiUserRow;
  ThiUserRow= await knex('Users')
  .select('*').where('UserId',userData.user_id).first();

  if(ThiUserRow==null){
    await knex('Users').insert({
      'UserId': userData.user_id,
      'PublicKey':publicKey,
      'PrivateKey': privateKey
    })
    // ThiUserRow = await knex('Users')
    // .select('*').where('UserId',userData.user_id).first();
    registeredData.error=false;
    registeredData.publicKey=publicKey
  }else{
    registeredData.publicKey = ThiUserRow.PublicKey
  }
  
    // const newUserData = await knex('Users')
    // .select('*').where(Id==idInsertedRow)
    return registeredData;

}
const querries_test= async()=>{
  const selectedRows = await knex('Users')
      .select('*')
    console.log(selectedRows)
}
// querries_test();



//end db interaction

app.all('/', (req, res) => {
    res.send({status:'it\'s alive!'}).status(200)
  })

app.post('/register',async (req,res)=>{


    userData=req.body;
    let registeredData= await registerAttempt(userData);

    res.send(registeredData)
    
})


app.get('/get_ballance',async (req,res)=>{
    //interogate db to find public key for user with user_id
    user_id=req.query.user_id;
    publicKey= await knex('Users')
    .select('PublicKey').where('UserId',user_id).first().publicKey;
    console.log(publicKey)
    const ballance= IACoin.getBalanceOfAddress(publicKey)
    res.send(ballance.toString())
})
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



  // send --- loose send la genesis block
  //borrow/lend from bot
  //reward --- la conditii