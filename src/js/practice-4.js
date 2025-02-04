/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	// запись колличества просмотренных фильмов
	start: function () {
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '11');
		}
	},
	checkInp: (qies) => {
		if (qies != undefined && qies.length != '' && qies.length < 50) {
			return true;
		} return false;
	},
	// заполняем основной массив фильмами и сохряняем их оценку
	rememberMyFilms: function () {
		let i = 2;
		for (let i = 0; i < 2; i++) {
			const viewFilms = prompt('Один из последних просмотренных фильмов?', '');
			const getStars = prompt('На сколько оцените его?', '');
			if (checkInp(viewFilms) && checkInp(getStars)) {
				personalMovieDB.movies[viewFilms] = getStars;
			} else i--;
		}
	},
	// Определяем категорию насмотренности
	detectPersonalLevel: function () {
		personalMovieDB.count < 10 ? console.log("Просмотрено довольно мало фильмов") :
			(10 < personalMovieDB.count && personalMovieDB.count < 30) ? console.log("Вы классический зритель") :
				personalMovieDB.count > 30 ? console.log("Вы киноман!") : console.log("Произшла ошибка");
	},
	// показ объекта если дано согласие
	showMyDB: function () {
		personalMovieDB.toggleVisibleMyDB();
		if (!personalMovieDB.privat) {
			return console.log(personalMovieDB);
		}
	},
	// запрос жанра
	writeYouGenres: function () {
		// for (let i = 0; i <= 2; i++) {
		// 	const usrGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, 'action');
		// 	if (personalMovieDB.checkInp(usrGenres)) {
		// 		personalMovieDB.genres[i] = usrGenres;
		// 	} else
		// 		i--;
		// }

		// personalMovieDB.genres.forEach((item, i) => {
		// 	console.log(`Любимый жанр ${i + 1} - это ${item}`);
		// })
		for (let i = 1; i < 2; i++) {
			const usrGenres = prompt('Введите свои любимые жанры через запятую', '');
			personalMovieDB.checkInp(usrGenres) ?
				personalMovieDB.genres = usrGenres.toLowerCase().split(', ').sort() : i--;
		}
	},
	toggleVisibleMyDB: function () {
		personalMovieDB.privat ? personalMovieDB.privat = false :
			personalMovieDB.privat = true;
	}
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYouGenres();

console.log(personalMovieDB.count);