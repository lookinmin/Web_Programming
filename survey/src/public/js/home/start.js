$("#btn_St").on("click", function(){
  const req = {
    id: "id", 
    name: "name",
    psword: "psword",
  };
  //req란 오브젝트 생성
  fetch("/game", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, //내가 전달하는 데이터가 json데이터라고 알려줘야함
    body: JSON.stringify(req) //body로 데이터 전송
  })
    .then((res) => res.json())
    .then((res) => {
      if(res){
        console.log('res', res);
      }
    })
    //fetch().then() - > 서버에서 넘어온 데이터 받기
    //이 떄 promise 형식으로 넘어오는데 .then()을 한번 더 써주면 됨
    .catch((err) => {
      console.log(err);
    });
  location.href = "../game";
})
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile == true){
  $('body').css("padding-top","30vh");
  $('.title').css("font-size", "3vh");
  $('#btn_St').css("width", "35vw");
  $('#btn_St').css("height", "3vh");
}