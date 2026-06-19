// 12 june 2026


// task 1:
let row=5;
let col=4
let pattern="";
for( let i=1;i<=row;i++){
    for( let j=1;j<=col;j++){
        pattern+=" * "; 
    }
    pattern+="\n";
}
console.log(pattern);



// task 2: switch day using function
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number. Please choose 0 to 6.";
    }
}



 