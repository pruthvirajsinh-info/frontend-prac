/*question1*/
// let number = prompt ("enter a number");
// console.log(number);

// if (number %5 === 0){
//   console.log(number,"can multuply by 5");
// } else {
// console.log(number," can NOT multuply by 5");
// }


/*question2*/
let score = prompt("enter your score");

if (score >=90 && score <=100 ){
  grade = "A";
}else if (score >=70 && score <=89){
  grade = "B";
}else if (score >=60 && score <=69){
  grade = "C";
}else if (score >=50 && score <=59){
  grade = "D";
} else if (score >=0 && score <=49){
  grade = "F";
};
 
console.log(grade);
