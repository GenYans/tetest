'use strict';
/* 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (4 == 9) {
    console.log('Ok!');
}
else {
    console.log('Eror');
}

if (num < 49) {
    console.log ('Error');
} else if (num > 100) {
    console.log ('Много');
} else {
    console.log ('Ok!');
}

(num === 50) ? console.log('OK!') : console.log ('Error');

 */
/* const num = 51;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;  
}
 */

/* const hamburger  = 5;
const fries = null;

if (hamburger && fries) {
    console.log ('');
}
 */

/* const hamburger  = 3;
const fries = 1;
const cola = 0;

console.log (hamburger === 3 && cola && fries)

if (hamburger === 3 && cola === 1 && fries ) {
    console.log ('Все сыты');
}else {
    console.log ('Уходим в другое заведение');
}


console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && text);
 */
/* 
const hamburger  = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
    console.log ('Все довольны');
}else {
    console.log ('Уходим в другое заведение');
}
console.log (hamburger === 3 && cola === 2 || fries ===3 && nuggets);


let JohnReport, AlexReport, SamReport, MariaReport = 'done';
console.log(JohnReport || AlexReport || SamReport || MariaReport );

console.log (!NaN);


console.log(5 === 5 && 3 > 1 || 5);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && text);


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
} */

/* Циклы */

/* Первый */

/* let num = 50; */

/* while (num <= 55) {
    console.log (num);
    num++;
} */

/* Второй */

/* let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);
 */
/* for (let i = 1;i < 10; i++) {
    if (i === 6) {
        /* break; */
    /*     continue;
    }
    console.log(i);
} */

/* for (let i = 0; i < 3;i++){
    console.log(i);
    for (let j = 0; j < 3;j++) {
        console.log(j);
    }    
} */
/* Пример  */
// *
// **
// ***
// ****
// *****
// ******

/* let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++){
        result += "*";
    }

    result += '\n';
}

console.log(result); */
/* метка */
/* first: for (let i = 0; i < 3;i++){
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3;k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }    
    }
}
 */

/* Задание №1 */

/* let num = 5;
while (num <= 10) {
    console.log (num);
    num++;
} */
/* Задание №2 */


/* Задание №3 */

/* for (let i = 2;i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 5) {
        continue;
    }
    if (i === 7) {
        continue;
    }
    if (i === 9) {
        continue;
    }
    console.log(i);
} */

/* Задание №4 */

/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}  */
/* Свой вариант */
/* 
let num1 = 3;
while (num1 < 4){
    console.log(num1);
    num1++;
}
let num2 = 5;
while (num2 < 6){
    console.log(num2);
    num2++;
}
let num3 = 7;
while (num3 < 8){
    console.log(num3);
    num3++;
}
let num4 = 9;
while (num4 < 10){
    console.log(num4);
    num4++;
}
let num5 = 11;
while (num5 < 12){
    console.log(num5);
    num5++;
}
let num6 = 13;
while (num6 < 14){
    console.log(num6);
    num6++;
}
let num7 = 15;
while (num7 < 16){
    console.log(num7);
    num7++;
} */

/* Задание №5 */
/* const arr = [5,6,7,8,9,10]; */


/* for (let i = 20; i >= 10;i--){
    if (i === 13) break;
    console.log(i);
} */




/* Функции */
/* let num = 20;
function showFirstMassage(text) {
    console.log (text);
    let num = 10; */ /* Локальная - вызывается в случае если внутри функции есть команда, для написания глобальной ссылки прописать num = 10; */
    /* Перезаписываем значение глобальной переменной внутри функции */
   /*  console.log (num); */ /* Пытается найти переменную num внутри функции, в случае ее отсутсвия всегда поднимается на уровень выше, и ищет там */
/* } */

/* showFirstMassage("Hello Kostya!");
console.log (num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));
 */
/* Function declaration */

/* function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); */

/* Function expression */
/* const loger = function() {
    console.log("Hello");
};
loger(); */

/* Стрелочная функция */
/* const calc = (a, b) => {
    console.log("1");
    return a + b;
};

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr){
    return curr * amount;
} */
/* convert(500, usdCurr); */ /* делаем функцию универсальной, не зависещей от конкретных значений */

/* function promotion (result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr); */

/* const res = convert(500, usdCurr);
promotion(res); */

/* Пример */
/* function test(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {return}
    }
    console.log('Done!')
}
test(); */

/* Пример 2 */
/* function doNothing () {};
console.log(doNothing() === undefined);
 */


/* Callback - функция, которая должна быть выполнена после того как другая функция завершила свое выполнение */

/* function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function lernJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

lernJS('JavaScript', done);
 */

/* Объекты общирный курс (ассециативные массивы) */

/* Обьекты диструктуризация */

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length); */


/* const position = {
    mail: 'geas',
    class: 24,
    milk: 5
};

console.log(Object.keys(position).length); */
/* let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter); */

/* const arr = [0, 1, 2, 3, 6, 8]; */
/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */
/* 
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const mas = [0, 1, 2, 6, 8];

mas.forEach(function(name, bac, mas) {
    console.log(`${name}- ${bac} next title ${mas}`);
}); */

/* arr.pop(); -  *//* удаляет последний элемент */
/* arr.push(10); -  *//* добовляет элемент в массив */


/* console.log(arr); */

/* for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let value of arr) {
    console.log(value);
} */

/* const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; ')); */

/* const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} */
/*  
let a = 5;
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */


/* function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers); */

/* Object assign */
/* const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20; */

/* console.log(add);
console.log(clone); */
/* 
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasdasas';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk'];

      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj); */

/* const Kost = [1, 2, 3];

const Gena = {...Kost};

console.log(Gena); */

/* let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj)); */


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const John = Object.create(soldier);

/* const John = {
    health: 100
}; */

/* John.__proto__ = soldier; */

/* Object.setPrototypeOf(John, soldier); */

/* console.log(John.armor); */
John.sayHello();
