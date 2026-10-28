// Module 6 enhanced: winching and rigging.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const layers='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t6a"><title id="t6a">Example of how winch pull falls as more layers of rope build up on the drum</title><line x1="30" y1="116" x2="290" y2="116" class="f-line"/><line x1="30" y1="20" x2="30" y2="116" class="f-line"/>'+
[['1',100],['2',86],['3',74],['4',65]].map((b,i)=>{const h=b[1]*0.78,x=52+i*58;return '<rect x="'+x+'" y="'+(116-h)+'" width="38" height="'+h+'" class="f-hz"/><text x="'+(x+19)+'" y="'+(110-h)+'" text-anchor="middle" style="font-weight:700">'+b[1]+'%</text><text x="'+(x+19)+'" y="132" text-anchor="middle" style="font-size:12px">layer '+b[0]+'</text>'}).join('')+
'<text x="150" y="12" text-anchor="middle" style="font-weight:700">Rated pull falls on every layer</text><text x="150" y="146" text-anchor="middle" style="font-size:11px">Example values only. Use the maker\'s table for your winch.</text></svg>';
const angles='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t6b"><title id="t6b">Load on a snatch block anchor for different angles between the two rope lines</title><line x1="30" y1="112" x2="290" y2="112" class="f-line"/><line x1="30" y1="20" x2="30" y2="112" class="f-line"/>'+
[['0°',2.0],['60°',1.73],['90°',1.41],['120°',1.0]].map((b,i)=>{const h=b[1]*40,x=50+i*60;return '<rect x="'+x+'" y="'+(112-h)+'" width="40" height="'+h+'" class="f-hz"/><text x="'+(x+20)+'" y="'+(106-h)+'" text-anchor="middle" style="font-weight:700">'+b[1].toFixed(2)+'x</text><text x="'+(x+20)+'" y="128" text-anchor="middle" style="font-size:12px">'+b[0]+'</text>'}).join('')+
'<text x="160" y="12" text-anchor="middle" style="font-weight:700">Anchor load for each pull</text><text x="160" y="144" text-anchor="middle" style="font-size:11px">angle between the two lines at the block</text></svg>';
const rig='<svg viewBox="0 0 300 170" role="img" aria-labelledby="t6c"><title id="t6c">Winch recovery layout seen from above with an anchor protected by a strap, a damper on the rope and a marked danger zone</title><rect x="4" y="52" width="94" height="52" rx="8" class="f-fill"/><text x="51" y="82" text-anchor="middle" style="font-size:12px">stuck vehicle</text><rect x="214" y="58" width="72" height="42" rx="6" class="f-hz"/><text x="250" y="83" text-anchor="middle" style="font-size:12px;font-weight:700;fill:#1B2430">winch truck</text><path d="M98,78 H214" class="f-red"/><rect x="144" y="68" width="20" height="20" rx="3" fill="#1B2430" opacity=".75"/><text x="154" y="62" text-anchor="middle" style="font-size:11px">damper</text><path d="M96,78 L96,78" class="f-line"/><rect x="100" y="112" width="106" height="44" rx="6" fill="#C93A0E" opacity=".13" stroke="#C93A0E" stroke-width="2" stroke-dasharray="5 4"/><text x="153" y="130" text-anchor="middle" style="font-size:12px;font-weight:700">Danger zone</text><text x="153" y="146" text-anchor="middle" style="font-size:11px">stay out of line of the rope</text><text x="150" y="26" text-anchor="middle" style="font-size:12px">Everyone stands to the side, clear and visible</text></svg>';
ENH[5]=Object.assign(ENH[5]||{},{
n:[
"Find a solid anchor: tree base, heavy vehicle or ground anchor. Protect trees with a wide strap.",
"Use shackles rated above the load. Fully seat the pin, and follow the maker's advice on easing it back a quarter turn so it does not seize.",
"Lay a heavy cloth or damper over the middle of the rope to reduce whip if it breaks.",
"A snatch block gives two lines and about double the pull. Winch strain halves.",
"Pull straight where possible. Angled pulls load parts unevenly. Keep everyone clear.",
"A winch's rated pull is on the bare drum. Each layer of rope on the drum lowers it. Keep at least five turns of rope on the drum.",
"If the vehicle will not move, stop. Re-rig with a snatch block or add a second anchor instead of forcing it."
],
g:[FIG(rig,'<b>Winch layout.</b> A damper on the rope, a protected anchor, and a clear danger zone along the line of pull.'),FIG(layers,'<b>Layers on the drum.</b> The first layer pulls hardest. As rope builds up, the pull drops. Figures here are illustrative.'),FIG(angles,'<b>Snatch block anchor load.</b> At 0 degrees the anchor takes twice the line pull. The wider the angle, the less it takes.')],
d:[
["Estimating the load",[
"On firm level ground a vehicle needs only a small fraction of its weight to move it. In deep mud, sand or on a slope the pull needed can rise to the full vehicle weight or more.",
"A common rule for off-road recovery is a winch rated at about 1.5 times the vehicle weight. Slopes and deep mud need more.",
"Estimate the load before you rig. Choose rope, shackles and anchor with a rating above it.",
"Every part of the system must be rated. The weakest part sets the limit."]],
["Choosing and sizing",[
"Steel wire rope resists abrasion but is heavy, can kink, and has sharp broken strands. Wear gloves.",
"Synthetic rope is light and safer if it snaps, but heat and abrasion damage it.",
"Use a rope long enough that the rope stays on the drum with at least five turns left.",
"Use hooks and rated recovery points. Do not hook onto bumper trim, tow balls or axles unless rated for it."]],
["Rigging and angles",[
"Pull straight where possible. Side pulls stack the rope on one side of the drum and can damage the winch.",
"Connect with shackles on rated points. Do not loop the rope back onto its own hook.",
"A snatch block gives two lines and about double the pull, but the anchor then takes more load than the line itself, up to double when the line turns back on itself.",
"Anchor trees with a wide, rated strap at the base, never a chain or the rope itself around the trunk.",
"Check the anchor is solid. A weak anchor can pull out and fly."]],
["Safe zone and whip",[
"Draw a danger zone along the line of pull and the sides of any pulley or rope turn. Keep everyone out of it.",
"Lay a heavy cloth, jacket or a purpose-made damper over the middle of the rope to reduce whip if it breaks.",
"Keep people out of the cabs and out of any vehicle in the line of pull. Only the driver of the vehicle being recovered stays inside, if needed.",
"Never stand in line, never straddle the rope and never step over it while it is loaded."]],
["Working the winch",[
"Agree hand signals. One person signals and everyone obeys a stop signal at once.",
"Pull steadily. Avoid shock loads. If the truck engine labours, stop and re-rig.",
"Never feed a loaded rope through your hands. Do not use the winch to tow over distance.",
"Re-spool neatly under light tension and inspect the rope afterwards.",
"Use the remote only from a safe place, and stop if the rope is not spooling evenly."]],
["After the job",[
"Inspect the rope, hook, shackles and anchor strap for damage. Tag out anything that has been shock loaded.",
"Clean mud and sand from the rope before re-spooling. Re-spool tight.",
"Record the job and any gear that was damaged or replaced."]]
],
q:[
["A snatch block does what?",["Doubles the pull and halves winch strain","Cuts the pull","Adds a hook","Replaces the winch"],0,"Two lines carry the load, so each takes about half and the winch sees half the strain."],
["Why drape a damper on the rope?",["To make it look neat","Reduces whip if the rope fails","To protect from rain","To shorten it"],1,"A damper absorbs energy and holds the rope down if it snaps."],
["Shackle pins should be:",["Fully seated, then eased back a quarter turn if the maker advises","Loose","Taped","Replaced by bolts"],0,"A fully seated pin is secure. Some makers advise easing it back slightly so it does not seize under load."],
["A common rule for off-road recovery is a winch rated at about:",["Half the vehicle weight","1.5 times vehicle weight","The same as a wheel","Ten times"],1,"1.5 times the vehicle weight gives margin for mud and slopes."],
["The vehicle will not move and the winch labours. You should:",["Pull harder","Stop and add a snatch block or second anchor","Reverse fast","Cut the rope"],1,"Forcing it overloads the system. Re-rig to reduce the load."],
["You find broken wires near the rope's hook. You should:",["Replace the rope before use","Use it carefully","Tape it","Shorten it and keep going"],0,"Broken wires mean the rope has lost strength. Replace it."],
["Winch pull is highest on:",["A full drum","A bare drum","A mid layer","It never changes"],1,"Each layer of rope increases the drum diameter and lowers the pull."],
["Minimum turns of rope to keep on the drum:",["One","Five","Fifty","None"],1,"The last turns carry the load through friction. Fewer than five can let the rope pull off."],
["Side pulls can:",["Stack rope on one side and damage the winch","Make it stronger","Cool the rope","Save time"],0,"The rope piles on one side of the drum and can jam or crush."],
["A steel wire rope hazard is:",["Sharp broken strands","Being too light","Floating","Burning"],0,"Broken wires cut skin. Wear gloves."],
["A synthetic rope advantage is:",["Light and safer if it snaps","Heavier","Unaffected by heat","Needs no care"],0,"Synthetic rope stores less energy and drops instead of whipping, but it is damaged by heat and abrasion."],
["Never use a winch for:",["Towing over a long distance","Recovery","Loading","Pulling out of mud"],0,"A winch is for short controlled pulls, not towing."],
["Anchor trees should be protected with:",["A wide strap","Bare wire rope","Chain","A hook"],0,"A wide strap spreads the load and does not cut the bark."],
["What happens to the load on a snatch block anchor when the two lines are parallel (0 degrees)?",["It is the same as the line pull","It is about double the line pull","It is half","It is zero"],1,"Two parallel lines each carry the full pull, so the anchor takes twice the line pull."],
["Where should people stand during a winch pull?",["Beside the rope, close","Clear of the line and the danger zone, where they can be seen","Behind the vehicle","On the vehicle"],1,"A failed rope or anchor travels along the line of pull."],
["What should happen if the signaller shouts stop?",["Finish the pull","Everyone stops at once","Call the owner","Wait ten seconds"],1,"A stop call from anyone is obeyed immediately."],
["Why is feeding a loaded rope through your hands dangerous?",["It is slow","Your hands can be dragged into the drum","It cools the rope","It is not dangerous"],1,"Gloved hands can be pulled in with the rope."],
["Which should you never use as a recovery point?",["A rated recovery point","A tow ball unless rated","A bumper cover","A frame-mounted hook"],2,"Plastic bumper covers cannot take a recovery load."],
["After a shock load on a rope or strap you should:",["Carry on","Inspect and, if in doubt, tag it out","Tie a knot","Wash it"],1,"Shock loads can cause hidden damage."],
["Why keep a rope away from sharp edges?",["It dulls the edge","Edges cut and weaken the rope","It looks bad","It makes noise"],1,"Cut or abraded fibres or wires reduce strength."]
]
});
})();
