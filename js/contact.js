const form = document.querySelector('form.table__form');
const formInputs = form.getElementsByTagName('input');
const statusMessage = document.createElement('div.confirm');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	form.appendChild(statusMessage);

	let clearInputs = function () {
		for (let i = 0; i < formInputs.length; i++) {
			formInputs[i].value = '';
			formInputs[i].placeholder = '';
		}
	};
	let contactFormData = new FormData(form);

	async function req(data, url) {
		await fetch(url, {
				method: 'POST',
				body: data
			})
			.then(data => statusMessage.innerText = "Your message is successfully send!")
			.catch(statusMessage.innerText = "Something goes wrong. Try again")
			.then(clearInputs);
	}

	for (let i = 0; i < formInputs.length; i++) {
		if (formInputs[i].value != '' && formInputs[i + 1].value != '' && formInputs[i + 2].value != '') {
			req(contactFormData, 'server.php');
		} else {
			formInputs[i].placeholder = 'This field is required for fillings';
		}
	}


	// let request = new XMLHttpRequest();
	// request.open('POST', 'server.php');
	// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	// let contactFormData = new FormData(form);
	// request.send(contactFormData);

	// request.addEventListener('readystatechange', function () {
	// 	if (request.readyState < 4) {
	// 		statusMessage.innerText = "Loading...";
	// 	} else if (request.readyState === 4 && request.status === 200) {
	// 		statusMessage.innerText = "Your message is successfully send!";
	// 	} else {
	// 		statusMessage.innerText = "Something goes wrong. Try again";
	// 	}
	// });

	// for (let i = 0; i < formInputs.length; i++) {
	// 	formInputs[i].value = '';
	// }
});