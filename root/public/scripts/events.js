CreateEvents();

function CreateEvents() {
  let container = document.getElementById('events');
  
  let data = eventsData.events;
  let count = data.length;
  let e = null;
  
  for (let i = 0; i < count; i++) {
    e = data[i];
    
    let ev = CreateElement('div', container, '', 'event');
    let dt = new Date(e.year, e.month, e.day);
    CreateTime(dt, monthNames[dt.getMonth()] + ' ' + e.day, ev);
    CreateElement('p', ev, e.name);
  }
}