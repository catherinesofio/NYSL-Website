let curr = 0;
let next = 1;
let speed = 1500;
let images = [];

CreateSlideshow();
ChangeSlide();

function CreateSlideshow() {
  let container = document.getElementById('slideshow');
  let srcs = slideshowData.data;

  for (var i = 0; i < srcs.length; i++) {
    images.push(CreateImg(srcs[i], container, 'slide'));
    images[i].style.opacity = 0.0;
  }
}

function ChangeSlide() {
  images[curr].style.opacity = 0.0;
  
  curr = next;
  
  if (next < images.length - 1) {
    next++;
  } else {
    next = 0;
  }
  
  images[curr].style.opacity = 1.0;
  images[next].style.opacity = 0.0;

  setTimeout(TriggerTransition, speed);
}

function TriggerTransition() {
  FadeOut();
  FadeIn();
}

function FadeOut() {
  let e = images[curr];
  e.style.opacity -= 0.1;
  
  if (e.style.opacity < 0.0) {
    e.style.opacity = 0.0;
  } else {
    setTimeout(FadeOut, 100);
  }
}

function FadeIn() {
  let e = images[next];
  e.style.opacity += 0.1;
  
  if (e.style.opacity > 1.0) {
    e.style.opacity = 1.0;
    ChangeSlide();
  } else {
    setTimeout(FadeIn, 100);
  }
}