var curr = 0;
var next = 1;
var speed = 3000;
var images = [];

CreateSlideshow();

function CreateSlideshow() {
  let container = document.getElementById('slideshow');
  let srcs = slideshowData.data;

  for (var i = 0; i < srcs.length; i++) {
    images.push(CreateImg(srcs[i], container, 'slide'));
    images[i].style.opacity = 0.0;
  }
  images[curr].style.opacity = 1.0;

  setTimeout(TriggerTransition, speed);
}

function TriggerTransition() {
  FadeOut();
  FadeIn();
}

function FadeOut() {
  let e = images[curr];
  e.style.opacity = parseFloat(e.style.opacity) - 0.1;

  if (e.style.opacity < 0.0) {
    e.style.opacity = 0.0;
  }
}

function FadeIn() {
  let e = images[next];
  e.style.opacity = parseFloat(e.style.opacity) + 0.1;

  if (e.style.opacity > 1.0) {
    e.style.opacity = 1.0;
    ChangeSlide();
  } else {
    setTimeout(TriggerTransition, 50);
  }
}

function ChangeSlide() {
  curr = next;
  next = (next + 1) % (images.length);

  setTimeout(TriggerTransition, speed);
}
