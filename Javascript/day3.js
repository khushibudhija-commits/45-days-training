// 11 june 2026


// task1: post increment
let a = 8;
console.log(a++);
console.log(a);



// task2:pre increment
let a1 = 8;
console.log(++a1);
console.log(a1);



// task 3:
let a2 = 8;
b = a2++;
console.log(b);   //8
console.log(a2);   //9 



// task 4: bitwise operators
let age = 17;
let haveLicence = true;
console.log(age > 18 && haveLicence);     //false
console.log(age > 18 || haveLicence);     //true



// HW
let a3 = 8;
let b2 = a3++ + --a3 + ++a3;
console.log(b2);    //25
console.log(a3);     //9



// // task 5
// console.log(b3);
// let b3=76;



// task 6
console.log(b4);
var b4 = 76;



// // task 7
// console.log(b5);
// const b5=76;



// task 8:
hello();
function hello() {
  let m = 7;
  console.log(m);
}



//  task 9:
hello();
function hello() {
  const n = 8;
  console.log(n);
}



// task 10:
hello();
function hello() {
  m1 = 7;
  console.log(m1, n1);
}
var n1 = 6;



// task 11 : 
let o=0;
for(;o<5;){
  console.log(o);
  o++;
}



// HOMEWORK TASKS:
// JavaScript Control Flow, Loops & Date Practice Questions

// TASK 1: Write an if/else if/else statement that takes a
//  temperature value and logs:
//    - "Hot" if above 35
//    - "Warm" if above 20
//    - "Cool" if above 10
//    - "Cold" otherwise
var temp = 14;
if (temp > 35) {
  console.log("Temperature is hot");
} else if (temp > 20 && temp < 35) {
  console.log("Temperature is warm");
} else if (temp > 10 && temp < 20) {
  console.log("Temperature is Cool");
} else {
  console.log("Temperature is Cold");
}



// TASK 2: What is the difference between a for loop and a while
//  loop?
//    When would you choose each?
// The fundamental difference is that a for loop is designed to
// repeat a block of code a predetermined number of times, while
//  a while loop repeats a block of code until a specific
// condition changes, regardless of how many iterations it takes.



// TASK 4: What happens if you forget break inside a switch
//  statement?
//    Show an example.
var day = 3;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("WEdnesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
  default:
    console.log("Invalid");
}
//conlusion: If you forget a break statement inside a switch block, the
//  program will experience "fall-through" execution, meaning it
// will continue executing the code of all subsequent case blocks
// sequentially—regardless of whether they match the expression—
// until it hits a break, return, or the end of the switch
// statement

//TASK:5  What is a nested loop?
//    Give a real-life example of when you would need one.
// conclusion:A nested loop is a programming structure where one loop
//  (the inner loop) is placed entirely inside another loop
// (the outer loop). For every single time the outer loop runs,
//  the inner loop will execute completely from start to finish.



// TASK 6: Write a while loop that reverses a number digit by digit.
//    Example: 1234 becomes 4321.
//    Log the reversed number.
let num = 1234;
let reversedNum = 0;
while (num > 0) {
    let lastDigit = num % 10; 
    reversedNum = (reversedNum * 10) + lastDigit; 
    num = (num / 10) | 0; 
}
console.log("reversed number is:",reversedNum); // Logs: 4321





// TASK 7: Write an if/else statement to check if a person is eligible
//  to vote.
//    - age >= 18 → "You can vote"
//    - Otherwise → "You cannot vote"
var ageofperson = 19;
if (ageofperson > 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}



// TASK 8: Write a switch statement that takes a traffic light
// color
//     ("red", "yellow", "green")
//     and prints the appropriate action.
var color = "pink";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("Be Ready");
    return;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Please choose a valid color.");
}



// TASK 9: Write a for loop that prints the multiplication table
// of 7
//     (7 × 1 to 7 × 10).
// let n=7;
for(let i=1;i<=10;i++){
  let n=7;
  console.log(n +" * "+ i + " = "+n*i);
}



// TASK 10: Write a while loop that prints numbers from 10 down to
//  1
let j=10;
while(j>=1){
  console.log(j);
  j--;
}



// TASK 11: Write an if/else ladder that takes a student's marks
//  out of 100
//     and prints their grade:
//     - A
//     - B
//     - C
//     - D
//     - F
var marks=65;
if((marks<=100)&&(marks>85)){
  console.log("GRADE:A");
}
else if((marks<85)&&(marks>70)){
  console.log("GRADE:B");
}
else if((marks<70)&&(marks>55)){
  console.log("GRADE:C");
}
else if((marks<55)&&(marks>33)){
  console.log("grade:D");
}
else if((marks<33)&&(marks>=0)){
  console.log("grade:F");
}
else{
  console.log("Invalid");
}



// TASK 12: Write a switch statement for a simple calculator.
//     It should take:
//     - Two numbers
//     - An operator (+, -, *, /)
//     and print the result.
var d1=6;
var d2=5;
var operator="*";
switch(operator){
  case "+":
    console.log(d1+d2);
    break;
  case "-":
    console.log(d1-d2);
    break;
  case "*":
    console.log(d1*d2);
    break;
  case "/":
    console.log(d1/d2);
    break;
  case "%":
    console.log(d1%d2);
    break;
    default:
      console.log("Chhose a valid operator.");
}



// TASK 13: Write a for loop that calculates the sum of all numbers
//     from 1 to 100 and prints the result.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; 
}
console.log(sum); 



// 14. Write a do...while loop that prints:
//     "Keep going!"
//     Count up from 1 and stop when it reaches 5.
let J2=1;
do{
  console.log("Keep Going!");
  J2++;
}
while(J2<=5);



// TASK 15: Write an if/else statement to check whether a number
//     is odd or even and print the result.
let var2=45;
if(var2%2==0){
  console.log("Even number");
}
else{
  console.log("odd number");
}

