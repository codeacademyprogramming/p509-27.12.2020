let p = document.querySelector("p");

window.addEventListener("mousemove", function (event) {
	p.innerHTML = `ClientX: ${event.clientX} - ClientY: ${event.clientY}`;
	console.log(event, "event");
});
