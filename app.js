const quizData = [
    {
        question: "Qno1:Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Qno2:What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Qno3:What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Qno4:What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
     
    
      {
        question: "Qno5: What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct:"b"
      },
      {
        question: "Qno6: What is the latest version of HTML?",
        a: "HTML4",
        b: "HTML5",
        c: "HTMLX",
        d: "HTML2022",
        correct:"b"
      },
      {
        question: "Qno7: What is the purpose of the <head> tag in HTML?",
        a: "To define the header section of a document",
        b: "To define the main content of a document",
        c: "To define a hyperlink",
        d: "To define a paragraph",
        correct:"a"
      },
      {
        question: "Qno8: Which symbol is used to indicate an ID in CSS?",
        a: "#",
        b: ".",
        c: "*",
        d: "%",
        correct:"a"
      },
      {
        question: "Qno9: What is the correct syntax to comment out a single line in JavaScript?",
        a: "// This is a comment",
        b: "/* This is a comment */",
        c: "<!-- This is a comment -->",
        d: "' This is a comment",
        correct: "a"
      },
      {
        question: "Qno10: Which method is used to add an element at the end of an array in JavaScript?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct:"a"
      }

];
let showscore=document.getElementById("showres");
let answerEls=document.querySelectorAll(".answer");
let questionEl=document.getElementById("question");
let a_Text=document.getElementById("a_text");
let b_Text=document.getElementById("b_text");
let c_Text=document.getElementById("c_text");
let d_Text=document.getElementById("d_text");
let submitbtn=document.getElementById("submit");
 let current_quiz=0;
 let score=0;

 loadQuiz()
 function loadQuiz(){
deselectAnswer()

let current_Data=quizData[current_quiz];
questionEl.innerText=current_Data.question;
a_Text.innerText=current_Data.a;
b_Text.innerText=current_Data.b;
c_Text.innerText=current_Data.c;
d_Text.innerText=current_Data.d;
 }

 function deselectAnswer() {
    answerEls.forEach(answerEl=>answerEl.checked=false)
 }
 function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer=answerEl.id
        }
    })
    return answer
 }

 submitbtn.addEventListener('click',()=>{
let answer = getSelected()
if (answer) {
    if (answer===quizData[current_quiz].correct) {
        score+=5
    }
current_quiz++;
if (current_quiz<quizData.length) {
    loadQuiz()
    
}else{
    var grd = document.getElementById("grade");
  var per = (score/50)*100;
  document.querySelector(".main").style.display = "none";
  showscore.style.display= "grid";
  showscore.style.placeItems = "center";
  showscore.innerHTML = `
  <h3 style='font-size:25px;'>Your Score ${score}/${current_quiz} ✌ </h3>
  <h3 style='font-size:25px;'>Your Percentage ${per} % </h3>
  <h3 style='font-size:25px;'>Your Grade <span id="gradeValue"></span> % </h3>
  `;
  
  var gradeValueElement = document.getElementById("gradeValue");
  if (per <= 100 && per >= 90) {
    gradeValueElement.textContent = "A+";
  } else if (per <= 90 && per >= 80) {
    gradeValueElement.textContent = "A";
  } else if (per <= 80 && per >= 70) {
    gradeValueElement.textContent = "B";
  } else if (per <= 70 && per >= 60) {
    gradeValueElement.textContent = "C";
  } else if (per <= 60 && per >= 50) {
    gradeValueElement.textContent = "D";
  } else if (per <= 50 && per >= 40) {
    gradeValueElement.textContent = "E";
  } else if (per <= 40 && per >= 33) {
    gradeValueElement.textContent = "F";
  } else {
    gradeValueElement.textContent = "Fail";
  }
  
showscore.classList.remove('res')
}
}
 })

 function login() {  
    var flage=false;
    var email=document.getElementById("em").value;
    var password=document.getElementById("pass").value;
if (email!==""&&password!=="") {
    
    
    var userName=localStorage.getItem("users")
  var json=JSON.parse(userName)
  for(var i=0;i<json.length;i++){
      
      if (email==json[i].email&&password==json[i].password){
          flage=true
      alert("welcome")
      window.location.href="index.html";
    }
    
    
}
if (flage==false) {
    alert("Enter Valid email password")
    window.location.href="signup.html";
}
}
else{
document.getElementById('em').style.border="1px solid red"
document.getElementById('env').style.display="block"
document.getElementById('pass').style.border="1px solid red"
document.getElementById('envpass').style.display="block"
}
}
console.log(userName[i]);



function sign() { 
    let prev=localStorage.getItem("users");
    let userData=prev ? JSON.parse(prev) : [];
    var name=document.getElementById("na").value;
    var email=document.getElementById("em").value;
    var password=document.getElementById("pass").value;
  
  var users={
  name:name,
  email:email,
  password:password
  }
  if (email!==""&&password!==""&&name!=="") {
  userData.push(users)
  console.log(users.name);
  let stringfy=JSON.stringify(userData)
  localStorage.setItem("users",stringfy)
  
  window.location.href="login.html"
}
  else{
    document.getElementById('na').style.border="1px solid red"
    document.getElementById('enn').style.display="block"
    document.getElementById('em').style.border="1px solid red"
    document.getElementById('enm').style.display="block"
    document.getElementById('pass').style.border="1px solid red"
    document.getElementById('enp').style.display="block"
    }
  }
  
  

