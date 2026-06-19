// 13 JUNE 2026
// JavaScript Functions & Arrays Practice Questions

//TASK 1:  What is a function and why do we use it?
//  What problem does it solve in our code? Write an example
// ans:
// A function in programming is a named block of code that performs a specific task.
// You can call (execute) it whenever needed, instead of writing the same code repeatedly.
// Why we use functions
// Functions solve several problems in coding:
// Avoid Code Duplication – Write once, reuse many times.
// Improve Readability – Code is easier to understand when broken into logical parts.
// Maintainability – If logic changes, update it in one place only.
// Modularity – Break large programs into smaller, manageable pieces.
// Testing & Debugging – Easier to test small, isolated functions.
// eg: sum of two numbers uwing function:
function sumofnum(a, b) {
    return a + b;
}
console.log(sumofnum(1, 2));




// TASK 2: What is the difference between a parameter and an argument? Write an example
// ans:
//  parameters are variables passed during function declaration 
// and arguments are values of function  parameters passes during function calling.
function sumofnum(a, b)      // a and b are parameters
{
    return a + b;
}
console.log("sum is==>", sumofnum(1, 2));    // 1 and 2 are arguments




// TASK 3: What is an array and why do we need it instead of creating separate variables? Write an example
// ans:
// Assume there is a class of five students and if we have to keep records of their marks in the examination
//  then, we can do this by declaring five variables individual and keeping track of records.
// What it means is that we can use normal variables (v1, v2, v3, ...) when we have a small number of objects.
//  But if we want to store a large number of instances, it becomes difficult to manage them with normal variables.
// example:
let values = [1, 2, 3, 4];
console.log(values[2]);



// TASK 4: What is the difference between map(), filter(), and reduce()?
//    Give a simple example of each. Write an example.
//ans: map, filter, and reduce are foundational array methods in functional programming 
// (commonly used in languages like JavaScript, Python, and Ruby). They iterate over a 
// collection, but differ in their core purpose: map transforms every element, filter 
// removes elements, and reduce combines them into a single value

let arrayOfNumbers1=[3,5,2,7,10];
let newarray5 = arrayOfNumbers1.filter((v, i, org) => v%2==0);     //filter method
console.log("filter method to find elements divisible by 2",newarray5);    //OUTPUT:[ 2, 10 ]

let newarray6=arrayOfNumbers1.reduce((acc,currentValue)=>acc+currentValue ,0)   //reduce method
console.log("sum of all elements present in an array:",newarray6);          //sum of all elements present in an array: 27

let sortedArray=arrayOfNumbers1.map(value=>value).sort((a,b)=>a-b);      //map method
console.log("required sorted array using map method:",sortedArray);     //required sorted array using map method: [ 2, 3, 5, 7, 10 ]




// TASK 5: What is the difference between push(), pop(), shift(), and unshift()?Write an example
let arr4=[2,3,4,5,6,7];
console.log(arr4.push(8));
console.log(arr4); //
console.log(arr4.pop(8));
console.log("",arr4);




// TASK 6: Write a function called greet that takes a name as a parameter
//    and prints "Hello, John!".
// ans:
function hello(name) {
    console.log("Hello, " + name);
}
hello("John!");
//ans:Hello, John!




// TASK 7: Write a function called calcArea that takes width and height
//    as parameters and returns the area of a rectangle.

function calcArea(width, height) {
    return width * height;
}
let area=calcArea(2,4)
console.log("area is:",area)



// TASK 8: Create an array of 5 favorite foods and print each one
//    using a for loop.
const fvrtfood=["pizza","burger","noodles","mommos","sandwitch"];
{
    for(i=0;i<5;i++){
        console.log(fvrtfood[i]);
    }
 }
// ans:pizza burger noodles mommos sandwitch



// TASK 9: Write a function called findMax that takes 3 numbers
//    as parameters and returns the largest one.
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(findMax(-3, -1, -5)); // Output: -1



// TASK 10: Create an array of 10 numbers and use the filter() method
//     to return only the numbers greater than 5.
// ans:
let arr3 = [1, 2, 4, 5, 7, 8, 9, 14, 20, 40];
let newarray3 = arr3.filter((v, i, org) => v > 5);
console.log(newarray3);




// TASK 11: Write a function called reverseString that takes a string
//     as a parameter and returns it reversed.
    // Example: "hello" → "olleh"
    function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); 
// Output: "olleh"



// TASK 12: Create an array of 5 names and use the map() method
//     to convert all names to UPPERCASE.
const arrayofnames=["khushi","preetkmal","ashmeet","bhumika","satinder"]
const uppercase=arrayofnames.map(arrayofnames=>arrayofnames.toUpperCase())
console.log("Uppercase names",uppercase)
//ans: Uppercase names [ 'KHUSHI', 'PREETKMAL', 'ASHMEET', 'BHUMIKA', 'SATINDER' ]



// TASK 13: Write a function called calculator that takes two numbers
//     and an operator (+, -, *, /) as parameters and returns the result.
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}
const operation=calculator(6,7,'*');
console.log(operation)




// TASK 14: Create an array of numbers and use the reduce() method
//     to calculate the total sum of all numbers.
const arrayOfNumbers=[4,5,6,7,21];
const sum=arrayOfNumbers.reduce((acc,currentValue) =>
acc+currentValue,0)
console.log("sum of all numbers present in an array is:",sum);
//ans:sum of all numbers present in an array is: 43




// TASK 15: Write a function called removeDuplicates that takes an array
//     as a parameter and returns a new array with no duplicate values.
//     Example: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
// ans:
let arr2 = [1, 2, 2, 3, 3, 4];
let newarray2 = arr2.filter((v, i, org) => arr2.indexOf(v) === i);
console.log(newarray2);
