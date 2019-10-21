const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

var eventsData = {
  "events": [
    {
      day: "04",
      month: "08",
      year: "2019",
      name: "NYSL Fundraiser."
    },
    {
      day: "16",
      month: "08",
      year: "2019",
      name: "Season Kick-off: Meet the Teams."
    },
    {
      day: "01",
      month: "09",
      year: "2019",
      name: "First Game of the Season."
    }
  ]
}

var schedulesData = {
  "games": [
    {
      "day": "09",
      "month": "01",
      "year": "2019",
      "teams": "U1 and U4",
      "location": "AJ Katzenmaier",
      "time": "09:30"
    },
    {
      "day": "09",
      "month": "01",
      "year": "2019",
      "teams": "U3 and U2",
      "location": "Greenbay",
      "time": "13:00"
    },
    {
      "day": "08",
      "month": "09",
      "year": "2019",
      "teams": "U5 and U6",
      "location": "Howard A Yeager",
      "time": "09:30"
    },
    {
      "day": "08",
      "month": "09",
      "year": "2019",
      "teams": "U6 and U1",
      "location": "Marjorie P Hart",
      "time": "13:00"
    },
    {
      "day": "15",
      "month": "09",
      "year": "2019",
      "teams": "U2 and U4",
      "location": "North",
      "time": "09:30"
    },
    {
      "day": "15",
      "month": "09",
      "year": "2019",
      "teams": "U3 and U5",
      "location": "AJ Katzenmaier",
      "time": "13:00"
    },
    {
      "day": "22",
      "month": "09",
      "year": "2019",
      "teams": "U1 and U3",
      "location": "South",
      "time": "09:30"
    },
    {
      "day": "22",
      "month": "09",
      "year": "2019",
      "teams": "U2 and U6",
      "location": "Howard A Yeager",
      "time": "13:00"
    },
    {
      "day": "29",
      "month": "09",
      "year": "2019",
      "teams": "U4 and U5",
      "location": "Greenbay",
      "time": "09:30"
    },
    {
      "day": "06",
      "month": "10",
      "year": "2019",
      "teams": "U2 and U5",
      "location": "Marjorie P Hart",
      "time": "09:30"
    },
    {
      "day": "06",
      "month": "10",
      "year": "2019",
      "teams": "U1 and U6",
      "location": "South",
      "time": "13:00"
    },
    {
      "day": "13",
      "month": "10",
      "year": "2019",
      "teams": "U3 and U4",
      "location": "Howard A Yeager",
      "time": "09:30"
    },
    {
      "day": "13",
      "month": "10",
      "year": "2019",
      "teams": "U5 and U1",
      "location": "Greenbay",
      "time": "13:00"
    },
    {
      "day": "20",
      "month": "10",
      "year": "2019",
      "teams": "U6 and U3",
      "location": "North",
      "time": "09:30"
    },
    {
      "day": "20",
      "month": "10",
      "year": "2019",
      "teams": "U2 and U4",
      "location": "Marjorie P Hart",
      "time": "13:00"
    },
    {
      "day": "27",
      "month": "10",
      "year": "2019",
      "teams": "U3 and U1",
      "location": "AJ Katzenmaier",
      "time": "09:30"
    },
    {
      "day": "27",
      "month": "10",
      "year": "2019",
      "teams": "U5 and U6",
      "location": "Howard A Yeager",
      "time": "13:00"
    }
  ]
}

var locationsData = {
  "caption": "GAME LOCATIONS",
  "locations": [
    {
      "name": "AJ Katzenmaier Elementary",
      "address": "24 W. Walton St., Chicago, IL 60610",
      "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261627!2d-87.63123908505526!3d41.900296372004725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1553123964056"
    },
    {
      "name": "Greenbay Elementary",
      "address": "1734 N. Orleans St., Chicago, IL 60614",
      "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1553123984445"
    },
    {
      "name": "Howard A Yeager Elementary",
      "address": "2245 N. Southport Ave., Chicago, IL 60614",
      "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1553124006137"
    },
    {
      "name": "Marjorie P Hart Elementary",
      "address": "2625 N. Orchard St., Chicago, IL 60614",
      "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291728953083!2d-87.64808628505428!3d41.92958227017081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1553123902148"
    },
    {
      "name": "North Elementary",
      "address": "1409 N. Ogden Ave., Chicago, IL 60610",
      "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3364882315855!2d-87.64835588455797!3d41.9071246792199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af13a8945%3A0xb6ad1ec2b6f379ba!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1553123822603"
    },
    {
      "name": "South Elementary",
      "address": "2101 N. Fremont St., Chicago, IL 60614",
      "map_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7477648265644!2d-87.65355538505459!3d41.91978077078475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1553123866723"
    }
  ]
}
