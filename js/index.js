// Your code goes here

// drag / drop;
// focus;
// select ?;

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
  link.addEventListener("click", event => {
    event.preventDefault();
  })
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
    header.style.backgroundColor = "pink";
  },
  false
);

// resize
window.addEventListener("resize", sizeChanged);
function sizeChanged(event) {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#FEF9E7";
}

// mouseover
const pictures = document.querySelectorAll(".img-content img");
pictures.forEach(picture => {
  picture.addEventListener("mouseover", event => {
    picture.style.border = "2px solid black";
  });
});

// select
anchor[0].addEventListener("select", function(event) {
  event.target.style.fontSize = "3rem";
});

// drag
/* Events fired on the drag target */

// buttons[0].addEventListener("dragstart", function(event) {
//   event.dataTransfer.setData("Text", event.target.id);
// });

// document.addEventListener("drag", function(event) {
//   document.getElementById("demo").innerHTML = "The p element is being dragged";
// });

// /* Events fired on the drop target */
// document.addEventListener("dragover", function(event) {
//   event.preventDefault();
// });

// dblclick
const destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("dblclick", event => {
  destinationImg.style.border = "5px dotted black";
});

// load
window.addEventListener("load", event => {
  //   alert("Page is loaded. Happy browsing!");
});

// prevent event propagation
const destinationDiv = document.querySelector(".destination");
destinationDiv.addEventListener("click", event => {
  console.log("destinationDiv");
});

const destinationDivBtn = document.querySelector(".destination .btn");
destinationDivBtn.addEventListener("click", event => {
  console.log("destinationDivBtn");
  event.stopPropagation();
});
