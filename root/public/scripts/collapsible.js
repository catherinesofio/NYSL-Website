let mouseTarget = null;

AddEvents();

function AddEvents() {
  let cont = null;
  let collapsibles = document.getElementsByClassName('collapsible');

  for (i = 0; i < collapsibles.length; i++) {
    cont = collapsibles[i].nextElementSibling;
    cont.style.display = 'none';

    collapsibles[i].addEventListener('mouseenter', ShowContent);
    collapsibles[i].addEventListener('mouseleave', HideContent);
    cont.addEventListener('mouseenter', ShowSelf);
    cont.addEventListener('mouseleave', HideSelf);
  }
}

function ShowContent(e) {
  e.target.nextElementSibling.style.display = 'block';

  mouseTarget = e.target;
}

function HideContent(e) {
  if (mouseTarget === e.target) {
    mouseTarget = null;
  }

  setTimeout(function () {
    HideContentDelay(e.target.nextElementSibling);
  }, 1);
}

function HideContentDelay(cont) {
  if (mouseTarget !== cont) {
    cont.style.display = 'none';
  }
}

function ShowSelf(e) {
  mouseTarget = e.target;
}

function HideSelf(e) {
  if (mouseTarget === e.target) {
    mouseTarget = null;
  }

  if (mouseTarget !== e.target.previousElementSibling) {
    e.target.style.display = 'none';
  }
}
