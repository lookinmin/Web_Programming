var mariadb = require('mariadb');
var bkfd2Password = require('pbkdf2-password');
var hasher = bkfd2Password();

const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: 3308,
  user: 'root',
  password: 'minsu0418',
  connectionLimit: 5,
  database:"testdb"
});

exports.SignIn = async function(req){
  var json = {};
  json.code = 0;
  var conn = await pool.getConnection();
  var id = req.body.id;
  var pw = req.body.pw;

  var query = "SELECT id, pw, salt, nickname FROM member where id'"+ id +"' ; ";

  var rows = await conn.query(query);
  if(rows[0]){
    var userSalt = rows[0].salt;
    var userPass = rows[0].pw;

    return new Promise((resolve, reject)=>{
      hasher({pw:pw, salt:userSalt}, (err, pass, salt, hash) => {
        if(hash!=userPass){
          json.code = 100;
          json.msg = "패스워드 불일치";
          json.data = {};
        }
        else{
          json.data = rows[0];
        }
        resolve(json);
      });
    });
  }
  else{
    json.code = 100;
    json.msg = "ID 불일치";
    json.daata = {};
    return json;
  }
};

exports.SignUp = async (req,res) =>{
  var resultcode = 0;
  
  var conn = await pool.getConnection();
  var id = req.body.id;
  var pw = req.body.pw;
  var nickname = req.body.nickname;

  var query = "SELECT id, pw, nickname, salt FROM member where id='" + id +"';";
  var rows = await conn.query(query);

  if(rows[0] == undefined){
    hasher({pw:pw}, async(err, pass, salt, hash)=>{
      var query = "insert into member(id, pw, nickname, salt, date) values ('" + id +"','" + hash +"','" + nickname+"','" + salt+"', CURRENT_TIMESTAMP());";
      var rows = await conn.query(query);
    });
  }
  else{
    resultcode = 100;
  }
  return resultcode;  
};