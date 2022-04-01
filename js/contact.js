const form = document.querySelector('form.table__form');
const formInputs = form.getElementsByTagName('input');
const statusMessage = document.createElement('div.confirm');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	form.appendChild(statusMessage);

	let request = new XMLHttpRequest();
	request.open('POST', 'server.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	let contactFormData = new FormData(form);
	request.send(contactFormData);

	request.addEventListener('readystatechange', function () {
		if (request.readyState < 4) {
			statusMessage.innerHTML = "Loading...";
		} else if (request.readyState === 4 && request.status == 200) {
			statusMessage.innerHTML = "Your message is successfully send!";
		} else {
			statusMessage.innerHTML = "Something goes wrong. Try again";
		}
	});

	for (let i = 0; i < formInputs.length; i++) {
		formInputs[i].value = '';
	}
});