// Module 10 enhanced: scene management and traffic safety.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const layout='<svg viewBox="0 0 300 160" role="img" aria-labelledby="t10a"><title id="t10a">Roadside scene from above: warning triangle far back, cone taper, recovery truck angled with beacon in front of the broken down vehicle, work area behind the truck</title><rect x="0" y="30" width="300" height="76" class="f-road"/><line x1="0" y1="68" x2="300" y2="68" stroke="#fff" stroke-width="2" stroke-dasharray="14 10"/><rect x="0" y="106" width="300" height="38" fill="#C8B88A" opacity=".5"/><path d="M6,48 H48" class="f-ok"/><path d="M42,43 L50,48 L42,53" fill="none" stroke="#1F7A45" stroke-width="3"/><text x="8" y="42" style="font-size:11px;fill:#fff">traffic</text><path d="M16,100 L26,100 L21,90 Z" class="f-redf"/><text x="21" y="122" text-anchor="middle" style="font-size:10px">triangle</text><g class="f-hz"><circle cx="60" cy="96" r="4"/><circle cx="82" cy="90" r="4"/><circle cx="104" cy="84" r="4"/></g><text x="82" y="122" text-anchor="middle" style="font-size:10px">cone taper</text><g transform="translate(130,84) rotate(-4)"><rect x="0" y="0" width="56" height="22" rx="4" class="f-hz"/><circle cx="46" cy="4" r="3" fill="#C93A0E"/></g><text x="158" y="76" text-anchor="middle" style="font-size:10px;fill:#fff">recovery truck</text><rect x="204" y="86" width="64" height="20" rx="4" class="f-fill"/><text x="236" y="99" text-anchor="middle" style="font-size:10px">broken-down</text><text x="150" y="138" text-anchor="middle" style="font-size:11px">work area: verge side, behind the truck</text><text x="150" y="16" text-anchor="middle" style="font-weight:700">Shield the work area, give drivers time to react</text></svg>';
const dist='<svg viewBox="0 0 300 140" role="img" aria-labelledby="t10b"><title id="t10b">Warning distance guide: further back on fast roads, bends, crests, in rain and at night</title><g style="font-size:12px"><text x="6" y="22" style="font-weight:700">Warning distance (typical minimum)</text></g><rect x="6" y="34" width="140" height="18" class="f-hz"/><text x="12" y="48" style="font-size:12px;fill:#1B2430">50 m: slow urban road</text><rect x="6" y="60" width="220" height="18" class="f-hz"/><text x="12" y="74" style="font-size:12px;fill:#1B2430">100 m+: fast road</text><rect x="6" y="86" width="288" height="18" fill="#C93A0E"/><text x="12" y="100" style="font-size:12px;font-weight:700;fill:#fff">Add more: bend, crest, rain, night, fog</text><text x="6" y="130" style="font-size:11px">Check local rules. Face traffic when placing.</text></svg>';
const stand='<svg viewBox="0 0 300 140" role="img" aria-labelledby="t10c"><title id="t10c">Safe standing: work on the verge side behind the truck, the traffic watcher faces oncoming traffic with a clear escape route</title><rect x="0" y="10" width="300" height="64" class="f-road"/><line x1="0" y1="42" x2="300" y2="42" stroke="#fff" stroke-width="2" stroke-dasharray="14 10"/><rect x="0" y="74" width="300" height="60" fill="#C8B88A" opacity=".5"/><rect x="104" y="48" width="72" height="22" rx="4" class="f-hz"/><circle cx="168" cy="52" r="3" fill="#C93A0E"/><circle cx="92" cy="60" r="7" class="f-okf"/><text x="92" y="82" text-anchor="middle" style="font-size:10px">watcher</text><path d="M84,60 H66" class="f-ok"/><circle cx="140" cy="90" r="7" fill="#1F5FAE"/><text x="140" y="112" text-anchor="middle" style="font-size:10px">worker</text><path d="M180,90 L220,112" class="f-line" stroke-dasharray="5 4"/><text x="226" y="116" style="font-size:10px">escape route</text><text x="6" y="26" style="font-size:11px;fill:#fff">traffic</text><path d="M44,24 H70" stroke="#fff" stroke-width="3"/><path d="M64,19 L72,24 L64,29" fill="none" stroke="#fff" stroke-width="3"/></svg>';
ENH[9]=Object.assign(ENH[9]||{},{
n:[
"Place warning triangles and lights early enough to give approaching drivers time to slow. Go further on fast roads and bends.",
"Park the recovery truck to shield the work area, with lights on.",
"Work on the side away from traffic where possible.",
"Keep bystanders back and one person watching traffic.",
"Cones form a taper from the shoulder into the lane so traffic moves over gradually.",
"Traffic kills more recovery workers than any other hazard. Plan your escape route before you start."
],
g:[FIG(layout,'<b>Scene layout.</b> Warning first, then taper, then the truck. Work behind the truck and away from traffic.'),FIG(dist,'<b>Warning distances.</b> Drivers need more time to react at speed or in bad conditions.'),FIG(stand,'<b>Where people stand.</b> Keep a watcher facing traffic and an escape route to the verge.')],
d:[
["Setting up",[
"Park the truck at an angle between traffic and the work area, with beacons on.",
"Place triangles and cones early to give a clear buffer.",
"Use a taper that moves traffic over gradually. The faster the road, the longer the taper.",
"Put out warning devices facing traffic, and take them in the reverse way. Never turn your back on traffic while placing them.",
"If you cannot make the scene safe, ask the police or road authority to close the lane or road."]],
["Lights, signs and visibility",[
"Use amber beacons and reflective markings. Do not use blue or red lights unless the law allows you to.",
"Wear high-visibility clothing that meets the standard. At night, add reflective tape and good work lighting that does not dazzle drivers.",
"Do not look into approaching headlights. Position lights so they face the work, not oncoming drivers."]],
["Roles",[
"One scene leader gives orders. One person watches traffic. One spotter guides each lift or pull.",
"Agree signals before work starts. Use a radio or phone where voices carry badly.",
"The scene leader decides when it is safe to start and finish."]],
["Working with others",[
"Police manage traffic, crowds and investigations. The fire service deals with fire and rescue. Ambulance staff care for casualties.",
"In Ghana, the Police Motor Traffic and Transport Department (MTTD) handles road traffic matters. Report to the officer in charge.",
"Many countries publish traffic incident guides, such as the UK Traffic Signs Manual Chapter 8 and the US MUTCD traffic incident management section. Follow your local rules first."]],
["Night, rain and crowds",[
"Add extra lighting and reflectors at night. Wet roads mean longer braking, so place warnings further back.",
"In fog, add more lights and more distance. Move off the road where you can.",
"Keep bystanders well back. At least 1.5 times the line length from a loaded rope.",
"Ask the police to manage crowds."]],
["Clearing up",[
"Pick up cones, triangles and debris in the reverse order they were placed.",
"Check the road is clear and report any damage to road furniture.",
"Tell the police and the customer that the job is complete."]]
],
q:[
["Warning triangles should be placed:",["Early enough for drivers to slow down","Beside the car","Anywhere","After the job"],0,"Drivers need time to see, understand and slow down."],
["Best working side:",["Away from traffic","Beside traffic","In the lane","Anywhere"],0,"The less exposure to traffic the better."],
["Who should watch traffic during the job?",["Nobody","One assigned person","The customer","The towed driver"],1,"One person with a clear role is more reliable than everyone half watching."],
["It is night, raining, on a fast road. Warning triangles go:",["Closer","Further back than usual","At the same place","Behind the truck"],1,"Wet roads and low visibility make drivers need much more distance to stop."],
["The recovery truck is placed to:",["Shield the work area","Block the whole road","Hide the car","Look nice"],0,"It acts as a barrier between traffic and the work."],
["A taper of cones:",["Moves traffic over gradually","Stops traffic","Marks parking","Is for decoration"],0,"A gradual taper avoids sudden swerves."],
["The traffic watcher:",["Watches traffic and warns the team","Drives the truck","Calls the customer","Takes photos"],0,"Their only job is to watch traffic and shout a warning."],
["Bystanders should stay back at least:",["1.5 times the line length","1 m","10 cm","No need"],0,"A broken line can fly a long way."],
["In rain, warning triangles go:",["Further back","Closer","Away","Nowhere"],0,"Wet roads need longer stopping distances."],
["Hand signals should be agreed:",["Before work starts","After the job","When something goes wrong","Never"],0,"Agree them first so everyone understands under stress."],
["Work on the side:",["Away from traffic","Closest to traffic","Anywhere","Under the truck"],0,"It reduces exposure."],
["When placing warning devices on the road you should:",["Turn your back on traffic","Face traffic","Run","Use no lights"],1,"Facing traffic lets you see danger and react."],
["Which lights should a recovery truck normally use?",["Amber beacons","Blue lights","Red flashing lights","None"],0,"Use amber unless the law gives you other rights."],
["Who decides when a scene is safe to start work?",["The customer","The scene leader","A passing driver","Nobody"],1,"One person must take the decision."],
["You cannot make the roadside safe on a fast road. You should:",["Work quickly","Ask the police or road authority to close or control traffic","Ignore it","Use a cone only"],1,"If you cannot protect yourself, get help to close the lane."],
["Why plan an escape route?",["To save time","If a vehicle enters the work area you can move to safety fast","To park","To please the police"],1,"A planned route avoids hesitation and injury."],
["Why remove cones and triangles in reverse order?",["For fun","So the warning stays between you and traffic while you work","They are heavy","It saves fuel"],1,"The farthest warning stays in place until last."],
["At night you should avoid:",["Looking at oncoming headlights","Wearing hi-vis","Using lighting","Cones"],0,"Dazzle ruins your night vision and your reactions."],
["In fog, you should:",["Use fewer lights","Add more lights and more distance","Switch off lights","Park in the lane"],1,"Visibility is short, so give drivers more warning."],
["After the job, who should you tell it is complete?",["Nobody","The police and the customer","A passer-by","The press"],1,"The police may be controlling traffic and the customer needs to know."]
]
});
})();
