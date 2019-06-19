// Your code goes here

// click
const anchor = document.querySelectorAll("a");
anchor.forEach(a => (a.style.padding = "10px"));
anchor.forEach(a => {
  a.addEventListener("click", event => {
    event.target.style.backgroundColor = "#A3E4D7";
  });
});

// Prevent default on the nav items
const links = document.querySelectorAll(".nav-link");
links.forEach(link =>
  link.addEventListener("click", event => event.preventDefault())
);

// click
const link = document.querySelector("header nav a");
link.addEventListener("click", event => {
  const intro = document.querySelector(".intro h2");
  intro.textContent = "Hey There!";
});

// keydown
document.addEventListener("keydown", event => {
  const logo = document.querySelector(".logo-heading");
  logo.style.fontSize = "5rem";
});

// wheel
let scale = 1;
const img = document.querySelector("header img");
img.addEventListener("wheel", event => {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  img.style.transform = `scale(${scale})`;
});

// scroll
window.addEventListener(
  "scroll",
  function() {
    const header = document.querySelector(".main-navigation");
    header.style.backgroundColor = " #17A2B8";
  },
  false
);

// resize
window.addEventListener("resize", event => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#FEF9E7";
});

// mouseover
const pictures = document.querySelectorAll(".img-content img");
pictures.forEach(picture => {
  picture.addEventListener("mouseover", event => {
    picture.style.border = "2px solid black";
  });
});

// onmousedown
const footer = document.querySelector(".footer p");
footer.addEventListener("mousedown", event => {
    footer.style.color = "white";
});

// dblclick
const destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener( "dblclick", event => (destinationImg.style.border = "5px dotted black")
);

// load
window.addEventListener("load", event => alert("Page is loaded. Happy browsing!"));

// Prevent event propagation
const destinationDiv = document.querySelector(".destination");
destinationDiv.addEventListener("click", event => console.log("destinationDiv"));

const destinationDivBtn = document.querySelector(".destination .btn");
destinationDivBtn.addEventListener("click", event => {
  console.log("destinationDivBtn");
  event.stopPropagation();
});

TweenMax.staggerTo(".logo-heading", 1, { rotation: 360, y: 10 }, 0.5);
TweenMax.staggerTo(".btn", 1, { rotation: 360, y: 10 }, 0.5);