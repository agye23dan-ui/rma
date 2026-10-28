// Content check: node check.js
const fs=require('fs'),vm=require('vm');
const ctx={window:{}};ctx.window=ctx;vm.createContext(ctx);
['content.js','fig.js','std.js',...fs.readdirSync('.').filter(f=>/^m\d+\.js$/.test(f)).sort()].forEach(f=>vm.runInContext(fs.readFileSync(f,'utf8').replace(/^const (\w+)=/gm,'var $1='),ctx,{filename:f}));
const M=ctx.M,ENH=ctx.ENH;let bad=0;const err=m=>{bad++;console.log('ERR',m)};
Object.keys(ENH).forEach(i=>{const m=Object.assign({},M[i],ENH[i]);const pos=[0,0,0,0];
 if(!ENH[i].q){return}
 m.q.forEach((q,x)=>{const id='module '+(+i+1)+' q'+(x+1);
  if(typeof q[0]!=='string'||!q[0])err(id+' text');
  if(!Array.isArray(q[1])||q[1].length<3||q[1].length>5)err(id+' option count');
  if(new Set(q[1]).size!==q[1].length)err(id+' duplicate options');
  if(!(q[2]>=0&&q[2]<q[1].length))err(id+' answer index');
  if(!q[3]||q[3].length<20)err(id+' explanation missing');
  pos[q[2]]++});
 const qs=new Set(m.q.map(q=>q[0]));if(qs.size!==m.q.length)err('module '+(+i+1)+' duplicate questions');
 console.log('module '+(+i+1)+': '+m.q.length+' questions, notes '+m.n.length+', sections '+m.d.length+', answer positions '+pos.join('/'))});
console.log(bad?bad+' problems':'content ok');process.exit(bad?1:0)
