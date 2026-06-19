// 13 JUNE 2026

// TASK 1: Generate random number between 1 to 6
const random=Math.floor((Math.random()*6)+1);
console.log(random);



// TASK 2: DEEP FREEZE  
const object={
    a:"name",
    b:"age",
    c:{
        d:"city",
        e:"adress"
    }
};
console.log("object is:",object);
Object.freeze("object befopre freeze",object);
object.a="khushi";
console.log("a after freeze:",object.a);
object.b="20";
console.log("b after freeze:",object.b);
Object.freeze(object.c);
object.c.d  ="hoshiarpur";
console.log("c after freeze:",object.c.d);


// TASK 3:Use spread operator
const arr=[1,2];
console.log([,...arr])  ;



// TASK 4:
// obj={
//     n:"khushi",
//     roll_number={
//         class:30,
//         class2:"dfg"
//     }
// }   
// console.log(obj.n, obj['roll_number'].class2)


// execution context
// let a= 83


//write a function that collects as many as arguments passed to it ,
//     it should return sum of all numbers
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30, 40));   // 100