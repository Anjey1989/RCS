console.log(window);

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(innerHeight);
console.log(outerWidth);

console.log(window.location);

// window.location = "https://www.tvnet.lv/";

console.log(window.document);

localStorage.setItem("loggedIn",true);

sessionStorage.setItem("sessionStorage",1000);

console.log(sessionStorage.getItem("sessionStorage"));

// location.reload();

console.log(window.document.title);

console.log(window.document.body.children);

window.document.body.children[1].textContent = "hello pasaule"
window.document.body.children[1].style.backgroundColor = "red"; // izmanto camelCase

window.document.body.children[2].children[2].style.backgroundColor = "red";

console.log(document.body.firstChild);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(window.document.body.children[2].parentElement);

console.log(document.getElementsByTagName("li"));

console.log(document.getElementsByClassName("active"));

console.log(document.getElementById("title"));

console.log(document.querySelector(".active"));

console.log(document.querySelectorAll("ul li.active"));

var p = document.createElement("p");

p.textContent = "new Paragraph";

p.style.fontSize = "17px";

var li = document.querySelector("li"); //query sellector all nestrada ,janorada konkrets elements
li.appendChild(p);

var list = document.querySelectorAll("li")[3];

li.remove();

alert("this is alert");

console.log(confirm("are yo sure"));

console.log(prompt("your name"));