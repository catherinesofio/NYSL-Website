CreateScheduleTables();
CreateLocationTables();

function CreateScheduleTables() {
  let container = document.getElementById('game-schedules');
  
  let count = schedulesData.games.length;
  let e = null;
  let time = null;
  
  let dates = [];
  let teams = [];
  let times = [];
  let location = [];
  for (let i = 0; i < count; i++) {
    e = schedulesData.games[i];
    time = e.time.split(':');
    
    dates.push(CreateTime(new Date(e.year, e.month, e.day), e.month + '/' + e.day));
    teams.push(CreateElement('td', null, e.teams));
    location.push(CreateElement('td', null, e.location));
    times.push(CreateTime(new Date(e.year, e.month, e.day, time[0], time[1], 0, 0), e.time));
  }
  
  let data = [dates, teams, location, times];
  
  CreateTable(data, container, ['DATE', 'TEAMS', 'LOCATION', 'TIMES']);
}

function CreateLocationTables() {
  let container = document.getElementById('game-locations');

  let e = null;
  let count = locationsData.locations.length;
  
  let names = [];
  let addresses = [];
  let maps = [];
  for (let i = 0; i < count; i++) {
    e = locationsData.locations[i];
    
    names.push(CreateElement('td', null, e.name));
    addresses.push(CreateElement('td', null, e.address));
    maps.push(CreatePicture(locationsData.locations[i].map_url));
  }
  
  let data = [names, addresses, maps];
  
  CreateTable(data, container, null, locationsData.caption);
}