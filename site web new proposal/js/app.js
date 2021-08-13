const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


//---------------------SCROLL PROGRESS BAR---------------------------
const container = document.getElementById('js-main-contenedor');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function(){
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = diff / containerHeight * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
}
