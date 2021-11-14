const { Blockchain, Transaction } = require('./blockchain');
const { createRegisterWallet } = require('./keygenerator.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const express = require('express')
const app = express()
app.use(express.json());
const port = 8000

// Your private key goes here
const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const IACoin = new Blockchain();

// Mine first block
IACoin.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
IACoin.addTransaction(tx1);

// Mine block
IACoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
IACoin.addTransaction(tx2);

// Mine block
IACoin.minePendingTransactions(myWalletAddress);

console.log(myWalletAddress);
console.log(`Balance is ${IACoin.getBalanceOfAddress(myWalletAddress)}`);

// Uncomment this line if you want to test tampering with the chain
// IACoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log('Blockchain valid?', IACoin.isChainValid() ? 'Yes' : 'No');



//db interaction


const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dbs/blockchainData.db',

  },
});

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

app.post('/register',(req,res)=>{

    let publicKey,privateKey;
    [publicKey,privateKey] = createRegisterWallet();
    userData=req.body; //to save into db


    res.send([publicKey,privateKey] )
    
})


app.get('/get_ballance',async (req,res)=>{
    //interogate db to find public key for user with user_id
    user_id=req.query.user_id;
    const ballance= IACoin.getBalanceOfAddress(user_id)
    res.send(ballance.toString())
})
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



  // send --- loose send la genesis block
  //borrow/lend from bot
  //reward --- la conditii