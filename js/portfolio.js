const frontside = document.querySelectorAll('.item__frontside');
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;

for (i = 0; i < frontside.length; i++) {
	if (mainElementWidth > 760) {
		frontside[i].addEventListener('mouseenter', function (event) {
			event.target.classList.add('active');
		});
		frontside[i].addEventListener('mouseleave', function (event) {
			event.target.classList.remove('active');
		});
	}
}