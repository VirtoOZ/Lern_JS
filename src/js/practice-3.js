// let numberOfFilms;

// // запись колличества просмотренных фильмов
// function start() {
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '11');
// 	}
// }
// // start();

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// let checkInp = (qies) => {
// 	if (qies != undefined && qies.length != '' && qies.length < 50) {
// 		return true;
// 	} return false;
// };

// // заполняем основной массив фильмами и сохряняем их оценку
// function rememberMyFilms() {
// 	let i = 2;
// 	for (let i = 0; i < 2; i++) {
// 		const viewFilms = prompt('Один из последних просмотренных фильмов?', '');
// 		const getStars = prompt('На сколько оцените его?', '');
// 		if (checkInp(viewFilms) && checkInp(getStars)) {
// 			personalMovieDB.movies[viewFilms] = getStars;
// 		} else i--;
// 	}
// }
// // rememberMyFilms();

// // Определяем категорию насмотренности
// function detectPersonalLevel() {
// 	numberOfFilms < 10 ? console.log("Просмотрено довольно мало фильмов") :
// 		(10 < numberOfFilms && numberOfFilms < 30) ? console.log("Вы классический зритель") :
// 			numberOfFilms > 30 ? console.log("Вы киноман!") : console.log("Произшла ошибка");
// }
// detectPersonalLevel();

// // показ объекта если дано согласие
// function showMyDB() {
// 	if (!personalMovieDB.privat) {
// 		return console.log(personalMovieDB);
// 	}
// }
// showMyDB();

// function writeYouGenres() {
// 	for (let i = 0; i <= 2; i++) {
// 		const usrGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, 'action');
// 		if (checkInp(usrGenres)) {
// 			personalMovieDB.genres[i] = usrGenres;
// 		} else
// 			i--;
// 	}
// }
// writeYouGenres();