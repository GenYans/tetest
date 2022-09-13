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

/* Цыклы */

/* Первый */

let num = 50;

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
for (let i = 1;i < 10; i++) {
    if (i === 6) {
        /* break; */
        continue;
    }
    console.log(i);
}