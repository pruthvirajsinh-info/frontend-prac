/*if*/
/*example-1*/
// let age = 18;

// if (age >= 18) {
//   console.log("you can vote");
// }

// if (age < 18) {
//   console.log("you CANNOT vote");
// }

/*example-2*/
// let mode = "dark";
// let color;

// if (mode === "dark"){
//   color = "black";
// }

// if (mode === "light"){
//   color = "white";
// }

// console.log(color);

/*example-3*/
// let applicant = "single";

// if (applicant === "single"){
//   console.log("you can apply for marraige buero");
// }

// if (applicant !== "married"){
//   console.log ("you cannot apply for marraige buero");
// }

// /*example-4*/
// let gender = "female";
// let message;

// if (gender === "female"){
//   message = "you are beautiful";
// }

// if (gender === "male"){
//   message = "you are handsome"
// }

// console.log (message);

// /*example-5*/
// let number = -5;
// let status;

// if (number > 0){
//   status ="positive";
// }

// if (number <= 0){
//   status = "negative";
// }
// console.log(status);

// /*example-6*/
// let mark = 85
// let grade;

// if (mark >= 85){
//   grade = "a+";
// }

// if (mark < 85){
//   grade = "b+";
// }

// console.log(grade);


// /*example-7*/

// let breed = "persian"
// let fur;

// if(breed == "persian"){
//   fur="thick and fluffy";
// }

// if (breed !== "persian"){
//   fur="tiedy and skinny";
// }

// console.log(fur);

// /*example-8*/
// let num = 7;
// let result;

// if (num %2===0){
//   result= "even";
// }

// if (number %2 !== 0){
//   result = "odd";
// }

// console.log(result);


// let product = "blush"
// let brand;

// if (product === "blush" ){
//   brand = "benetint"; 
// }
// if (product === "mascara" ){
//   brand = "maybelline"; 
// }
// console.log (brand);




/*if-else*/

// let age = 48;
//  if (age > 18){
//   console.log("you are eligible");
//  }else {
//   console.log("you are not eligible");
//  }



//  let num = 45;
//  if (num / 2){
//   console.log("even");
//  }else{
//   console.log("odd");
//  }


//  let theme = "boho";
//  let party;

// if (theme === "french"){
//   party = "palace";
// }else {
//   party = "beach"
// }

// console.log(party);


// let product = "blush"
// let brand;

// if (product === "blush" ){
//   brand = "benetint"; 
// }else {
//   brand = "maybelline";
// }

// console.log("brand is",brand);

/*else-if*/
let age = 34
let consider;

if(age>24){
  consider = "adult";
}else if (age<24){
  consider = "pass-out";
}else if (age === 60){
  consider = "senior";
}else {
  consider = "toddler";
}

console.log(consider);
