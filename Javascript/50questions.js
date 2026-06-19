//16,17,18 june 2026

// 1. Declare your name, age, and city using let and log all three
// in one console.log() statement.
let name = "khushi";
let age = "20";
let city = "Hoshiarpur";
console.log(name, age, city);




// 2. Convert the string "100" to a number using Number(), parseInt(),
//  and the unary + operator. Log all three results.
let string = "100";
const num1 = Number(string);
console.log(num1);
console.log(typeof num1);

const num2 = parseInt(string, 10);
console.log(num2);
console.log(typeof num2);

const num3 = +string;
console.log("Using unary +:", num3);
console.log(typeof num3);




// 3. Convert the values 0, 1, "", and "hello" to booleans. Log each result.
let con1 = Boolean(1);
console.log(con1);
console.log(typeof con1);
let con2 = Boolean(0);
console.log(con2);
console.log(typeof con2);
let con3 = Boolean("");
console.log(con3);
console.log(typeof con3);
let con4 = Boolean("hello");
console.log(con4);
console.log(typeof con4);



// 4. Find the maximum of the numbers 5, 2, and 8.
const maxnum = Math.max(5, 2, 8);
console.log("maximum number of 5,2,8 is:", maxnum);



// 5. Swap the values of two variables without using a temporary variable.




// 6. Find the length of the string "abcdefgh" and convert it to uppercase.
let string1 = "abcdefgh";
console.log("length of given string is:", string1.length);
console.log("Uppercase conversion of given string is:", string1.toUpperCase());



// 7. Replace all occurrences of "a" in "abcad" with "_".
let word = "abcad";
console.log(word.replaceAll("a", "_"));



// 8. Log the result of 10 + "5", 10 - "5", 10 * "5", and 10 / "2". Observe the output.
console.log("OUTPUT1:", 10 + "5");
console.log("OUTPUT2:", 10 - "5");
console.log("OUTPUT3:", 10 * "5");
console.log("OUTPUT4:", 10 / "2");



// 9. Use the ** (exponent) operator to calculate 2 to the power of 10.
function exponent(a, b) {
  return a ** b;
}
console.log("required result is:", exponent(2, 10));



// 10. Given a number x, return true if it reads the same forward and
// backward (palindrome); otherwise return false.
function isPalindrome(number) {
  let str = number.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}
let x = 12521;
console.log(isPalindrome(x));
console.log(typeof x);



// 11. Write an if/else statement that checks if a person's age is 18
// or above and logs either "Adult" or "Minor".
function person_age(age) {
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("minor");
  }
}
person_age(34);



// 12. Write an if/else if/else statement that takes a score and logs:
// A for 90+, B for 70+, C for 50+, and Fail otherwise.
//  const score=(()=>{
// if(){
// console.log();
// }
// else if(){
// console.log();
// }
// else if(){
// console.log();
// }
// else{
// console.log();
// }
//  });



// 13. Write a switch statement that takes a day number (1–7) and logs the name of the day.
var day_number = 5;
switch (day_number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day Number");
    break;
}



// 14. Write a switch statement that takes a traffic light color
//  ("red", "yellow", "green") and logs the appropriate action.
const traffic_light_color = "green";
switch (traffic_light_color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Be Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log(" Please choose a valid traffic light color");
    break;
}

// 15. Merge two sorted arrays into one sorted array.
let array1=[3,5,2,9];
let array2=[10,45,32];
const merged_array = (array1, array2) => [...array1, ...array2].sort((a, b) => a - b);
console.log("Merged array is:",merged_array(array1, array2)); 




// 16. Write a for loop that logs only even numbers between 1 and 20.

for(let i=1; i<=20; i++){
if(i%2 === 0){
  console.log(i);
}
}


// 17. Write a for loop that calculates the sum of numbers from 1 to 100 and logs the result.
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log("The sum of numbers from 1 to 100 is:", totalSum);



// 18. Combine two strings: let a = 'table'; let b = 'chairs'; using the concatenation operator.
const a="table";
const b="chairs";
// console.log(a+b)     //method1 :using + operator
console.log(`${a} ${b}`);     //method2:template literal


// 19. Write a while loop that keeps doubling a number starting from
//  1 until it exceeds 1000. Log the final number.
let k=1;
while(k<=1000){
  result=k*2;
  k++;
}
console.log(result);



// 20. Use the Date object to log today's full date and time.
const today = new Date();
console.log(today.toString()); 



// 21. Use the Date object to log the current year, month, and day separately.
const now = new Date(); 
const year = now.getFullYear();    // Returns the 4-digit year
const month = now.getMonth() + 1;  // Returns 0-11 (January is 0), so we add 1
const day = now.getDate();         // Returns the day of the month (1-31)
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);



// 22. Calculate how many days are left until New Year using the Date object.





// 23. Write a named function called greet that takes a name as a parameter and logs "Hello, [name]!".
function greet(name){
console.log(`Hello,${name}!`);
}
greet("Khushi");



// 24. Write an anonymous function stored in a variable called 
// multiply that takes two numbers and returns their product.
const mul=(a,b)=>a*b;
console.log(mul(6,7));


// 25. Write an arrow function called square that takes a number and returns its square.
const square=(c)=>c*c;
console.log(square(10));



// 26. Write a function called isEven that takes a number and
//  returns true if it is even and false if it is odd.
function isEven(n){
  if(n%2==0){
    console.log("number is even");
  }
  else{
    console.log("number is odd");
  }
}
isEven(45);



// 27. Write a function calculator that takes two numbers 
// and an operator (+, -, *, /) and returns the result.




// 28. Write a function that takes another function as 
// a callback and calls it after logging "Starting task...".





// 29. Create an array of 5 fruit names. Log the first and last item using their index.
// const arrayOfFruits=["apple","banana","mango"];
// const index=(v,i)=>{
//   if (i==true){
//     console.log(arrayOfFruits[i]);
//   }
//   else{
//     return;
//   }
//   return arrayOfFruits[1];
// }


// 30. Find the length of an array and log the last element using the length property.
const arrayOfFruits1=["apple","banana","mango"];
console.log("Length of given array:",arrayOfFruits1.length);
console.log("Element present at last index:",arrayOfFruits1[arrayOfFruits1.length-1]);



// 31. Use push() to add two items to the end of an array and log the updated array.
const arrayOfFruits2=["apple","banana","mango"];
console.log("array before updation:",arrayOfFruits2);
arrayOfFruits2.push("kiwi","orange");
console.log("updated array:",arrayOfFruits2);



// 32. Use pop() to remove the last item from an array 
// and log both the removed item and the updated array.
const arrayOfFruits3=["apple","banana","mango"];
console.log("array before updation:",arrayOfFruits3);
console.log("poped item:",arrayOfFruits3.pop());
console.log("new updated array:",arrayOfFruits3);


// 33. Remove the first item and add a new item at the beginning. Log the array after each step.
const letArray=[1,3,5,7,9];
console.log("array before updation:",letArray);
console.log("shifted item:",letArray.shift());
console.log("updated array:",letArray);



// 34. Use forEach() to loop through an array of numbers and log each number multiplied by 2.







// 35. Use map() to create a new array where each number in [1, 2, 3, 4, 5] is multiplied by 10.
const letArray6=[1,2,3,4,5];
const multipleof10=letArray6.map(i=>i*10);
console.log("after multiplied by 10:",multipleof10)
//ans:after multiplied by 10: [ 10, 20, 30, 40, 50 ]



// 36. Use filter() to create a new array of only even numbers from [1, 2, 3, 4, 5, 6, 7, 8].
const letArray1=[1,2,3,4,5,6,7,8];
const newArray=letArray1.filter((i)=>{
  return i%2===0;
});
console.log("new array:",newArray)
//ans:new array: [ 2, 4, 6, 8 ]



// 37. Use reduce() to calculate the total sum of [10, 20, 30, 40, 50].
const letArray2=[1,2,3,4,5,6,7,8];
const sum=letArray2.reduce((acc,curr)=>acc+curr,0)
console.log("total sum of all elements of array:",sum);
//ans:total sum of all elements of array: 36



// 38. Use find() to get the first number greater than 15 from [5, 10, 18, 22, 3].
const nums = [5, 10, 18,22, 3];
const result5 = nums.find(num => num > 15);
console.log(result5); 
//ans: 18



// 39. Use some() to check if any number in [1, 3, 5, 7, 8] is even.
const letArray7=[1,3,5,7,8];
const someeven=letArray7.some(i=>i%2==0);
console.log(someeven);
//ans:true



// 40. Use every() to check if all values in [2, 4, 6, 8] are even.
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);
//ans:true       



// 41. Create a student object with properties: name, age, grade, and passed. Log the whole object.
const studentobject={
  nameOfStudent:"Khushi",
  ageOfStudent:20,
grade:"A",
passed:"yes"
}
console.log(studentobject);
//ans:
// {
//   nameOfStudent: 'Khushi',
//   ageOfStudent: 20,
//   grade: 'A',
//   passed: 'yes'
// }



// 42. Access each property of the student object using both dot notation and bracket notation.
const studentobject1={
  nameOfStudent1:"Khushi",
  ageOfStudent1:20,
grade1:"A",
passed1:"yes"
}
console.log(studentobject1.ageOfStudent1);   //using dot::       ans:20
console.log(studentobject1["ageOfStudent1"]);  //using bracket::    ans: 20



// 43. Add a new property school to the student object after it is created. Log the updated object.
const studentobjec2={
  nameOfStudent2:"Khushi",
  ageOfStudent2:20,
grade2:"A",
passed2:"yes"
}
studentobjec2.school="Private School";
console.log(studentobjec2);
//ans:
// {
//   nameOfStudent2: 'Khushi',
//   ageOfStudent2: 20,
//   grade2: 'A',
//   passed2: 'yes',
//   school: 'Private School'
// }




// 44. Use Object.keys() on the student object and log all the keys.
const studentobject4={
  nameOfStuden4:"Khushi",
  ageOfStudent4:20,
grade4:"A",
passed4:"yes"
}
console.log(Object.keys(studentobject4));
//ans:  [ 'nameOfStuden4', 'ageOfStudent4', 'grade4', 'passed4' ]



// 45. Use Object.values() on the student object and log all the values.
const studentobject5={
  nameOfStuden5:"Bhumika",
  ageOfStudent5:20,
grade5:"A",
passed5:"yes"
}
console.log(Object.values(studentobject5));
//ans:  [ 'Khushi', 20, 'A', 'yes' ]




// 46. Use Object.entries() to print all keys and values.
const studentobject6={
  nameOfStudent5:"Khushi",
  ageOfStudent6:20,
grade6:"A",
passed6:"yes"
}
console.log(Object.entries(studentobject6));
//ans:
  // [ 'nameOfStudent5', 'Khushi' ],
  // [ 'ageOfStudent6', 20 ],
  // [ 'grade6', 'A' ],
  // [ 'passed6', 'yes' ]



// 47. Write a function checkObject(obj) that returns:
// - "Frozen" if the object is frozen
// - "Sealed" if the object is sealed but not frozen
// - "Normal" otherwise






// 48. Write a function that returns the number of properties in an object 
// without using Object.keys().





// 49. Using Object.entries(), write a function that returns the key whose value
//  matches the given value.






// 50. Compare two objects using Object.entries() and determine whether they have 
// exactly the same keys and values.



