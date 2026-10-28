# Regenerates the script list in index.html and the precache list in sw.js from the files present.
import re,glob,sys
mods=sorted(glob.glob('m[0-9][0-9].js'))
files=['content.js','fig.js','std.js','extra.js']+mods
html=open('index.html',encoding='utf-8',newline='').read()
tags=''.join('<script src="%s"></script>\n'%f for f in files)
html=re.sub(r'(<script src="[^"]+"></script>\s*)+(?=<script src="app.js">)',tags,html)
open('index.html','w',encoding='utf-8',newline='').write(html)
sw=open('sw.js',encoding='utf-8',newline='').read()
base=['./','index.html','styles.css','app.js','manifest.json','icon-192.png','icon-512.png']
lst=base+files
sw=re.sub(r"FILES=\[[^\]]*\]","FILES=["+",".join("'%s'"%f for f in lst)+"]",sw)
v=int(re.search(r"rma-v(\d+)",sw).group(1))+(1 if '--bump' in sys.argv else 0)
sw=re.sub(r"rma-v\d+","rma-v%d"%v,sw)
open('sw.js','w',encoding='utf-8',newline='').write(sw)
print('wired',files,'v%d'%v)
