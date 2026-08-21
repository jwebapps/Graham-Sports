const fs=require('fs');
const path=require('path');
const {SOURCES,getTeamData}=require('./val');
const outDir=path.join(__dirname,'..','results');
fs.mkdirSync(outDir,{recursive:true});
(async()=>{
  let failures=0;
  for(const [id,source] of Object.entries(SOURCES)){
    try{
      const full=await getTeamData(id);
      const results=(full.games||[]).filter(g=>g.status==='final').map(g=>({date:g.date,opp:g.opp,us:g.us,them:g.them,status:g.status}));
      const body={id:full.id,label:full.label,fetchedAt:full.fetchedAt,sourceUrl:source.url,results,standings:full.standings||[]};
      const fp=path.join(outDir,`${id}.json`);
      let shouldWrite=true;
      if(fs.existsSync(fp)){
        try{
          const old=JSON.parse(fs.readFileSync(fp,'utf8'));
          const oldComparable=JSON.stringify({results:old.results||[],standings:old.standings||[]});
          const newComparable=JSON.stringify({results:body.results||[],standings:body.standings||[]});
          shouldWrite=old.fetchedAt==null || oldComparable!==newComparable;
        }catch(e){}
      }
      if(shouldWrite){
        fs.writeFileSync(fp,JSON.stringify(body,null,2)+'\n');
        console.log(`Updated ${id}: ${results.length} finals, ${body.standings.length} standings rows`);
      }else{
        console.log(`No changes for ${id}`);
      }
    }catch(err){
      failures++;
      console.error(`Failed ${id}: ${err.message}`);
      const fp=path.join(outDir,`${id}.json`);
      if(!fs.existsSync(fp))fs.writeFileSync(fp,JSON.stringify({id,label:source.label,fetchedAt:null,sourceUrl:source.url,results:[],standings:[],error:'No successful sync yet'},null,2)+'\n');
    }
  }
  if(failures===Object.keys(SOURCES).length) process.exitCode=1;
})();
