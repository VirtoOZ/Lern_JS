/* js файлы теперь можем импортировать с других папок - 
import * as flsFunctions from './modules/functions.js' 
вызывать flsFunctions.isWebp() */

//======================================================================
'use strict'

// В script.js подключаются дополнительные функции slide, webp, ibg...
import './files/script.js';
// import './files/sliders.js';
// import './files/dynamic_adapt.js';
import './files/functions.js';
import './files/forms.js';
// import './libs/swiper-bundle.min.js';
// import './files/regular.js';

//======================================================================

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '11');

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
// - count - сюда передается ответ на первый вопрос
// - movies - в это свойство поместить пустой объект
// - actors - тоже поместить пустой объект
// - genres - сюда поместить пустой массив
// - privat - в это свойство поместить boolean(логическое) значение false
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

while (i > 0) {
	let viewFilms = prompt('Один из последних просмотренных фильмов?', 'Logan');
	let getStars = prompt('На сколько оцените его?', '8.1');
	personalMovieDB.movies[viewFilms] = getStars;
	i--;
}
console.log(personalMovieDB);
