window.GRAHAM_SCHEDULES = {
  bb8: {label:'8th Boys Basketball', sourceUrl:'https://valleyal.org/schedule/731081/8th-grade', games:[
    ['2026-09-01T16:00:00',true,'Cupertino Bears','Graham Gym'],
    ['2026-09-03T16:00:00',true,'Hyde Lions','Graham Gym'],
    ['2026-09-09T16:00:00',false,'Miller Mustangs','Miller Gym'],
    ['2026-09-10T16:00:00',true,'Lawson Lightning','Graham Gym'],
    ['2026-09-15T16:00:00',true,'Columbia Bulldogs','Graham Gym'],
    ['2026-09-17T16:00:00',false,'Egan Vikings','Egan Gym'],
    ['2026-09-22T16:00:00',false,'Kennedy Cougars','Kennedy Gym'],
    ['2026-09-24T16:00:00',false,'Sunnyvale Spartans','Sunnyvale Gym'],
    ['2026-09-29T16:00:00',true,'Blach Falcons','Graham Gym'],
    ['2026-10-01T16:00:00',false,'Crittenden Panthers','Crittenden Gym']
  ]},
  bb7: {label:'7th Boys Basketball', sourceUrl:'https://valleyal.org/schedule/731082/7th-grade', games:[
    ['2026-09-01T17:00:00',false,'Cupertino Bears','CMS Event Cent.'],
    ['2026-09-03T16:00:00',false,'Hyde Lions','Hyde Gym'],
    ['2026-09-09T17:00:00',true,'Miller Mustangs','Graham Gym'],
    ['2026-09-10T16:00:00',false,'Lawson Lightning','Lawson Gym'],
    ['2026-09-15T17:00:00',false,'Columbia Bulldogs','Columbia Gym'],
    ['2026-09-17T16:00:00',true,'Egan Vikings','Graham Gym'],
    ['2026-09-22T16:00:00',true,'Kennedy Cougars','Graham Gym'],
    ['2026-09-24T17:00:00',true,'Sunnyvale Spartans','Graham Gym'],
    ['2026-09-29T16:00:00',false,'Blach Falcons','Blach Gym'],
    ['2026-10-01T16:00:00',true,'Crittenden Panthers','Graham Gym']
  ]},
  bb6: {label:'6th Boys Basketball', sourceUrl:'https://valleyal.org/schedule/731083/6th-grade', games:[
    ['2026-09-01T16:00:00',false,'Cupertino Bears','CMS Event Cent.'],
    ['2026-09-03T17:00:00',true,'Hyde Lions','Graham Gym'],
    ['2026-09-09T16:00:00',true,'Miller Mustangs','Graham Gym'],
    ['2026-09-10T17:00:00',true,'Lawson Lightning','Graham Gym'],
    ['2026-09-15T16:00:00',false,'Columbia Bulldogs','Columbia Gym'],
    ['2026-09-22T17:00:00',false,'Kennedy Cougars','Kennedy Gym'],
    ['2026-09-24T16:00:00',true,'Sunnyvale Spartans','Graham Gym'],
    ['2026-10-01T17:00:00',false,'Crittenden Panthers','Crittenden Gym']
  ]},
  softball: {label:'Girls Softball', sourceUrl:'https://valleyal.org/schedule/722499/6th7th8th-grade', games:[
    ['2026-09-01T16:00:00',true,'Cupertino Bears','Graham Field'],
    ['2026-09-03T16:00:00',true,'Hyde Lions','Graham Field'],
    ['2026-09-09T16:00:00',false,'Miller Mustangs','Miller Field'],
    ['2026-09-10T16:00:00',true,'Redwood Griffins','Graham Field'],
    ['2026-09-15T16:00:00',true,'Columbia Bulldogs','Graham Field'],
    ['2026-09-17T16:00:00',false,'Egan Vikings','Egan Field'],
    ['2026-09-22T16:00:00',false,'Kennedy Cougars','Kennedy Field'],
    ['2026-09-24T16:00:00',false,'Sunnyvale Spartans','Sunnyvale Field'],
    ['2026-09-29T16:00:00',true,'Blach Falcons','Graham Field'],
    ['2026-10-01T16:00:00',false,'Crittenden Panthers','Critt.. Field']
  ]},
  xc: {label:'Cross Country', sourceUrl:'https://valleyal.org/schedule/722106/6th-7th-8th', detailsUrl:'https://docs.google.com/document/d/1yy3pz2CSLJ7uFr58YyOsiyQZhwhbEnFc-or73bLtZkI/edit?tab=t.0', games:[
    ['2026-09-09T16:00:00',false,'VAL Meet','Hyde Field'],
    ['2026-09-16T16:00:00',false,'VAL Meet','Sunnyvale Field'],
    ['2026-09-23T16:00:00',false,'VAL Meet','Cupertino Field'],
    ['2026-09-30T16:00:00',false,'VAL Meet','Kennedy Field'],
    ['2026-10-07T16:00:00',false,'League Finals','Miller Field']
  ]},
  gv8:{label:'8th Girls Volleyball',games:[]}, gv7:{label:'7th Girls Volleyball',games:[]}, gv6:{label:'6th Girls Volleyball',games:[]},
  wrestling:{label:'Wrestling',games:[]}, bv8:{label:'8th Boys Volleyball',games:[]}, bv7:{label:'7th Boys Volleyball',games:[]}, bv6:{label:'6th Boys Volleyball',games:[]},
  gs78:{label:'7th/8th Girls Soccer',games:[]}, gs67:{label:'6th/7th Girls Soccer',games:[]}, gb8:{label:'8th Girls Basketball',games:[]}, gb7:{label:'7th Girls Basketball',games:[]}, gb6:{label:'6th Girls Basketball',games:[]},
  bs78:{label:'7th/8th Boys Soccer',games:[]}, bs67:{label:'6th/7th Boys Soccer',games:[]}, track:{label:'Track & Field',games:[]}
};

// Canonical game-location addresses from the Valley Athletic League Locations directory.
// Field/meet labels at a school use that school's VAL-listed campus address.
window.VAL_LOCATIONS = {
  'Blach': {name:'Blach Intermediate School', address:'1120 Covington Road, Los Altos, CA 94024'},
  'Collins': {name:'Collins Elementary School (Lawson Softball Field)', address:'10300 N Blaney Ave, Cupertino, CA 95014'},
  'Columbia': {name:'Columbia Middle School', address:'739 Morse Avenue, Sunnyvale, CA 94085'},
  'Crittenden': {name:'Crittenden Middle School', address:'1701 Rock St, Mountain View, CA 94043'},
  'Cupertino': {name:'Cupertino Middle School', address:'1650 S Bernardo, Sunnyvale, CA 94087'},
  'CMS': {name:'Cupertino Middle School', address:'1650 S Bernardo, Sunnyvale, CA 94087'},
  'Egan': {name:'Egan Junior High School', address:'100 West Portola Avenue, Los Altos, CA 94022'},
  'Fair Oaks': {name:'Fair Oaks Park', address:'540 N Fair Oaks Ave, Sunnyvale, CA 94085'},
  'Fremont': {name:'Fremont High School', address:'575 W Fremont Ave, Sunnyvale, CA 94087'},
  'Graham': {name:'Graham Middle School', address:'1175 Castro Street, Mountain View, CA 94040'},
  'Hyde': {name:'Hyde Middle School', address:'19325 Bollinger Road, Cupertino, CA 95014'},
  'Kennedy': {name:'Kennedy Middle School', address:'821 Bubb Road, Cupertino, CA 95014'},
  'Lawson': {name:'Lawson Middle School', address:'10401 Vista Drive, Cupertino, CA 95014'},
  'Miller': {name:'Miller Middle School', address:'6151 Rainbow Drive, San Jose, CA 95129'},
  'Redwood': {name:'Saratoga High School (Redwood Softball)', address:'20300 Herriman Ave, Saratoga, CA 95070'},
  'Saratoga': {name:'Saratoga High School', address:'20300 Herriman Ave, Saratoga, CA 95070'},
  'Sunnyvale': {name:'Sunnyvale Middle School', address:'1080 Mango Avenue, Sunnyvale, CA 94087'}
};

function valLocationForVenue(venue) {
  const v = String(venue || '').trim();
  // Explicit aliases first.
  if (/^CMS\b/i.test(v)) return window.VAL_LOCATIONS.CMS;
  if (/^Critt/i.test(v)) return window.VAL_LOCATIONS.Crittenden;
  if (/Lawson Softball|Collins/i.test(v)) return window.VAL_LOCATIONS.Collins;
  if (/Redwood|Saratoga/i.test(v)) return window.VAL_LOCATIONS.Redwood;
  // School/campus names used by the schedule (Gym, Field, Track, etc.).
  for (const key of ['Blach','Columbia','Cupertino','Egan','Fair Oaks','Fremont','Graham','Hyde','Kennedy','Lawson','Miller','Sunnyvale']) {
    if (v.toLowerCase().includes(key.toLowerCase())) return window.VAL_LOCATIONS[key];
  }
  return null;
}

for (const [id, team] of Object.entries(window.GRAHAM_SCHEDULES)) {
  team.id = id;
  team.team = 'Graham Bears';
  team.games = (team.games || []).map(([date,home,opp,venue]) => {
    const loc = valLocationForVenue(venue);
    return {
      date, home, opp, venue,
      venueName: loc?.name || venue,
      venueAddress: loc?.address || '',
      venueUrl: loc?.address ? 'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(loc.address)+'&travelmode=driving' : '',
      locationSourceUrl:'https://www.valleyal.org/locations',
      us:null, them:null, status:'scheduled', eventType:id==='xc'?'meet':'game'
    };
  });
}
