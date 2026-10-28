const V='rma-v18',FILES=['./','index.html','styles.css','app.js','manifest.json','icon-192.png','icon-512.png','content.js','fig.js','std.js','extra.js','m01.js','m02.js','m03.js','m04.js','m05.js','m06.js','m07.js','m08.js','m09.js','m10.js','m11.js','m12.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp));return res}).catch(()=>caches.match('index.html'))))});
