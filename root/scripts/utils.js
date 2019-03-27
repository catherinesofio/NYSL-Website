function CreateData(eTag, parent = document.body, data = '', eClass = '') {
  var e = document.createElement(eTag);
  parent.appendChild(parent);
  e.innerHTML = data;

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}

function CreateImg(src, parent = document.body, eClass = '') {
  var e = document.createElement('img');
  parent.appendChild(e);
  e.setAttribute('src', src);

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}
