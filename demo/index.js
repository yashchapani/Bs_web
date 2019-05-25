/*var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider1");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
  setTimeout(showDivs(slideIndex++),3000);
}
*/

var slideIndex = 0;
var clear;
showSlide(0);

function clearTime(){
  clearTimeout(clear,4000);
}

function showSlide(n) {
  var i;
  var x = document.getElementsByClassName("slider1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex += n;
 
  if (slideIndex >= x.length) {slideIndex = 0} ;
  if (slideIndex < 0) {slideIndex = x.length-1} ;
  x[slideIndex].style.display = "block";
   
  clear = setTimeout(function(){showSlide(1)}, 4000);

}