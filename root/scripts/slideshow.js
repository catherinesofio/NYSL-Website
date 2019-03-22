var images = [];
images[0] = 'assets/design1_image1.jpg';
images[1] = 'assets/design2_image1.jpg';

var i = 0;
var time = 3000;

window.onload = slideImg;

function transition() {
  
}

function slideImg() {
  
  document.getElementById("slideshow").style.backgroundImage='url('+images[i]+')';

  if (i < images.length - 1)
    i++;
  else
    i = 0;

  setTimeout(slideImg,time);
}