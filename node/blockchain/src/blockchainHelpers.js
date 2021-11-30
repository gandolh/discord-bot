const { Blockchain,Transaction } = require('./blockchain');
const { createRegisterWallet } = require('./keygenerator');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const fs = require('fs')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dbs/blockchainData.db',

  },
});

//owner private key here
const OwnerKeys = ec.keyFromPrivate('d3214895f6ccb5d19228f9f313d02daf6abf73ce910a361c22b26b1b400d147f');
const OwnerWallet = OwnerKeys.getPublic('hex');
let IACoin =new Blockchain();

const initializeBlockchain = async ()=>{
  // IACoin.miningReward= 1000000;
  
  // IACoin.minePendingTransactions(OwnerWallet);
  // IACoin.miningReward= 0;
  // const selectedRows = await knex('Users')
  // .select('*').where('PublicKey','!=',OwnerWallet)
  // for(let selectedRow of selectedRows){
  //   const tx1 = new Transaction(OwnerWallet, selectedRow.PublicKey, 100);
  //   tx1.signTransaction(OwnerKeys);
  //   IACoin.addTransaction(tx1);
  // }
  // IACoin.minePendingTransactions(OwnerWallet);
  OldIACoinData = require('../dbs/blockchainData.json')
  IACoin.chain= OldIACoinData.chain
  IACoin.difficulty= OldIACoinData.difficulty
  IACoin.pendingTransactions= OldIACoinData.pendingTransactions
  IACoin.miningReward= OldIACoinData.miningReward

}

initializeBlockchain();


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
    registeredData.error=false;
    registeredData.publicKey=publicKey
    rewardPlayer(publicKey,100)

  }else{
    registeredData.publicKey = ThiUserRow.PublicKey
  }
    return registeredData;

}


const rewardPlayer = ( ToPublicKey , ammount)=>{
  const tx1 = new Transaction(OwnerWallet, ToPublicKey, ammount);
  tx1.signTransaction(OwnerKeys);
  IACoin.addTransaction(tx1);
  IACoin.minePendingTransactions(OwnerWallet);
}

const getBallance = async (publicKey)=>{

     let result;
     if(publicKey==undefined)
     result= 'Utilizator neinregistrat. Va rugam introduceti comanda >register'
     else{
       result= IACoin.getBalanceOfAddress(publicKey).toString()
      }
     return result;
    }

module.exports.initializeBlockchain = initializeBlockchain;
module.exports.registerAttempt = registerAttempt;
module.exports.rewardPlayer = rewardPlayer;
module.exports.getBallance = getBallance;
module.exports.IACoin = IACoin;