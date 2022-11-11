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


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
/* Делаем так, чтобы пользователь не мог оставить ответ в виде пустой строки, 
отменить ответ или ввести название фильма длиннее чем 50 символов*/
 /*    if (a !=null && b !=null && a !='' && b !="" && a.length < 50){ 
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--; /* В случае если пользователь не выполнил условия, то возвращяемся на повторение цикла,
        и зададим еще раз вопросы */
/*     }
      
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); */
    
/* Вариант №2 */

/*  */
const str = "test";
const arr = [1,2,3]; 

console.log(str.toUpperCase()); /* Увеличение текста */

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); /*  */

const logg = "Hello world";

console.log(logg.slice(6, 11)); /* Вырезает нужную строку (заданные цыфры - позиция символов) 
*Можно указать начальный символ без конечного */
/* При отрицательном обратный метод */

console.log(logg.substring(6, 11)); /* Не поддерживает отрицательные символы */

/* Math -  */

const num = 12.2;
console.log(Math.round(num)); /* Округление для ближайшего целого */

const test = "12.2px";
console.log(parseInt(test)); /* Переводит число в другую систему исчесления десятичная, двоичная итд */
console.log(parseFloat(test)); /* Возращяет число в десятичный вариант */