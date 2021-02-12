// const year=3570;
// let reminder=year % 4;
// if (reminder==0){
//     console.log("It's a Leap Year.");
// }
// else{
//     console.log("No, It's not a leap Year.")
// }

function isItLeapYear(year){
    if (0 == year%4 && 0 != year%100|| 0 == year%400){
        return true;
    }
    else{
       return false;
    }
};
const year3550=isItLeapYear(2344);
console.log(year3550);
const year4000=isItLeapYear(1704);
console.log(year4000);