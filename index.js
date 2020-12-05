//welcoming the user by name

var readLineSync = require("readline-sync");
var userName = readLineSync.question("Hello ! may i know your name?");
console.log("\nwelcome! "+userName+" Let's begin the game!!");
console.log("----------------******---------------------")
var score = 0;

//function creation

function quiz(question , answer){
  var userAnswer = readLineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log("Hurray! u answered correct")
  score++;
}
else{
  console.log("NO! u answered wrong")
}
  console.log("your score is "+score );

}

//array object creation


var questions = [
  {
  question : "\nwhich team lifted the first ever IPL trophy?\n a.Deccan chargers\n b.Rajasthan royals\n c.Chennai super kings\n",
  answer: "b",
  },
  {
  question : "\nwho was the first ever Indian captain to lift the IPL trophy? \n a.Rohit sharma\n b.gautam gambir\n c.M.S. Dhoni\n",
  answer : "c",
  },
  {
    question : "\nwhich team holds  the record for highest ever team total in  the IPL trophy? \n a.CSK  \n b.RCB \n c.KKR \n",
    answer : "b",
  },
  {
    question : "\nwhich team holds  the record for lowest ever team total in  the IPL trophy? \n a.CSK  \n b.RCB \n c.KKR \n",
    answer : "b",
  },
  {
    question : "\nwhich team did AB de villiers play for during his IPL debut? \n a.DD  \n b.RCB \n c.KKR \n",
    answer : "a"
  }
 ]


//looping through each array item

for(var i = 0;  i < questions.length; i++ ){
var currentQuestion = questions[i];
quiz(currentQuestion.question,currentQuestion.answer )
}

console.log("\n----------------GAME OVER---------------")
if(score >= 3){
console.log("\nYou have scored "+score+"You have done a good Job")
}
else{
  console.log("\nYou have scored "+score+" you can do much better!")
}


var highScores = [
  {
  name : "rk",
  score : 5,
  },
  {
  name : "surendra",
  score : 5
}
]

console.log("\nBelow are the current High scores ")
for(var i = 0;  i < highScores.length; i++ ){
var currentHighscore = highScores[i];
console.log("<-------> "+currentHighscore.name,currentHighscore.score+" <------->")
}