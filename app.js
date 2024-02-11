const navMenu = document.querySelector('.nav__container');
const navButton = document.querySelector('.menu__button');

const navElements = document.querySelectorAll('.nav__element');
const navNesting = document.querySelector('.nav__nesting');

navButton.addEventListener('click', () => {

	navMenu.classList.toggle('nav__container--show');

	if(navMenu.classList.contains('nav__container--show')){

		navButton.setAttribute('src', '././images/icon-close.svg');

	}else{

		navButton.setAttribute('src', '././images/icon-hamburger.svg');

	}
});

navElements.forEach(navElement => {
	navElement.classList.toggle('nav__nesting--show');
});