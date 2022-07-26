/*Проверка поддержки webp, добавление класса webp или no-webp для HTML*/
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export const accordion = () => {

	const accordionInit = document.querySelector('.accordion-init')

	if (accordionInit) {
		const accBtns = accordionInit.querySelectorAll('.accordion-btn');
		const accContents = accordionInit.querySelectorAll('.accordion-content');

		accBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				accContents.forEach((acc) => {
					if (
						e.target.nextElementSibling !== acc &&
						acc.classList.contains("active")
					) {
						acc.classList.remove("active")
					}
				});

				const panel = btn.nextElementSibling;
				panel.classList.toggle('active');
				btn.classList.toggle('active');
			});
		});
	}

}

const menuDclick = document.querySelector(".menu-dclick");

if (menuDclick) {
	menuDclick.onclick = function (e) {
		e.preventDefault();  // Блокирует переход по ссылке
		this.onclick = null; // После первого клика, обработчик удаляется.
	};
}

export const currentLink = () => {
	if (sideNav) {
		sideNav.querySelectorAll('a[href="' + document.URL + '"]').forEach(elem => { elem.className += ' current-link' });
	}
}