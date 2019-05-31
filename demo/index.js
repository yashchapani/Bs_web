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
   
  clear = setTimeout(function(){showSlide(1)}, 4000);

}

var menuOpened = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if(menuOpened == false){
    var items = document.querySelectorAll(".nav .mobile-menu");
    items.forEach(item => {
      item.style.display = "block";
    });
    menuOpened = true;
  }
  else{
    var items = document.querySelectorAll(".nav .mobile-menu");
    items.forEach(item => {
      item.style.display = "none";
    });
    menuOpened = false;
  }
});

window.onresize = () => {
if(screen.width > 850){
  if(menuOpened == true){
    console.log("menu is opened");
    document.getElementById("menu-button").click();
  }
}
};