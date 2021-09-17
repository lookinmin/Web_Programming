document.querySelector(".make_btn").addEventListener("click", () => {
  location.href = "../make";
});


var state = null;
var tit = null;
var url = location.href;
var idx = 0;
var cnt = 0;//클릭 cnt
var dbList;//텍스트 띄울 db 받는 배열
document.querySelector('.add_btn').addEventListener("click", () => {
  cnt++;
  var question = "";
  var ansA = "";
  var ansB = "";
  switch (cnt) {
    case 1:
      let questionList = document.createElement('div');
      questionList.setAttribute('class', 'question_list');

      question = "민트초코";
      ansA = "좋아한다";
      ansB = "싫어한다";

      questionList.appendChild(CreateNewDiv('q7', question, ansA, ansB));

      question = "민트초코1";
      ansA = "좋아한다1";
      ansB = "싫어한다1";

      questionList.appendChild(CreateNewDiv('q8', question, ansA, ansB));

      question = "민트초코2";
      ansA = "좋아한다2";
      ansB = "싫어한다2";
      questionList.appendChild(CreateNewDiv('q9', question, ansA, ansB));

      let moreBtn = document.querySelector('.more_btn');
      let body = document.body;
      body.insertBefore(questionList, moreBtn);
      break;
    case 2:
      let questionList2 = document.createElement('div');
      questionList2.setAttribute('class', 'question_list');

      question = "민트초코";
      ansA = "좋아한다";
      ansB = "싫어한다";

      questionList2.appendChild(CreateNewDiv('q10', question, ansA, ansB));

      question = "민트초코1";
      ansA = "좋아한다1";
      ansB = "싫어한다1";

      questionList2.appendChild(CreateNewDiv('q11', question, ansA, ansB));

      question = "민트초코2";
      ansA = "좋아한다2";
      ansB = "싫어한다2";
      questionList2.appendChild(CreateNewDiv('q12', question, ansA, ansB));

      let moreBtn2 = document.querySelector('.more_btn');
      let body2 = document.body;
      body2.insertBefore(questionList2, moreBtn2);
      body2.removeChild(moreBtn2);
      break;
    default:
      break;
  }
});

function CreateNewDiv(id, strQ, strB, strC) {
  let list = document.createElement('button');
  list.setAttribute('class', 'rbutton ui-button list');
  list.setAttribute('type', 'button');
  list.setAttribute('id', id);
  //button 만들기

  let outlined = document.createElement('div');
  outlined.setAttribute('class', 'text-outlined text-outlined_v5 ha-transition-pseudo');
  //text-outlined div 만들기

  let outlined2 = document.createElement('div');
  outlined2.setAttribute('class', 'text-outlined__label ha-transition-pseudo');
  //'text-outlined__label' div 만들기

  let info1 = document.createElement('div');
  info1.setAttribute('class', 'info1');

  let questionTitle = document.createElement('div');
  questionTitle.setAttribute('class', 'question-title');
  questionTitle.innerHTML = strQ;

  let question1 = document.createElement('div');
  question1.setAttribute('class', 'question1');
  question1.innerHTML = strB;

  let vsLine = document.createElement('div');
  vsLine.setAttribute('class', 'vs_line');
  vsLine.innerHTML = "VS";

  let question2 = document.createElement('div');
  question2.setAttribute('class', 'question2');
  question2.innerHTML = strC;

  info1.appendChild(questionTitle);
  info1.appendChild(question1);
  info1.appendChild(vsLine);
  info1.appendChild(question2);

  let info2 = document.createElement('div');
  info2.setAttribute('class', 'info2 btn btn-outline-primary');
  info2.innerHTML = "밸런스 게임 시작하기";

  outlined2.appendChild(info1);
  outlined2.appendChild(info2);

  outlined.appendChild(outlined2);

  list.appendChild(outlined);

  return list;
}