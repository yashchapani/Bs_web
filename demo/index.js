var slideIndex = 0;
var clear;
showSlide(0);

function showSlide(n) {

  var x = document.getElementsByClassName("slider1");

  n %= x.length;

  clearTimeout(clear);

  for (let slider of x) {
    slider.style.display = "none";
  }

  slideIndex = (slideIndex + n + x.length) % x.length;

  x[slideIndex].style.display = "block";

  clear = setTimeout(function () { showSlide(1) }, 4000);

}

var menuOpened = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if (menuOpened == false) {
    var items = document.querySelectorAll(".nav .mobile-menu");
    items.forEach(item => {
      item.style.display = "block";
    });
    menuOpened = true;
  }
  else {
    var items = document.querySelectorAll(".nav .mobile-menu");
    items.forEach(item => {
      item.style.display = "none";
    });
    menuOpened = false;
  }
});

window.onresize = () => {
  if (screen.width > 850) {
    if (menuOpened == true) {
      console.log("menu is opened");
      document.getElementById("menu-button").click();
    }
  }
};

window.onscroll = function () { scrollFunction(); }

function scrollFunction() {
  console.log(screen.width);
  if (screen.width > 1000) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      var nav = document.getElementById("nav");
      nav.style.fontSize = "18px";
      nav.style.lineHeight = "40px";
      var logo = document.querySelector(".logo img");
      logo.style.height = "60px";
      var main = document.querySelector("main");
      main.style.marginTop = "60px";
    }
    else {
      var nav = document.getElementById("nav");
      nav.style.fontSize = "20px";
      nav.style.lineHeight = "80px";
      var logo = document.querySelector(".logo img");
      logo.style.height = "100px";
      var main = document.querySelector("main");
      main.style.marginTop = "100px";
    }
  }
}