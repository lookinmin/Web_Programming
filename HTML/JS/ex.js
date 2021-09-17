
document.write("안녕하세요");

function addNum(){        //함수 정의
  var num1 = 2;           // num1 은 함수 내에서만 쓸 수 있는 지역변수
  var num2 = 3;
  var sum = num1+num2;
  alert("결과 : " + sum);
}

addNum();                  //함수 선언

let a1 = 0;                //let -> 블럭변수  -> 함수의 블럭 내에서만 사용가능  -> a1이라는 변수는 다시 사용 불가능 (var은 가능)
a2 = 0;                    //전역변수

const hi  = (/*매개변수*/) => {/*실행구문 if 한줄이라면 중괄호 생략가능*/alert("안녕하세요");};

let alpha = (user) => {document.write (user + "님, 반갑습니다:)");};
alpha("민수");

//창 여는 메서드
open(/*html경로*/"", /*창 위치 지정 안해주면 계속 생김*/"", /*속성 (width, height 값 등등)*/"");      //팝업창 띄울 때 사용

// 요소명.getElementById("id명")  -> id 값 요소 접근  ==  요소명.querySelector(#id);

//이벤트 객체를 사용해 이벤트 처리기 연결
document/*요소*/.addEventListener(/*이벤트 (on을 붙이지 않음)*/"click", /*함수*/addNum(), /*캡쳐 -> 걍 false하면 됨*/false);


// 1.요소 노드 만들기 (텍스트만)
var newP = document/*요소*/.createElement(/*노드명*/"p"); 
// 2. 텍스트 노드 만들기 (텍스트 노드는 요소노드의 자식노드)
var txtNode = document.createTextNode("이달의 소녀 PTT");
// 3. 자식노드 연결하기
newP.appendChild(txtNode);
document.getElementById("id").appendChild(newP);

//속성노드(이미지등)연결
var newImg = document.createElement("img");
// 속성노드 만들기
var srcNode = document.createAttribute("src");
srcNode.value = "이미지파일 경로";
// 속성노드 연결
newImg.setAttributeNode(srcNode);
// 자식노드 연결
document.getElementById("id").appendChild(newImg);


// 노드 삭제
// 부모노드 찾아가서 -> 자식노드 삭제
result = srcNode.parentNode;  //부모노드를 리턴해줌
result.removeChild(srcNode);  //해당 부모노드의 자식노드 삭제