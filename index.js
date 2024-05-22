function oddeven() {
    var number = parseInt(prompt("enter your number"))
    if (number % 2 == 0) {
        console.log("this number is even")
    } else {
        console.log("this number is odd")
    }
}
function positiveNumber() {
    var number = prompt("enter your number")
    number = parseInt(number)
    if (number % 2 == 0 || number % 11 == 0) {
        console.log("this number is postive")
    } else {
        console.log("this number is nagtive")
    }
}
function findMaximum() {
    var num1 = parseInt(prompt("Enter number 1"));
    var num2 = parseInt(prompt("Enter number 2"));
    var num3 = parseInt(prompt("Enter number 3"));
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Please enter valid numbers.");
        return;
    }
    var maximum = Math.max(num1, num2, num3);
    console.log("The maximum number is: " + maximum);
}
function leapyear() {
    var numbber = parseInt(prompt("Enter Number"))
    if (numbber % 4 == 0) {
        console.log("The year you enter is leap year")
    } else {
        console.log("The year you enter is not leap year")
    }
}
function character() {
    var character = prompt("Enter a charter")
    if (character == "a") {
        console.log("The character you enter is vowel")
    } else if (character == "e") {
        console.log("The chracter you enter is vowel")
    } else if (character == "i") {
        console.log("The chracter you enter is vowel")
    } else if (character == "o") {
        console.log("The chracter you enter is vowel")
    } else if (character == "u") {
        console.log("The chracter you enter is vowel")
    } else {
        console.log("The character you entere is not vowel")
    }
}
function passfail() {
    var pasandfail = prompt("Enter Your obtain marks")
    if (pasandfail > 85) {
        console.log("Your Grade is A+")
    } else if (pasandfail > 70) {
        console.log("Your Grade is A")
    } else if (pasandfail > 60) {
        console.log("Your Grade is B")
    } else if (pasandfail > 50) {
        console.log("Your Grade is C")
    } else if (pasandfail >= 45) {
        console.log("Your Grade is D")
    } else {
        console.log("You are fail")
    }
}
function week() {
    var weekday = prompt("Enter The day")
    if (weekday == 22) {
        console.log("Monday")
    } else if (weekday == 23) {
        console.log("Tuesday")
    } else if (weekday == 24) {
        console.log("Wednesday")
    } else if (weekday == 25) {
        console.log("thursday")
    } else if (weekday == 26) {
        console.log("Friday")
    } else {
        console.log("Enter The Correct Date")
    }
}
function forloop() {
    var test = prompt("enter word")
    test = test.toLocaleLowerCase()
    console.log("staring case", test)
}
function forlop() {
    var test = prompt("enter word")
    test = test.toLocaleLowerCase()
    test = test.length
    console.log("staring case", test)
}
function calculateSum(limit) {
    let i = 1;
    let sum = 0;

    while (i <= limit) {
        sum += i;
        i++;
    }

    return sum;
}

var result = calculateSum(5);
console.log("hussin" , result);

function talbe() {
    var userNum = parseInt(prompt("Enter number for table"))
    var of = parseInt(prompt("Enter number for table upto"))
    for (let index = 0; index <= of; index++) {
        var tableNUmber = userNum * index
        console.log(tableNUmber);
    }
}
function param(a) {
    console.log("usenmber is", a);
}
var test = "param"
param(test)
function name(params) {
    const str = "Hello , world"
    const sliestr = str.slice(0, 5)
    console.log(slicestr)
}
function name() {
    var num = mth.random()
    console.log("", num)
    var data = new data
    console.log("", data);
}
function spliceArray() {
    var names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    console.log(names);
    var removedElements = names.splice(11, 1);
    console.log("", names);
    console.log(removedElements);
}
spliceArray();
function program() {
    var Obj = {
        name: "hussain",
        fName: "laiqt ali",
        RollNo: "12",
        class: "matric",
    }
    console.log(Obj)
    var Obj = {
        name: "fhlfg",
        fName: "asdf",
        RollNo: "11",
        class: "nersury",
    }
    console.log(Obj)
    var Obj = {
        name: "hfhl.",
        fName: "lfigji",
        RollNo: "10",
        class: "paly",
    }
    console.log(Obj)
    var Obj = {
        name: "huskak.,d",
        fName: "dnf.,",
        RollNo: "9",
        class: "praap",
    }
    console.log(Obj)
    var Obj = {
        name: "hfduk",
        fName: "ndfl/lkg",
        RollNo: "8",
        class: "first",
    }
    console.log(Obj)
    var Obj = {
        name: "hsdfn",
        fName: "kjds",
        RollNo: "7",
        class: "second",
    }
    console.log(Obj)
    var Obj = {
        name: "hujfg",
        fName: "hfnsdf",
        RollNo: "6",
        class: "third",
    }
    console.log(Obj)
    var Obj = {
        name: "hdfks",
        fName: "uisdhf",
        RollNo: "5",
        class: "four",
    }
    console.log(Obj)
    var Obj = {
        name: "iskdfn",
        fName: "kdshfn",
        RollNo: "4",
        class: "five",
    }
    console.log(Obj)
    var Obj = {
        name: "dhfb f",
        fName: "iudksfbk",
        RollNo: "3",
        class: "six",
    }
    console.log(Obj)
}
function program() {
    var Obj0 = {
        name: "hussain",
        fName: "laiqt ali",
        RollNo: "12",
        class: "matric",
    }
    console.log(Obj0)

    var Obj1 = {
        name: "fhlfg",
        fName: "asdf",
        RollNo: "11",
        class: "nersury",
    }
    console.log(Obj1)

    var Obj2 = {
        name: "hfhl.",
        fName: "lfigji",
        RollNo: "10",
        class: "paly",
    }
    console.log(Obj2)

    var Obj3 = {
        name: "huskak.,d",
        fName: "dnf.,",
        RollNo: "9",
        class: "praap",
    }
    console.log(Obj3)

    var Obj4 = {
        name: "hfduk",
        fName: "ndfl/lkg",
        RollNo: "8",
        class: "first",
    }
    console.log(Obj4)

    var Obj5 = {
        name: "hsdfn",
        fName: "kjds",
        RollNo: "7",
        class: "second",
    }
    console.log(Obj5)

    var Obj6 = {
        name: "hujfg",
        fName: "hfnsdf",
        RollNo: "6",
        class: "third",
    }
    console.log(Obj6)

    var Obj7 = {
        name: "hdfks",
        fName: "uisdhf",
        RollNo: "5",
        class: "four",
    }
    console.log(Obj7)

    var Obj8 = {
        name: "iskdfn",
        fName: "kdshfn",
        RollNo: "4",
        class: "five",
    }
    console.log(Obj8)

    var Obj9 = {
        name: "dhfb f",
        fName: "iudksfbk",
        RollNo: "3",
        class: "six",
    }
    console.log(Obj9)
    var array = []
    array.push(Obj0, Obj1, Obj2, Obj3, Obj4, Obj5, Obj6, Obj7, Obj8, Obj9,)
    console.log(array);
    var student = [Obj0, Obj1, Obj2, Obj3, Obj4, Obj5, Obj6, Obj7, Obj8, Obj9,]
    for (var a = 0; a < student.length; a++) {
        console.log("Object name", student[a].name);
    }
}
function numbe() {
    var num = Math.random() * 6
    // console.log("num,m value ", num);
    const dicevalue = Math.floor(num) + 1
    console.log(`you rolled a  ${ dicevalue }`);
}
function datetest() {
    var newdate = new Date()
    var day = newdate.getDate()
    console.log("date is", day);
    return day
}
var bc = datetest()

console.log("ajyfgb", bc);

// 1*12*30*24*60*60