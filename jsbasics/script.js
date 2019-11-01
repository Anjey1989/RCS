console.log("hello world");

var myName = "nosaukums";

console.log(myName);

console.log(typeof (myName));

myName = 100;

console.log(typeof (myName));

const mansVards = "Andrejs";
const mans_vards = "Andrejs";

// mansVards = "nav andrejs";
// console.log(mansVards);

var a;

console.log(a);

a = 7;

var b = a;

console.log(b);

var q = 1;
var w = 2;
var e = "I am a string";

var z = "6";
console.log(z + 1);

q = q * 4;
console.log(q);

// q=q^3;
var condition = true;

if (condition == true) {

    console.log(condition);
}

if (condition) {
    console.log("true");
}

else {
    console.log("false");
}

var my_variable = 10;
var my_second_variable = 5;

if (my_variable < my_second_variable) {
    console.log("ir lielaks");
} else if (my_variable === my_second_variable) {
    console.log("ir vienadi");
} else {
    console.log("mazaks");
}

var my_number = 30;

switch (my_number) { // izpilda visu atlikusho koda dalu kad sastop pirmo derigo
    case 30:
        console.log("ir 30");
        break;
    case 31:
        console.log("ir 29");
        break;
    default:
        console.log("nav neviens");
}

while (my_number < 35) {
    console.log(my_number);
    my_number++;
}

for (var i = 0; i < 5; i++) {
    console.log("i=" + i);
}

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        if (j == 3) {
            continue; //continue izlaizh iteraciju
        }
        console.log("i=" + i + " " + "j=" + j);
    }
}

var some_number = 0;
do {
    some_number++;
    console.log("kaut kads cipars" + some_number);
} while (some_number < 5)

var mansObjekts = [
    { name: "Andrejs", surname: "Savins" },
    { name: "peteris", surname: "balodis" }
];

for (var i = 0; i < mansObjekts.length; i++) {
    console.log(mansObjekts[i].name);
}

var array = [1, 2, 3, 4];

console.log(array);

console.log(typeof array);

var arrayB = array;
array.push(5);
console.log(array);
console.log(arrayB);

array = ["a", "b"];
console.log(array);
console.log(arrayB);

var test = "global";

console.log(test);

function functionName() {
    console.log(test);
}

functionName();

function functionNameNrTwo() {
    var test = "notGlobal";
    console.log(test);
}

functionNameNrTwo();

console.log("new lines");

var masivs = [1, 2, 3];

console.log(masivs.length);

masivs[5] = 60;

console.log(masivs);

masivs.forEach(function (elements) {
    console.log(elements);
})

masivs.pop();
console.log(masivs);
masivs.shift();
console.log(masivs);
masivs.unshift("jaunums");
console.log(masivs);
masivs.push(7);
console.log(masivs);

console.log(masivs.indexOf("jaunums"));

var jaunsMasivs = masivs.slice(1, 4); // splice izmainas originalos masivu,bet slice nee

console.log(jaunsMasivs);
console.log(masivs);

console.log(masivs.filter(function (params) {
    return params > 2;
}))

console.log(masivs.reverse());

thirdMassive = masivs.concat(jaunsMasivs);

console.log(thirdMassive); //apskaties string methods and array methods

console.log("kaut kas jauns");



function summit(param, paramTwo) {
    return param + paramTwo;
}

var kautKas = summit(2, 3);
console.log(kautKas);

(function calc(param) {
    console.log("calc function called" + " " + param);
})(10)

function message(message) {
    console.log(arguments);
}

message("hi", "roland");

function smtImportant(numbers) {
    var i = arguments.length;
    // console.log(i);
    var sumOf = 0;
    var j = 0;
    while (j < i) {
        sumOf = sumOf + arguments[j];
        j++;
    }
    console.log(sumOf);
}


smtImportant(2, 3, "4", 5);

