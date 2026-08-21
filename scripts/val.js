const cheerio = require('cheerio');

const TEAM = 'Graham Bears';
const SOURCES = {
  bb8: { label: '8th Boys Basketball', url: 'https://valleyal.org/schedule/731081/8th-grade' },
  bb7: { label: '7th Boys Basketball', url: 'https://valleyal.org/schedule/731082/7th-grade' },
  bb6: { label: '6th Boys Basketball', url: 'https://valleyal.org/schedule/731083/6th-grade' },
  softball: { label: 'Girls Softball', url: 'https://valleyal.org/schedule/722499/6th7th8th-grade' },
  xc: { label: 'Cross Country', url: 'https://valleyal.org/schedule/722106/6th-7th-8th', allMeetRows: true },
  gv8: { label: '8th Girls Volleyball', url: 'https://valleyal.org/schedule/731089/8th-grade' },
  gv7: { label: '7th Girls Volleyball', url: 'https://valleyal.org/schedule/731090/7th-grade' },
  gv6: { label: '6th Girls Volleyball', url: 'https://valleyal.org/schedule/731091/6th-grade' },
  wrestling: { label: 'Wrestling', url: 'https://valleyal.org/schedule/731088/6th-7th-8th' },
  bv8: { label: '8th Boys Volleyball', url: 'https://valleyal.org/schedule/731404/8th-grade' },
  bv7: { label: '7th Boys Volleyball', url: 'https://valleyal.org/schedule/731405/7th-grade' },
  bv6: { label: '6th Boys Volleyball', url: 'https://valleyal.org/schedule/731406/6th-grade' },
  gs78: { label: '7th/8th Girls Soccer', url: 'https://valleyal.org/schedule/731407/7th8th-grade' },
  gs67: { label: '6th/7th Girls Soccer', url: 'https://valleyal.org/schedule/731408/6th7th-grade' },
  bs78: { label: '7th/8th Boys Soccer', url: 'https://valleyal.org/schedule/731409/7th8th-grade' },
  bs67: { label: '6th/7th Boys Soccer', url: 'https://valleyal.org/schedule/731410/6th7th-grade' },
  gb8: { label: '8th Girls Basketball', url: 'https://valleyal.org/schedule/731411/8th-grade' },
  gb7: { label: '7th Girls Basketball', url: 'https://valleyal.org/schedule/731412/7th-grade' },
  gb6: { label: '6th Girls Basketball', url: 'https://valleyal.org/schedule/731413/6th-grade' },
  track: { label: 'Track & Field', url: 'https://valleyal.org/schedule/732606/6th-7th-8th' }
};
function clean(s){return String(s||'').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim()}
function isGraham(name){return /^Graham Bear(?:s)?$/i.test(clean(name))}
function splitTeamScore(text){const t=clean(text),m=t.match(/^(.*\S)\s+(\d+)$/);return m?{team:clean(m[1]),score:Number(m[2])}:{team:t,score:null}}
function parseDateTime(dateText,timeText){
  const dm=clean(dateText).match(/(\d{1,2})\/(\d{1,2})/); if(!dm)return null;
  const month=Number(dm[1]),day=Number(dm[2]),year=month>=7?2026:2027;
  const tm=clean(timeText).match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i); let hour=tm?Number(tm[1]):12,minute=tm?Number(tm[2]):0;
  if(tm&&tm[3].toUpperCase()==='PM'&&hour!==12)hour+=12; if(tm&&tm[3].toUpperCase()==='AM'&&hour===12)hour=0;
  const pad=n=>String(n).padStart(2,'0'); return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00`;
}
function tableRows($,table){return $(table).find('tr').map((_,tr)=>({cells:$(tr).find('th,td').map((__,td)=>clean($(td).text())).get(),tr})).get().filter(r=>r.cells.length)}
function parseStandings($){
  let standings=[];
  $('table').each((_,table)=>{
    if(standings.length)return; const rows=tableRows($,table);
    const hi=rows.findIndex(r=>r.cells.includes('Team')&&r.cells.includes('W')&&r.cells.includes('L')&&r.cells.some(x=>x==='PCT')); if(hi<0)return;
    const h=rows[hi].cells,idx=n=>h.indexOf(n);
    standings=rows.slice(hi+1).map(r=>{const c=r.cells,team=c[idx('Team')]; if(!team)return null; return {place:c[idx('Place')]||'',team,w:Number(c[idx('W')])||0,l:Number(c[idx('L')])||0,t:idx('T')>=0?Number(c[idx('T')])||0:0,pct:idx('PCT')>=0?c[idx('PCT')]:'',streak:idx('Streak')>=0?c[idx('Streak')]:''}}).filter(Boolean);
  }); return standings;
}
function parseGames($,source={}){
  const games=[];
  $('table').each((_,table)=>{
    const rows=tableRows($,table),hi=rows.findIndex(r=>r.cells.includes('Date')&&r.cells.includes('Time')&&r.cells.includes('Home')&&r.cells.includes('Away')&&r.cells.includes('Location')); if(hi<0)return;
    const h=rows[hi].cells,di=h.indexOf('Date'),ti=h.indexOf('Time'),homei=h.indexOf('Home'),awayi=h.indexOf('Away'),li=h.indexOf('Location');
    rows.slice(hi+1).forEach(({cells})=>{
      if(cells.length<=Math.max(di,ti,homei,awayi,li))return; const home=splitTeamScore(cells[homei]),away=splitTeamScore(cells[awayi]),isXC=!!source.allMeetRows;
      if(!isXC&&!isGraham(home.team)&&!isGraham(away.team))return; const date=parseDateTime(cells[di],cells[ti]); if(!date)return;
      const homeSide=isGraham(home.team); games.push({date,home:isXC?false:homeSide,opp:isXC?`VAL Cross Country Meet · ${home.team} / ${away.team}`:(homeSide?away.team:home.team),us:isXC?null:(homeSide?home.score:away.score),them:isXC?null:(homeSide?away.score:home.score),status:isXC?'scheduled':(home.score!==null&&away.score!==null?'final':'scheduled')});
    });
  });
  const seen=new Set(); return games.filter(g=>{const k=`${g.date}|${g.home}|${g.opp}`;if(seen.has(k))return false;seen.add(k);return true}).sort((a,b)=>a.date.localeCompare(b.date));
}
async function getTeamData(key){
  const source=SOURCES[key]; if(!source)throw new Error(`Unknown team: ${key}`);
  const response=await fetch(source.url,{headers:{'user-agent':'Mozilla/5.0 GrahamGameDay-GitHubSync/1.0'}}); if(!response.ok)throw new Error(`VAL returned ${response.status}`);
  const $=cheerio.load(await response.text()); const games=parseGames($,source),standings=parseStandings($);
  return {id:key,label:source.label,team:TEAM,sourceUrl:source.url,fetchedAt:new Date().toISOString(),games,standings};
}
module.exports={SOURCES,getTeamData};
