const express = require('express');    //express로 서버 open
const app = express();

app.listen(8080, function(){           //서버Port, 서버 open후 실행코드
  console.log('listening on 7080');
});

app.use(express.static(__dirname+"/HTML"));
app.use(express.static(__dirname+"/HTML/CSS"));
app.use(express.static(__dirname+"/HTML/images"));
app.use(express.static(__dirname+"/HTML/JS"));
app.use(express.static(__dirname+"/HTML/JQuery"));
console.log(__dirname);
//static 원하는 경로를 읽을 때 사용  -> HTML 폴더내의 모든 파일을 읽어오겠다
app.use(express.urlencoded({extended:false}));                  //html 에서 submit한 값 받아오기 위해 선언

app.get("/", (req,res)=>{
  res.sendFile(__dirname + '/HTML/Start_Page.html');
})
app.get("/exer", function(req, res){
  res.sendFile(__dirname + '/HTML/Exer.html');
});
app.get("/meal", function(req, res){
  res.sendFile(__dirname + '/HTML/Meal.html');
});
app.get("/members", function(req, res){
  res.sendFile(__dirname + '/HTML/members.html');
});
app.get("/members/members2", function(req, res){
  res.sendFile(__dirname + '/HTML/members2.html');
});
app.get("/My_info", function(req, res){
  res.sendFile(__dirname + '/HTML/My_info.html');
});
app.get("/calendar", function(req, res){
  res.sendFile(__dirname + '/HTML/calendar.html');
});
app.get("/search", function(req, res){
  res.sendFile(__dirname + '/HTML/search.html');
});
app.get("/help", function(req, res){
  res.sendFile(__dirname + '/HTML/Help.html');
});
app.get("/findID", (req,res)=>{
  res.sendFile(__dirname+"/HTML/findID.html");
})
app.get("/findPW", (req,res)=>{
  res.sendFile(__dirname+"/HTML/findPW.html");
})

