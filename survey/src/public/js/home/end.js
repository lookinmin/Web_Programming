$('#go_start').on("click", function () {
  location.href = "start.html";
})

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile == true) {  //모바일이면
  $("body").css("padding-top", "7vh");
  $(".wrapper").css("margin-left", "4vw");
  $(".wrapper").css("margin-right", "4vw");
  $(".item2").css("margin-top", "5vh");
  $(".item3").css("padding-top", "10vh");
  $("#left").css("display", "none");
  $("#right").css("display", "none");
  $(".sector").css("margin-bottom", "5vh");
  $(".sub_item4").css("margin-top", "3vh");
}
else {
  $(".wrapper").css("margin-top", "none");
  $(".item2").css("margin-top", "none");
  $(".item3").css("padding-top", "none");
}

// var bars = document.querySelectorAll('.bar-graph');

// var pc_1 = document.getElementById("per_L1");
// var pc_2 = document.getElementById("per_L2");
// var pc_3 = document.getElementById("per_L3");
// var pc_4 = document.getElementById("per_L4");
// var pc_5 = document.getElementById("per_L5");
// var pc_6 = document.getElementById("per_L6");
// var pc_7 = document.getElementById("per_L7");
// var pc_8 = document.getElementById("per_L8");
// var pc_9 = document.getElementById("per_L9");
// var pc_10 = document.getElementById("per_L10");
// var pc_11 = document.getElementById("per_L11");
// var pc_12 = document.getElementById("per_L12");

// var pr_1 = document.getElementById("per_R1");
// var pr_2 = document.getElementById("per_R2");
// var pr_3 = document.getElementById("per_R3");
// var pr_4 = document.getElementById("per_R4");
// var pr_5 = document.getElementById("per_R5");
// var pr_6 = document.getElementById("per_R6");
// var pr_7 = document.getElementById("per_R7");
// var pr_8 = document.getElementById("per_R8");
// var pr_9 = document.getElementById("per_R9");
// var pr_10 = document.getElementById("per_R10");
// var pr_11 = document.getElementById("per_R11");
// var pr_12 = document.getElementById("per_R12");

// function calc_right(index) {
//   var result;
//   result = 100 - index;
//   return result + "%";
// }

// var percent_left1 = $("#mk1").attr("data-percent"); //attr() 태그값 가져오기
// var percent_left2 = $("#mk2").attr("data-percent");
// var percent_left3 = $("#mk3").attr("data-percent");
// var percent_left4 = $("#mk4").attr("data-percent");
// var percent_left5 = $("#mk5").attr("data-percent");
// var percent_left6 = $("#mk6").attr("data-percent");
// var percent_left7 = $("#mk7").attr("data-percent");
// var percent_left8 = $("#mk8").attr("data-percent");
// var percent_left9 = $("#mk9").attr("data-percent");
// var percent_left10 = $("#mk10").attr("data-percent");
// var percent_left11 = $("#mk11").attr("data-percent");
// var percent_left12 = $("#mk12").attr("data-percent");

// var xmlhttp = new XMLHttpRequest();
// var url = "/src/database/per_array.json";

// xmlhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     myfunc(xmlhttp.responseText);
//   }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myfunc(resp) {
//   console.log('resp', resp)
//   var b1 = JSON.parse(resp).per1;
//   var b2 = JSON.parse(resp).per2;
//   var b3 = JSON.parse(resp).per3;
//   var b4 = JSON.parse(resp).per4;
//   var b5 = JSON.parse(resp).per5;
//   var b6 = JSON.parse(resp).per6;
//   var b7 = JSON.parse(resp).per7;
//   var b8 = JSON.parse(resp).per8;
//   var b9 = JSON.parse(resp).per9;
//   var b10 = JSON.parse(resp).per10;
//   var b11 = JSON.parse(resp).per11;
//   var b12 = JSON.parse(resp).per12;

//   var result_array = new Array();
//   console.log('ret_array', result_array);
//   result_array[0] = b1;
//   result_array[1] = b2;
//   result_array[2] = b3;
//   result_array[3] = b4;
//   result_array[4] = b5;
//   result_array[5] = b6;
//   result_array[6] = b7;
//   result_array[7] = b8;
//   result_array[8] = b9;
//   result_array[9] = b10;
//   result_array[10] = b11;
//   result_array[11] = b12;

//   displayItems(result_array);
// }


// function displayItems(items) {
//   console.log(items);
//   percent_left1 = items[0];
//   percent_left2 = items[1];
//   percent_left3 = items[2];
//   percent_left4 = items[3];
//   percent_left5 = items[4];
//   percent_left6 = items[5];
//   percent_left7 = items[6];
//   percent_left8 = items[7];
//   percent_left9 = items[8];
//   percent_left10 = items[9];
//   percent_left11 = items[10];
//   percent_left12 = items[11];

//   pc_1.innerText = percent_left1 + "%";           //왼쪽값
//   pr_1.innerText = calc_right(percent_left1);   //왼쪽값으로 계산된 오른쪽값
//   pc_2.innerText = percent_left2 + "%";
//   pr_2.innerText = calc_right(percent_left2);
//   pc_3.innerText = percent_left3 + "%";
//   pr_3.innerText = calc_right(percent_left3);
//   pc_4.innerText = percent_left4 + "%";
//   pr_4.innerText = calc_right(percent_left4);
//   pc_5.innerText = percent_left5 + "%";
//   pr_5.innerText = calc_right(percent_left5);
//   pc_6.innerText = percent_left6 + "%";
//   pr_6.innerText = calc_right(percent_left6);
//   pc_7.innerText = percent_left7 + "%";
//   pr_7.innerText = calc_right(percent_left7);
//   pc_8.innerText = percent_left8 + "%";
//   pr_8.innerText = calc_right(percent_left8);
//   pc_9.innerText = percent_left9 + "%";
//   pr_9.innerText = calc_right(percent_left9);
//   pc_10.innerText = percent_left10 + "%";
//   pr_10.innerText = calc_right(percent_left10);
//   pc_11.innerText = percent_left11 + "%";
//   pr_11.innerText = calc_right(percent_left11);
//   pc_12.innerText = percent_left12 + "%";
//   pr_12.innerText = calc_right(percent_left12);

//   for (var i = 0; i < bars.length; i++) {
//     bars[i].querySelector('div').style.width = items[i] + "%";
//   }
// }

var bars = document.querySelectorAll('.bar-graph');

var pc_1 = document.getElementById("per_L1");
var pc_2 = document.getElementById("per_L2");
var pc_3 = document.getElementById("per_L3");
var pc_4 = document.getElementById("per_L4");
var pc_5 = document.getElementById("per_L5");
var pc_6 = document.getElementById("per_L6");
var pc_7 = document.getElementById("per_L7");
var pc_8 = document.getElementById("per_L8");
var pc_9 = document.getElementById("per_L9");
var pc_10 = document.getElementById("per_L10");
var pc_11 = document.getElementById("per_L11");
var pc_12 = document.getElementById("per_L12");

var pr_1 = document.getElementById("per_R1");
var pr_2 = document.getElementById("per_R2");
var pr_3 = document.getElementById("per_R3");
var pr_4 = document.getElementById("per_R4");
var pr_5 = document.getElementById("per_R5");
var pr_6 = document.getElementById("per_R6");
var pr_7 = document.getElementById("per_R7");
var pr_8 = document.getElementById("per_R8");
var pr_9 = document.getElementById("per_R9");
var pr_10 = document.getElementById("per_R10");
var pr_11 = document.getElementById("per_R11");
var pr_12 = document.getElementById("per_R12");

bars[0].querySelector('div').style.width = pc_1.innerHTML + "%";
bars[1].querySelector('div').style.width = pc_2.innerHTML + "%";
bars[2].querySelector('div').style.width = pc_3.innerHTML + "%";
bars[3].querySelector('div').style.width = pc_4.innerHTML + "%";
bars[4].querySelector('div').style.width = pc_5.innerHTML + "%";
bars[5].querySelector('div').style.width = pc_6.innerHTML + "%";
bars[6].querySelector('div').style.width = pc_7.innerHTML + "%";
bars[7].querySelector('div').style.width = pc_8.innerHTML + "%";
bars[8].querySelector('div').style.width = pc_9.innerHTML + "%";
bars[9].querySelector('div').style.width = pc_10.innerHTML + "%";
bars[10].querySelector('div').style.width = pc_11.innerHTML + "%";
bars[11].querySelector('div').style.width = pc_12.innerHTML + "%";


total_left = document.querySelectorAll('.per_left');
for(let i=0;i<total_left.length;i++){
  total_left[i].innerHTML += "%";
}
total_right = document.querySelectorAll('.per_right');
for(let i=0;i<total_right.length;i++){
  total_right[i].innerHTML += "%";
}

var question = new Array();
question[0] = "나는 민트초코를..";
question[1] = "탕수육은 역시..";
question[2] = "술은 역시..";
question[3] = "샤워를 해야한다면..";
question[4] = "다시 태어난다면..";
question[5] = "이성을 만나야 한다면..";
question[6] = "일주일동안 한 곳만 씻어야한다면..";
question[7] = "돈을 받을 수 있다면..";
question[8] = "평생 하나만 먹어야한다면..";
question[9] = "지금 당장 연예인이 된다면..";
question[10] = "직업을 고를 수 있다면..";
question[11] = "평생 한 날씨만 지속된다면..";

var left = new Array();
left[0] = "좋아한다";
left[1] = "부먹이지";
left[2] = "소주";
left[3] = "38°C에 뜨거운 물로";
left[4] = "유재석급 연예인";
left[5] = "365일 나시만 입는\n보디빌더";
left[6] = "머리만 감기";
left[7] = "1% 확률로\n100억";
left[8] = "삼겹살";
left[9] = "블랙핑크\n5번째 멤버";
left[10] = "100만 구독자\n유튜버";
left[11] = "시간당 강수량\n20mm 비";


var right = new Array();
right[0] = "싫어한다";
right[1] = "찍먹이지";
right[2] = "맥주";
right[3] = "-15°C에 차가운 물로";
right[4] = "김연아급 스포츠스타";
right[5] = "365일 마마보이\n재벌3세";
right[6] = "양치만 하기";
right[7] = "50% 확률로\n100만원";
right[8] = "치킨";
right[9] = "이병헌급 배우";
right[10] = "대기업 회장의\n둘째아들";
right[11] = "38°C 이상의\n폭염";

let q1 = document.getElementById("question-1");
let q2 = document.getElementById("question-2");
let q3 = document.getElementById("question-3");
let q4 = document.getElementById("question-4");
let q5 = document.getElementById("question-5");
let q6 = document.getElementById("question-6");
let q7 = document.getElementById("question-7");
let q8 = document.getElementById("question-8");
let q9 = document.getElementById("question-9");
let q10 = document.getElementById("question-10");
let q11 = document.getElementById("question-11");
let q12 = document.getElementById("question-12");

let a1_L = document.getElementById("tx1_left");
let a2_L = document.getElementById("tx2_left");
let a3_L = document.getElementById("tx3_left");
let a4_L = document.getElementById("tx4_left");
let a5_L = document.getElementById("tx5_left");
let a6_L = document.getElementById("tx6_left");
let a7_L = document.getElementById("tx7_left");
let a8_L = document.getElementById("tx8_left");
let a9_L = document.getElementById("tx9_left");
let a10_L = document.getElementById("tx10_left");
let a11_L = document.getElementById("tx11_left");
let a12_L = document.getElementById("tx12_left");

let a1_R = document.getElementById("tx1_right");
let a2_R = document.getElementById("tx2_right");
let a3_R = document.getElementById("tx3_right");
let a4_R = document.getElementById("tx4_right");
let a5_R = document.getElementById("tx5_right");
let a6_R = document.getElementById("tx6_right");
let a7_R = document.getElementById("tx7_right");
let a8_R = document.getElementById("tx8_right");
let a9_R = document.getElementById("tx9_right");
let a10_R = document.getElementById("tx10_right");
let a11_R = document.getElementById("tx11_right");
let a12_R = document.getElementById("tx12_right");

q1.innerText = question[0];
q2.innerText = question[1];
q3.innerText = question[2];
q4.innerText = question[3];
q5.innerText = question[4];
q6.innerText = question[5];
q7.innerText = question[6];
q8.innerText = question[7];
q9.innerText = question[8];
q10.innerText = question[9];
q11.innerText = question[10];
q12.innerText = question[11];

a1_L.innerText = left[0].replace(/\n/g, " ");
a2_L.innerText = left[1].replace(/\n/g, " ");
a3_L.innerText = left[2].replace(/\n/g, " ");
a4_L.innerText = left[3].replace(/\n/g, " ");
a5_L.innerText = left[4].replace(/\n/g, " ");
a6_L.innerText = left[5].replace(/\n/g, " ");
a7_L.innerText = left[6].replace(/\n/g, " ");
a8_L.innerText = left[7].replace(/\n/g, " ");
a9_L.innerText = left[8].replace(/\n/g, " ");
a10_L.innerText = left[9].replace(/\n/g, " ");
a11_L.innerText = left[10].replace(/\n/g, " ");
a12_L.innerText = left[11].replace(/\n/g, " ");

a1_R.innerText = right[0].replace(/\n/g, " ");
a2_R.innerText = right[1].replace(/\n/g, " ");
a3_R.innerText = right[2].replace(/\n/g, " ");
a4_R.innerText = right[3].replace(/\n/g, " ");
a5_R.innerText = right[4].replace(/\n/g, " ");
a6_R.innerText = right[5].replace(/\n/g, " ");
a7_R.innerText = right[6].replace(/\n/g, " ");
a8_R.innerText = right[7].replace(/\n/g, " ");
a9_R.innerText = right[8].replace(/\n/g, " ");
a10_R.innerText = right[9].replace(/\n/g, " ");
a11_R.innerText = right[10].replace(/\n/g, " ");
a12_R.innerText = right[11].replace(/\n/g, " ");

// history.pushState(null, null, "#Back");
// $(window).bind("hashchange", function (){
//   history.pushState(null, null, "#Back");
// })
