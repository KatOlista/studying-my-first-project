const burger = document.querySelector('.nav__burger'),
	body = document.querySelector('body'),
	navBody = document.querySelector('.nav__body');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	navBody.classList.toggle('active');
	body.classList.toggle('lock');
});

document.addEventListener('click', function (event) {
	if (!event.target.closest('.nav__burger') && (!event.target.closest('.nav__body'))) {
		burger.classList.remove('active');
		navBody.classList.remove('active');
		body.classList.remove('lock');
	}
});

document.addEventListener('keydown', function (event) {
	if (event.code === 'Escape') {
		burger.classList.remove('active');
		navBody.classList.remove('active');
		body.classList.remove('lock');
	}
});