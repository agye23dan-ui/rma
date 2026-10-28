// App logic: navigation, quizzes, exam, progress, standards, service worker
const app=document.getElementById('app'),tl=document.getElementById('tl'),te=document.getElementById('te'),tp=document.getElementById('tp'),tg=document.getElementById('tg');
if(window.ENH)Object.keys(ENH).forEach(i=>{if(M[i])Object.assign(M[i],ENH[i])});
const live=document.createElement('div');live.id='live';live.className='sr';live.setAttribute('role','status');live.setAttribute('aria-live','polite');document.body.appendChild(live);
app.setAttribute('tabindex','-1');
const PASS=70,EXAM_N=50,EXAM_SECS=3600,PER_MOD=4;
const IC=["\u{1F9BA}","\u{1F9F0}","\u{1F50D}","\u{1F50B}","\u{1F69B}","⛓️","\u{1F3DE}️","\u{1F6A7}","\u{1F3D7}️","\u{1F6A6}","\u{1F4CB}","\u{1F4BC}"];
let sc={};try{sc=JSON.parse(localStorage.getItem('rma')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('rma',JSON.stringify(sc))}catch(e){}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuf=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
const nm=t=>t.replace(/^\d+\.\s*/,'');
const say=t=>{live.textContent='';setTimeout(()=>{live.textContent=t},60)};
const tabs=[tl,tp,tg,te];
const tab=b=>tabs.forEach(x=>{x.className=x===b?'on':'';if(x===b)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});
function view(html,title){app.innerHTML=html;document.title=(title?title+' - ':'')+'Recovery Mechanic Academy';window.scrollTo(0,0);app.focus({preventScroll:true})}
const setFs=()=>document.documentElement.style.setProperty('--fs',Math.round(17*(sc.fs||1))+'px');setFs();
const ring=(p,z=44)=>{const r=18,c=2*Math.PI*r;return `<svg class="ring" width="${z}" height="${z}" viewBox="0 0 44 44" role="img" aria-label="${p}%"><circle cx="22" cy="22" r="${r}" fill="none" stroke="var(--line)" stroke-width="5"/><circle cx="22" cy="22" r="${r}" fill="none" stroke="${p>=PASS?'var(--ok)':'var(--hz)'}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-p/100)}" transform="rotate(-90 22 22)"/><text x="22" y="26" text-anchor="middle">${p}</text></svg>`};
const allPassed=()=>M.every((m,i)=>sc[i]>=PASS);
const certReady=()=>allPassed()&&sc.exam>=PASS;
const note=(h,cls)=>`<div class="card ${cls||''}">${h}</div>`;
const rec=(k,p,extra)=>{sc.h=(sc.h||[]).concat([Object.assign({k:k,p:p,d:Date.now()},extra||{})]).slice(-40);save()};

function home(){tab(tl);
const ps=M.filter((m,i)=>sc[i]>=PASS).length,pct=Math.round(ps/M.length*100),nx=M.findIndex((m,i)=>!(sc[i]>=PASS));
view(`<div class="hero card"><div>${ring(pct,84)}</div><div><h2>${ps} of ${M.length} modules passed</h2><p class="mute">Exam best: ${sc.exam!=null?sc.exam+'%':'not taken'}. Pass mark ${PASS}%.</p>${nx>=0?`<button class="pri" id="cont">Continue: ${esc(nm(M[nx].t))}</button>`:certReady()?'<p><b>Course complete.</b></p>':'<p><b>All modules passed. Take the final exam.</b></p>'}</div></div>
<input id="ns" class="srch" type="search" placeholder="Search all notes and terms" aria-label="Search all notes and terms"><div id="nr" aria-live="polite"></div>`
+M.map((m,i)=>`<button class="mod" data-i="${i}"><span class="ico" aria-hidden="true">${IC[i]||'\u{1F4D8}'}</span><span class="mt"><b>${esc(nm(m.t))}</b><small>Module ${i+1} · ${m.q.length} questions${m.o?' · outcomes':''}</small></span>${ring(sc[i]||0)}</button>`).join('')+
`<div class="row"><button id="sd">Standards</button><button id="pa">Print all notes</button>${certReady()?'<button class="pri" id="cf">View certificate</button>':''}</div>
<div class="row"><span class="mute" id="fl">Text size</span><button id="fm" aria-label="Smaller text" aria-describedby="fl">A−</button><button id="fp" aria-label="Larger text" aria-describedby="fl">A+</button><button id="rs">Reset progress</button></div>`,'Modules');
app.querySelectorAll('.mod').forEach(b=>b.onclick=()=>open(+b.dataset.i));
const ct=document.getElementById('cont');if(ct)ct.onclick=()=>open(nx);
document.getElementById('sd').onclick=standards;document.getElementById('pa').onclick=allNotes;
const cf=document.getElementById('cf');if(cf)cf.onclick=cert;
document.getElementById('fm').onclick=()=>{sc.fs=Math.max(.9,(sc.fs||1)-.1);save();setFs()};
document.getElementById('fp').onclick=()=>{sc.fs=Math.min(1.5,(sc.fs||1)+.1);save();setFs()};
const rb=document.getElementById('rs');rb.onclick=()=>{if(rb.dataset.c){sc={};save();setFs();home()}else{rb.dataset.c=1;rb.textContent='Tap again to clear all scores and ticks'}};
const ns=document.getElementById('ns');ns.oninput=()=>search(ns.value.trim())}

function search(v){const out=document.getElementById('nr');out.innerHTML='';if(v.length<2)return;
const q=v.toLowerCase(),hits=[];
M.forEach((m,i)=>{const lines=(m.n||[]).concat((m.d||[]).flatMap(x=>[x[0]].concat(x[1])));lines.forEach(l=>{if(hits.length<20&&l.toLowerCase().includes(q))hits.push({i:i,t:l})})});
G.forEach(g=>{if(hits.length<20&&(g[0]+' '+g[1]).toLowerCase().includes(q))hits.push({g:1,t:g[0]+': '+g[1]})});
if(!hits.length){out.innerHTML='<p class="mute">No match. Try another word.</p>';return}
hits.forEach(h=>{const b=document.createElement('button');b.className='hit';const s=document.createElement('b');s.textContent=h.g?'Glossary':'Module '+(h.i+1)+': '+nm(M[h.i].t);const t=document.createElement('span');t.textContent=h.t;b.append(s,t);b.onclick=h.g?gloss:()=>open(h.i);out.appendChild(b)})}

function open(i){const m=M[i];
const best=sc[i]!=null?`<p class="mute">Best score: ${sc[i]}%. Pass mark ${PASS}%.</p>`:'';
view(`<div class="row"><button id="bk">Back to modules</button><button id="pn">Print notes</button></div><div class="mh"><span class="ico" aria-hidden="true">${IC[i]||''}</span><h2>${esc(nm(m.t))}</h2>${ring(sc[i]||0)}</div>
${m.o?`<div class="card out"><h3>By the end of this module you can</h3><ul>${m.o.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}
${m.s||''}<div class="card"><ul>${m.n.map(x=>`<li>${x}</li>`).join('')}</ul></div>${(m.d||[]).map(x=>`<h3 class="sec">${x[0]}</h3><div class="card"><ul>${x[1].map(y=>`<li>${y}</li>`).join('')}</ul></div>`).join('')}
${m.r?`<p class="mute ref">Aligned to: ${m.r.map(esc).join('; ')}.</p>`:''}${best}<div id="qz"><button class="pri" id="st">Take module test (${m.q.length} questions)</button></div>`,nm(m.t));
document.getElementById('bk').onclick=home;document.getElementById('pn').onclick=()=>window.print();
document.getElementById('st').onclick=()=>quiz(document.getElementById('qz'),m.q,{retry:()=>open(i),done:(p)=>{sc[i]=Math.max(sc[i]||0,p);rec(i,p)}})}

// qs: [question, options, correct index, explanation?, module index?]
function quiz(el,qs,o){o=o||{};let k=0,r=0,log=[],over=false;const n=qs.length;
function finish(early){if(over)return;over=true;const p=Math.round(r/n*100);o.done&&o.done(p,log);
const mods={};qs.forEach((q,x)=>{if(q[4]!=null){const e=mods[q[4]]=mods[q[4]]||[0,0];e[1]++;if(log[x]&&log[x].ok)e[0]++}});
const wrong=log.filter(l=>!l.ok),un=n-log.length;
let h=`<div class="card ${p>=PASS?'':'warn'}"><h3>${early?'Time is up. ':''}${p>=PASS?'Passed':'Not yet'}: ${p}%</h3><p>${r} of ${n} correct${un?`, ${un} not answered`:''}. ${p>=PASS?'Good work.':'Review the notes and try again.'}</p></div>`;
const mk=Object.keys(mods);
if(mk.length){h+='<h3 class="sec">Results by module</h3><div class="card"><ul class="plain">'+mk.map(x=>{const e=mods[x],pc=Math.round(e[0]/e[1]*100);return `<li><button class="lk" data-m="${x}">${esc(nm(M[x].t))}</button> <b class="${pc>=PASS?'okc':'badc'}">${e[0]}/${e[1]}</b></li>`}).join('')+'</ul></div>'}
if(wrong.length)h+='<h3 class="sec">Review these</h3>'+wrong.map(l=>`<div class="card warn"><b>${esc(l.q)}</b><br>Your answer: ${esc(l.you)}<br>Correct answer: <b>${esc(l.ans)}</b>${l.e?`<p class="mute">${esc(l.e)}</p>`:''}</div>`).join('');
h+=`<div class="row">${o.retry?'<button class="pri" id="rt">Try again</button>':''}<button id="hm">Back to modules</button></div>`;
el.innerHTML=h;say((p>=PASS?'Passed. ':'Not yet. ')+p+' percent.');
el.querySelectorAll('.lk').forEach(b=>b.onclick=()=>open(+b.dataset.m));
const rt=document.getElementById('rt');if(rt)rt.onclick=o.retry;document.getElementById('hm').onclick=home;
el.scrollIntoView();}
o.stop&&o.stop(()=>finish(true));
(function show(){if(over)return;if(k>=n){finish(false);return}
const q=qs[k],order=shuf(q[1].map((_,j)=>j));
el.innerHTML=`<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${k}"><i style="width:${Math.round(k/n*100)}%"></i></div><div class="card"><p class="mute">Question ${k+1} of ${n}</p><h3 id="qh" tabindex="-1">${q[0]}</h3></div><div role="group" aria-labelledby="qh">`+order.map(j=>`<button class="o" data-j="${j}">${q[1][j]}</button>`).join('')+'</div><div id="fb"></div>';
document.getElementById('qh').focus({preventScroll:true});
el.querySelectorAll('.o').forEach(b=>b.onclick=()=>{if(over)return;const j=+b.dataset.j,ok=j===q[2];if(ok)r++;
log[k]={q:q[0],you:q[1][j],ans:q[1][q[2]],ok:ok,e:q[3]};
el.querySelectorAll('.o').forEach(x=>{x.disabled=true;const y=+x.dataset.j;if(y===q[2])x.classList.add('good');else if(y===j)x.classList.add('bad')});
const fb=document.getElementById('fb');fb.innerHTML=`<div class="card ${ok?'':'warn'}" role="status"><b>${ok?'Correct.':'Not quite.'}</b>${q[3]?' '+q[3]:ok?'':' The correct answer is: '+q[1][q[2]]+'.'}</div>`;
const nx=document.createElement('button');nx.className='pri';nx.textContent=k+1<n?'Next question':'See result';nx.onclick=()=>{k++;show()};fb.appendChild(nx);nx.focus()})})()}

// Paper: at least PER_MOD questions from every module, rest random, EXAM_N in total.
function paper(){const pick=[],left=[];
M.forEach((m,i)=>{const s=shuf(m.q).map(q=>[q[0],q[1],q[2],q[3],i]);pick.push(...s.slice(0,PER_MOD));left.push(...s.slice(PER_MOD))});
return shuf(pick.concat(shuf(left).slice(0,Math.max(0,EXAM_N-pick.length)))).slice(0,EXAM_N)}
function exam(){tab(te);
const hist=(sc.h||[]).filter(x=>x.k==='exam').slice(-5).reverse();
const tot=M.reduce((a,m)=>a+m.q.length,0),n=Math.min(EXAM_N,tot);
view(`<h2 class="sec">Final exam</h2><div class="card"><ul><li>${n} questions, drawn from every module.</li><li>${EXAM_SECS/60} minutes. The exam ends and is marked when time runs out.</li><li>Pass mark ${PASS}%.</li><li>You see explanations for every answer you miss.</li></ul></div>
${hist.length?`<div class="card"><h3>Recent attempts</h3><ul class="plain">${hist.map(x=>`<li>${new Date(x.d).toLocaleDateString()}: <b class="${x.p>=PASS?'okc':'badc'}">${x.p}%</b></li>`).join('')}</ul></div>`:''}
<div id="ex"><button class="pri" id="go">Start exam</button></div>`,'Final exam');
document.getElementById('go').onclick=()=>{const ex=document.getElementById('ex');let t=EXAM_SECS,stop=null;
const c=document.createElement('p');c.className='mute timer';ex.before(c);
const iv=setInterval(()=>{if(!document.body.contains(c)){clearInterval(iv);return}
t--;c.textContent='Time left: '+Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
if(t===300||t===60)say(t/60+' minute'+(t>60?'s':'')+' left');
if(t<=0){clearInterval(iv);stop&&stop()}},1000);
c.textContent='Time left: '+EXAM_SECS/60+':00';
quiz(ex,paper(),{retry:exam,stop:f=>{stop=f},done:(p)=>{clearInterval(iv);sc.exam=Math.max(sc.exam||0,p);rec('exam',p)}})}}

function prac(){tab(tp);sc.p=sc.p||{};
const done=P.reduce((a,x,i)=>a+x[1].filter((s,j)=>sc.p[i+'-'+j]).length,0),tot=P.reduce((a,x)=>a+x[1].length,0);
let h=`<p class="mute">Tick each step as you practise it. Progress is saved. ${done} of ${tot} steps ticked. These checklists are for practice. A real competence sign-off needs a qualified assessor to watch you do the job.</p>`;
P.forEach((x,i)=>{h+=`<h2 class="sec">${x[0]}</h2><div class="card">`+x[1].map((s,j)=>`<label class="chk"><input type="checkbox" data-k="${i}-${j}" ${sc.p[i+'-'+j]?'checked':''}> <span>${s}</span></label>`).join('')+'</div>'});
view(h,'Practicals');app.querySelectorAll('input').forEach(c=>c.onchange=()=>{sc.p[c.dataset.k]=c.checked;save()})}

function gloss(){tab(tg);
view('<input id="gs" class="srch" type="search" placeholder="Search terms" aria-label="Search terms"><div id="gl"></div>','Glossary');
const S=G.slice().sort((a,b)=>a[0].localeCompare(b[0]));
const f=()=>{const v=document.getElementById('gs').value.toLowerCase();document.getElementById('gl').innerHTML=S.filter(g=>(g[0]+g[1]).toLowerCase().includes(v)).map(g=>`<div class="card"><b>${g[0]}</b><br>${g[1]}</div>`).join('')||'<p class="mute">No match. Try another word.</p>'};document.getElementById('gs').oninput=f;f()}

function standards(){tab(tl);
view(`<div class="row"><button id="bk">Back</button></div><h2 class="sec">Course standards</h2>${note('<p>'+esc(STD.note)+'</p>','warn')}
<h3 class="sec">Competency areas</h3>${STD.units.map(u=>`<div class="card"><b>${esc(u.n)}</b><p class="mute">Modules: ${u.m.map(x=>`<button class="lk" data-m="${x-1}">${x}</button>`).join(' ')}<br>Reference: ${esc(u.r)}</p></div>`).join('')}
<h3 class="sec">Sources</h3><div class="card"><ul>${STD.links.map(l=>`<li><a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a></li>`).join('')}</ul></div>`,'Standards');
document.getElementById('bk').onclick=home;app.querySelectorAll('.lk').forEach(b=>b.onclick=()=>open(+b.dataset.m))}

const hash=s=>{let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))>>>0;return h.toString(36).toUpperCase().padStart(7,'0')};
function cert(){tab(tl);if(!certReady()){home();return}
sc.cd=sc.cd||Date.now();save();
view(`<div id="cert" class="card"><h2>Certificate of Completion</h2><p>This certifies that</p><input id="nm" placeholder="Type your name" aria-label="Your name" value="${esc(sc.name||'')}"><p>has completed the Recovery Mechanic Academy self-study course, passed all ${M.length} module tests and passed the final exam with <b>${sc.exam}%</b>.</p><p class="mute">Issued ${new Date(sc.cd).toLocaleDateString()}<br>Certificate no. <span id="cid"></span></p><p class="mute small">This certificate records completion of a self-study course. It is not a government, NVTI or COTVET qualification.</p></div><div class="row"><button class="pri" id="pr">Print or save as PDF</button><button id="bk2">Back</button></div>`,'Certificate');
const id=()=>{document.getElementById('cid').textContent='RMA-'+hash((sc.name||'')+'|'+sc.exam+'|'+sc.cd)};id();
document.getElementById('nm').oninput=e=>{sc.name=e.target.value.slice(0,80);save();id()};
document.getElementById('pr').onclick=()=>window.print();document.getElementById('bk2').onclick=home}

function allNotes(){tab(tl);
view('<div class="row"><button id="bk3">Back</button><button class="pri" id="pa">Print all notes</button></div>'+M.map(m=>`<h2 class="sec">${m.t}</h2>${m.o?`<div class="card"><b>Outcomes</b><ul>${m.o.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}${m.s||''}<div class="card"><ul>${m.n.map(x=>`<li>${x}</li>`).join('')}</ul></div>${(m.d||[]).map(x=>`<h3>${x[0]}</h3><ul>${x[1].map(y=>`<li>${y}</li>`).join('')}</ul>`).join('')}`).join(''),'All notes');
document.getElementById('bk3').onclick=home;document.getElementById('pa').onclick=()=>window.print()}

tl.onclick=home;te.onclick=exam;tp.onclick=prac;tg.onclick=gloss;home();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
