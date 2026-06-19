// 10 june 2026
// day 8 CLASS QUESTIONS:14
// task1:
let arr = [1, 2, 3, 4];
console.log(arr);

// task2:
let arr1 = [1, "2", 5.6, 4];
console.log(arr1);

// task3:
let arr2 = [1, "2", 5.6, 4];
console.log(arr2);
console.log(typeof arr2);

// task 4:
let arr3 = [1, 2, 3, 4];
console.log(arr3);
console.log(typeof arr3);

// task 4
let array1 = ["1,2,3"];
let array2 = array1;
console.log(typeof array1);
console.log(array2);

// task 5:operators
console.log(7 / 2);
console.log(7 % 2);
console.log(2 ** 3);



// task 6: assignment operator
let score = 100; 
// Assigns the number 100 to the variable 'score'
console.log(score);



// task 7: comparison operator
let age7 = 18;
let number7 = "18";
console.log(age7 > number7);
console.log(age7 < number7);
console.log(age7 == number7);
console.log(age7 === number7);


// task 8: type collision
let z1 = "5" + 5;
console.log(z1);
console.log(typeof z1);
let z2 = "5" * 5;
console.log(z2);
console.log(typeof z2);
let z3 = "5" / 5;
console.log(z3);
console.log(typeof z3);
let z4 = "7" - 2;
console.log(z4);
console.log(typeof z4);
//
console.log(true + 1);
//
console.log(undefined + 1);
console.log(typeof NaN);



// task 9: comparison operator
let agex = 18;
let num = "20";
console.log(agex > num);



// task 10: convert string to boolean
let k1 = Boolean("0");
console.log(k1);
console.log(typeof k1);



// task 11 : assignment operator
let y = 72;
y += 1;
console.log(y);



// task 12 :type conversion string to number
let num2 = Number("42.5");
console.log(num2);
console.log(typeof num2);



// task 13:type conversion boolean to string
let k = String(true);
console.log(k);
console.log(typeof k);



// task 14: ternary operator:
let ageof = 20;
ageof > 18 ? console.log("You can drive") : console.log("You can't drive");



// task 15: extra
console.log(2 + 3 === 5);
//
console.log(0.1 + 0.2 === 0.3);
//
console.log("test" * 5);



// day 2 js homework questions:


// HOMEWORK QUESTIONS:12

// task 1: Convert the number 255 to a string, then to a boolean.
// Log each step using console.log().
//    What is the final boolean result?
let l = String(255);
console.log(l);
console.log(typeof l);
l = Boolean(console.log(l));
console.log(typeof l);
// ans:
// 255
// string
// 225
// boolean

// task 2: Convert the variable isRead to a string.
//    let isRead = true;
let isread = true;
l1 = String(isread);
console.log(isread);
console.log(typeof isread);
// ans:
// true
// boolean

// task 3: Given the string below, remove the leading and trailing
//  spaces and convert the result to lowercase.
 let s1 = " Hello, World! ";
console.log(s1.toLocaleLowerCase());



// task 4: What are the 6 falsy values in JavaScript?
// ANs: 0,"",null,undefined,NaN,false.



// task 5: Compare the following values using both == and ===.
//    "5" and 5
console.log("5" == 5);
console.log("5" === 5);
// ans: true
// ans:false



// task 6: Replace all vowels in the string "Hello World" with "*" using only string methods (no loops).
let l2 = "Hello World";
console.log(l2.replace(/[aeiou]/, "*"));



// task 7:  Use console.log() to print the following:
//    - Your name
//    - Your age
//    - Your favorite programming language
const obj = {
  name: "khushi",
  ageof: "20",
  Favouriteprogramminglanguage: "Javascript",
};
console.log(obj.name);
console.log(obj.ageof);
console.log(obj.Favouriteprogramminglanguage);
// result:
// khushi
// 20
// Javascript



// task 8: Create two numbers and perform the following operations:
//    - Addition
//    - Subtraction
//    - Multiplication
//    - Division
//    - Modulus (%)
let num1 = 7;
let num12 = 5;
console.log(num1 + num12);
console.log(num1 - num12);
console.log(num1 * num12);
console.log(num1 / num12);
console.log(num1 % num12);
// result
// 12
// 2
// 35
// 1.4
// 2



// task 9: Add the following values to make the result equal to 6:
// let a = "1";
// let b = 5;
//    - First, add them normally.
//    - Then, add them using explicit type coercion so the result is 6.
let a = "1";
let b = 5;
console.log("1" + 5);
a = Number("1");
console.log(a + b);




// task 10: Explain the difference between implicit type conversion
//  and explicit type conversion in JavaScript with one example
//  of each.
// ans: The primary difference is that implicit type conversion
//  (type coercion) happens automatically by the JavaScript
//  engine when mixed data types interact, while explicit type
//  conversion (type casting) is manually triggered by the
//  programmer using built-in methods.
// implicit conversion example:
let result = "10" - 2;
console.log(result);
console.log(typeof result);
// explicit conversion example:
let quantity = Number("55");
console.log(quantity);
console.log(typeof quantity);



// 11. Given let s = "javascript", capitalize the first letter
//  so the output is "Javascript" — using string methods only,
//  no external libraries.
let s= "javascript";
console.log(s.toUpperCase(s));





// 12. Use string methods to extract the domain from 
// 'user@example.com' — output should be 'example.com'
const email = 'user@example.com';
// Split by '@' and select the second element (index 1)
const domain = email.split('@')[1];
console.log(domain); // Output: 'example.com'
