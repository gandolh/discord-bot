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

const GetPublicKey =async(user_id)=>{
  const publicKey = await knex('Users')
  .select('PublicKey').where('UserId','=',user_id).first();

  return publicKey.PublicKey;
}


module.exports.GetPublicKey = GetPublicKey