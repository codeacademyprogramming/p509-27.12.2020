// let button = document.querySelector("button");

// function clickHandler() {
// 	console.log("Men click olundum!");
// }

// button.addEventListener("click", clickHandler);
// // button.addEventListener("click", clickHandler, { once: true });
// // button.removeEventListener("click", clickHandler);

// document.addEventListener("DOMContentLoaded", function () {
// 	alert("DOM built");
// });

// button.addEventListener("click", function (event) {
// 	alert(event.type + " at " + event.currentTarget);
// 	alert("Coordinates: " + event.clientX + ":" + event.clientY);
// });

// let form = document.querySelector("form");
// let div = document.querySelector("div");
// let p = document.querySelector("p");

// console.log("🚀 ~ file: index.js ~ line 21 ~ form", form);

// form.addEventListener("click", function (event) {
// 	console.log(event.target);
// });
// div.addEventListener("click", function (event) {
// 	console.log(event.target);
// });
// p.addEventListener("click", function (event) {
// 	console.log(event.target);
// });

// button.addEventListener("click", function (event) {
//     console.dir(event.target, 'event.target')
// });

let a = document.querySelector("a");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	console.log(event, "event");
});
