//     // 15 june 2026
//     JavaScript Objects Practice Questions

// TASK 1:  Create an object called person with properties:
//  name, age, and city. Print all properties.
const person = {
  name: "khushi",
  age: 20,
  city: "Hoshiarpur",
};
console.log(person.name); //khushi
console.log(person.age); //20
console.log(person.city); //Hoshiarpur
  

// TASK 2: Create an object car with properties brand,
//  model, and year. Update the year and print the
// updated object.
const car = {
  brand: "Mahindra",
  model: "Scorpio Classic",
  year: 2022,
};
console.log("before updation object", car); //{ brand: 'Mahindra', model: 'Scorpio Classic', year: 2022 }
car.year = 2026;
console.log("after updation object:", car); //{ brand: 'Mahindra', model: 'Scorpio Classic', year: 2026 }




// task 3: Write a function that takes an object and
//  prints all its keys using Object.keys().
function objfxnkeys(objkey) {
  console.log(Object.keys(objkey));
  console.log("Number of keys present:", Object.keys(objkey).length);
}
const objkeys = {
  key1: "name",
  key2: "age",
};
objfxnkeys(objkeys);
// ans is : [ 'key1', 'key2' ]
// Number of keys present: 2




// TASK 4:  Given:
// const student = { name: "Alex", marks: 85 };
// Add a new property grade with value "A".
const student = {
  name1: "Alex",
  marks: 85,
  GRADE: "A",
};
console.log("REQUIRED OBJECT IS :", student);
//ANS:REQUIRED OBJECT IS : { name1: 'Alex', marks: 85, GRADE: 'A' }




// TASK 5:  Create an object book with title, author, and price.
// Delete the price property and print the object.
const book = {
  title: "MATHEMATICS",
  author: "RD SHARMA",
  price: 680,
};
console.log("before deletion", book); //before deletion { title: 'MATHEMATICS', author: 'RD SHARMA', price: 680 }
delete book.price;
console.log("after deletion", book); //after deletion { title: 'MATHEMATICS', author: 'RD SHARMA' }




// TASK 6: Write a function that counts the number of properties
//  in an object.
function fxntocount(key) {
  console.log("Number of keys present in object:", Object.keys(key).length);
}
const objkeys1 = {
  key12: "name",
  key22: "age",
};
fxntocount(objkeys1);
//ans: Number of keys present in object: 2




// TASK 7:  Given:
// const user = { name: "John", age: 25 };
// Check whether the property "email" exists in the object.
const user = {
  nameofuser: "John",
  ageofuser: 25,
};
console.log(user);
if(user.address !==undefined){
    console.log("property exists");
}
else{
    console.log("property doesn't exist");       
}
//ans:property doesn't exist



// TASK 8: Create a nested object called company containing companyName
// and an employee object with name and role.
// Access and print the employee role.
const company = {
  company: "DILIGENTIC INFOTECH",
  employee: {
    employname: "Rajni Pal",
    role: "WEB DEVELOPER",
  },
};
console.log("role of employee:", company.employee.role);
//ans: role of employee: WEB DEVELOPER




// TASK 9: Given two objects:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// Merge them into a single object.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedobject = Object.assign(obj1, obj2);
console.log(mergedobject);
//ans:  { a: 1, b: 2, c: 3, d: 4 }





// TASK 10: Create an array of objects representing students.
// Each student should have a name and marks.
//  Print the name of students who scored more than 80.
const students = [
  {
    nameofstudent: "priya",
    marks_of_student: 78,
  },
  {
    nameofstudent: "anu",
    marks_of_student: 89,
  },
  {
    nameofstudent: "bhumi",
    marks_of_student: 76,
  },
  {
    nameofstudent: "love",
    marks_of_student: 56,
  },
  {
    nameofstudent: "satinder",
    marks_of_student: 87,
  },
];
const marksabove80 = students
  .filter((students) => students.marks_of_student > 80)
  .map((students) => students.nameofstudent);
console.log("students who scored marks above 80:", marksabove80);
// ans:[ 'anu', 'satinder' ]
