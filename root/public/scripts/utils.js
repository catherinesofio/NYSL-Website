function CreateElement(eTag, parent = null, name = '', eClass = '') {
  var e = document.createElement(eTag);
  e.innerHTML = name;

  if (parent != null) {
    parent.appendChild(e);
  }

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}

function CreateImg(src, parent = null, eClass = '') {
  var e = document.createElement('img');
  e.setAttribute('src', src);

  if (parent != null) {
    parent.appendChild(e);
  }

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}

function CreatePicture(src, parent = null, eClass = '') {
  var e = document.createElement('iframe');
  e.setAttribute('src', src);

  if (parent != null) {
    parent.appendChild(e);
  }

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}

function CreateTime(value, name, parent = null, eClass = '') {
  var e = document.createElement('TIME');
  e.dateTime = value;
  e.innerHTML = name;

  if (parent != null) {
    parent.appendChild(e);
  }

  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}

function CreateEmptyTable(parent = document.body, headerNames = null, caption = '', eClass = '') {
  let table = CreateElement('table', parent, '', eClass);
  parent.appendChild(table);

  if (headerNames !== null) {
    let length = headerNames.length;
    let theader = table.appendChild(CreateElement('theader'));
    for (let i = 0; i < length; i++) {
      CreateElement('td', theader, headerNames[i]);
    }
  }

  CreateElement('caption', table, caption);

  return table;
}

function CreateTable(data, parent = null, headerNames = null, caption = '', eClass = '') {
  let table = CreateElement('table', parent, '', eClass);
  let cols = data.length;
  let rows = data[0].length;

  if (headerNames !== null) {
    let thead = CreateElement('thead', table);
    let tr = CreateElement('tr', thead);
    
    for (let i = 0; i < cols; i++) {
      CreateElement('th', tr, headerNames[i]);
    }
  }

  let tbody = CreateElement('tbody', table);
  for (let i = 0; i < rows; i++) {
    let tr = CreateElement('tr', tbody);

    for (let j = 0; j < cols; j++) {
      let d = data[j][i];
      
      if (d.tagName === 'td') {
        tr.appendChild(td);
      }
      else {
        let td = CreateElement('td', tr);
        td.appendChild(d);
      }
    }
  }

  if (caption != '') {
    CreateElement('caption', table, caption);
  }
  
  return table;
}
