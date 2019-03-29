function CreateElement(eTag, parent = document.body, name = '', eClass = '') {
  var e = document.createElement(eTag);
  parent.appendChild(e);
  e.innerHTML = name;

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

function CreateTime(value, name, parent = document.body, eClass = '') {
  var e = document.createElement('TIME');
  e.dateTime = value;
  e.innerHTML = name;
  parent.appendChild(e);

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}