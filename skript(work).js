'use strict';

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
    if (a !=null && b !=null && a !='' && b !="" && a.length < 50){ 
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--; /* В случае если пользователь не выполнил условия, то возвращяемся на повторение цикла,и зададим еще раз вопросы */
    }
      
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

console.log(personalMovieDB);


    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    /* Делаем так, чтобы пользователь не мог оставить ответ в виде пустой строки, 
    отменить ответ или ввести название фильма длиннее чем 50 символов*/
        if (a !=null && b !=null && a !='' && b !="" && a.length < 50){ 
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else {
            console.log('error');
            i--; /* В случае если пользователь не выполнил условия, то возвращяемся на повторение цикла,и зададим еще раз вопросы */
        }
          
    }