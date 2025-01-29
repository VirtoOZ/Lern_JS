window.onload = function () { //когда весь контент загрузится
	document.addEventListener("click", documentActions);

	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target; // кладем в переменную нажатый объект
		if (window.innerWidth > 768 && isMobile.any()) { // если ширина окна меньше 768 и это мобилка
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
				function _removeClasses(object, classToRemove) {
					for (let index = 0; index < object.length; index++) {
						const element = object[index];
						element.classList.remove(classToRemove);
					}
				}
			}
		}
	}
}
//<BURGER>=================================
const iconMenu = document.querySelector('.menu__icon');//находим класс menu__icon
const menuBody = document.querySelector('.menu__body');//находим класс menu__body
const headerBody = document.querySelector('.header__body');//находим класс menu__body
if (iconMenu) {//Проверяем есть ли menu__icon
	iconMenu.addEventListener("click", function (e) {//вещам событие при клике мыши
		document.body.classList.toggle('_lock');//Для Body даем класс Lock для отключения прокрутки
		iconMenu.classList.toggle('_active');//добавляем класс active menu__icon
		menuBody.classList.toggle('_active');//добавляем класс active menu__body
		headerBody.classList.toggle('_active');//добавляем класс active menu__body
		// _slideToggle(menuBody, 500);
	});
};
//</BURGER>=================================

//<BURGER SIDE-MENU>=================================
// let menuPageBurger = document.querySelector('.menu-page__burger');
// let menuPageBody = document.querySelector('.menu-page__body');
// menuPageBurger.addEventListener("click", function (e) {
// 	// menuPageBody.classList.toggle('_active');
// 	menuPageBurger.classList.toggle('_active');
// 	_slideToggle(menuPageBody, 500);
// });
//</BURGER SIDE-MENU>=================================

//<ANIM-SLIDE>================================================================
/*   Анимированное плавное открытие и закрытие блока.
Может применяться к меню или выпадающему списку
Выписано из видео фрилансера.
В CSS нужно установить display: none; для родителя.
*/
// SlideUP
import { _slideUp } from "./functions.js";
// SlideDown
import { _slideDown } from "./functions.js";
//SlideToggLe
import { _slideToggle } from "./functions.js";
//</ANIM-SLIDE>================================================================
import { iBg } from "./functions.js";
iBg();
//<isMobile>================================================================
//Проверка на каком устройстве работаем
import { isMobile } from "./functions.js";
//</isMobile>================================================================