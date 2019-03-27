let collapsibles = document.getElementsByClassName('collapsible');

AddCollapsibleEvent();

function AddCollapsibleEvent() {
  for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('mouseover', ToggleCollapsible);
    collapsibles[i].addEventListener('mouseout', ToggleCollapsible);
    collapsibles[i].nextElementSibling.style.display = 'none';
  }
}

function ToggleCollapsible() {
  let content = this.nextElementSibling;
  let collapsible = content.previousSibling;

  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}
