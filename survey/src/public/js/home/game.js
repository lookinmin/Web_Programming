"use strict";

var Number = 0; //

var result_Arr = devide_Arr(Number,arrDB);

var question = [];
var left = [];
var right = [];


for(let i = 0;i<Number;i++){
  question[i] = result_Arr[0][i];
  left[i] = result_Arr[1][i];
  right[i] = result_Arr[2][i];
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  $(".wrapper").css("padding-top", "10vh");
  $("#title").css("font-size", "6vw");
  $(".item1").css("margin-bottom", "6vh");
  $(".val_text").css("font-size", "4.5vw");
  $("#go_prev").css("width", "18vw");
  $("#go_prev").css("height", "3vh");
  $("#btn_text").css("font-size", "4vw");
  $("#btn_text").css("margin-top", "9px");
  $("#btn_text").css("margin-right", "22px");
  $("#complete").css("width", "18vw");
  $("#complete").css("height", "3vh");
  $("#complete").css("font-size", "3.5vw");
}

let title = document.getElementById("title");
let left_q = document.getElementById("val_1");
let right_q = document.getElementById("val_2");
var idx = 0;
var value = 0;

var state = null;
var tit = null;
var url = location.href;

function idx_max(index, max) {
  if (index >= max) {
    index = max;
  }
  return index;
}

class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  length() {
    return this.arr.length;
  }
  value(index) {
    return this.arr[index];
  }
}
const stack = new Stack();

$(".item2").on("click", function () {
  idx++;
  value = idx_max(idx, Number);
  let quest = question[value];
  let ans1 = left[value];
  let ans2 = right[value];
  if (value !== 0) {
    $("#go_prev").css("display", "grid");
  }

  if (value === Number) {
    $(".item2").click(function () { alert("수고하셨습니다. 종료버튼을 눌러주세요."); });
    $(".item3").click(function () { alert("수고하셨습니다. 종료버튼을 눌러주세요."); });
  }

  if (idx === 12) {
    $('#complete').css("display", "grid");
  }

  title.innerText = quest;
  left_q.innerText = ans1;
  right_q.innerText = ans2;

  stack.push('a');
  url = url.replace(/\&page=([0-9]+)/ig, '');
  var newUrl = url += '&page=' + value;
  history.pushState(state, tit, newUrl);
  console.log(stack);
});

$(".item3").on("click", function () {
  idx++;
  value = idx_max(idx, Number);
  let quest = question[value];
  let ans1 = left[value];
  let ans2 = right[value];
  if (value !== 0) {
    $("#go_prev").css("display", "grid");
  }

  if (value === 11) {
    $(".item2").on("click", function () { alert("수고하셨습니다. 종료버튼을 눌러주세요."); });
    $(".item3").on("click", function () { alert("수고하셨습니다. 종료버튼을 눌러주세요."); });
  }

  if (idx === 12) {
    $('#complete').css("display", "grid");
  }

  title.innerText = quest;
  left_q.innerText = ans1;
  right_q.innerText = ans2;

  stack.push('b');
  url = url.replace(/\&page=([0-9]+)/ig, '');
  var newUrl = url += '&page=' + value;
  history.pushState(state, tit, newUrl);
  console.log(stack);
});


$("#go_prev").on("click", function () {
  idx--;
  let quest = question[idx];
  let ans1 = left[idx];
  let ans2 = right[idx];
  if (idx !== 0) {
    $("#go_prev").css("display", "grid");
  }
  if (idx === 0) {
    $("#go_prev").css("display", "none");
  }

  if (idx != Number) {
    $('#complete').css("display", "none");
  }

  title.innerText = quest;
  left_q.innerText = ans1;
  right_q.innerText = ans2;

  stack.pop();
  url = url.replace(/\&page=([0-9]+)/ig, '');
  var newUrl = url += '&page=' + idx;
  history.pushState(state, tit, newUrl);
  console.log(stack);
});

window.onpopstate = function (event) {
  if (event) {
    idx--;
    let quest = question[idx];
    let ans1 = left[idx];
    let ans2 = right[idx];
    if (idx !== 0) {
      $("#go_prev").css("display", "grid");
    }
    if (idx === 0) {
      $("#go_prev").css("display", "none");
    }

    if (idx != 11) {
      $('#complete').css("display", "none");
    }

    title.innerText = quest;
    left_q.innerText = ans1;
    right_q.innerText = ans2;

    stack.pop();
    url = url.replace(/\&page=([0-9]+)/ig, '');
    var newUrl = url += '&page=' + idx;
    if (idx < 0) {
      location.href = "../start";
    }
    history.pushState(state, tit, newUrl);
    console.log(stack);
  }
  else {
    console.log('');
  }
}

document.getElementById("complete").addEventListener("click", () => {
  const result = returnStack();
  const req = {
    key0: result[0],
    key1: result[1],
    key2: result[2],
    key3: result[3],
    key4: result[4],
    key5: result[5],
    key6: result[6],
    key7: result[7],
    key8: result[8],
    key9: result[9],
    key10: result[10],
    key11: result[11],
  }
  fetch("/end", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then(res => {
      console.log('res: ', res);
    })
    .catch((err) => {
      console.log('err: ', err);
    })
});


function returnStack() {                     //결과값을 스택으로 만들어서 return
  var result = [];
  for (let i = 0; i < stack.length(); i++) {
    if (stack.value(i) === 'a') {
      result[i] = 'a_' + (i + 1);
    }
    else if (stack.value(i) === 'b') {
      result[i] = 'b_' + (i + 1);
    }
  }
  return result;                                          //node js로 보내야되는 결과값을 담은 배열
}
//idx가 11일때, 종료버튼 + 다음페이지 이동


function devide_Arr(num, arrDB){
  var question = [];
  var left = [];
  var right = [];

  //등차수열 3n+1
  for(let i=0;i<num;i++){
    question[i] = arrDB[3*i+1];
    left[i] = arrDB[3*i+2];
    right[i] = arrDB[3*i+3];
  }

  var result = [];
  result[0] = question;
  result[1] = left;
  result[2] = right;
  return result;
}