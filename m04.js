// Module 4 enhanced: tyres, wheels and batteries on site.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
// Wheel with n studs, drawn with the star tightening order numbered.
function wheel(cx,n,order){let s='<circle cx="'+cx+'" cy="68" r="52" class="f-fill"/><circle cx="'+cx+'" cy="68" r="14" class="f-gray"/>';
const pts=[];for(let k=0;k<n;k++){const a=(-90+k*360/n)*Math.PI/180;pts.push([cx+34*Math.cos(a),68+34*Math.sin(a)])}
order.forEach((idx,step)=>{const p=pts[idx];s+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="10" class="f-hz"/><text x="'+p[0].toFixed(1)+'" y="'+(p[1]+4.5).toFixed(1)+'" text-anchor="middle" style="font-weight:700;fill:#1B2430">'+(step+1)+'</text>'});
for(let k=0;k<order.length-1;k++){const a=pts[order[k]],b=pts[order[k+1]];s+='<line x1="'+a[0].toFixed(1)+'" y1="'+a[1].toFixed(1)+'" x2="'+b[0].toFixed(1)+'" y2="'+b[1].toFixed(1)+'" class="f-thin" stroke-dasharray="3 3"/>'}
return s}
const wheels='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t4a"><title id="t4a">Star pattern for tightening wheel nuts on a five stud and a four stud wheel</title>'+wheel(78,5,[0,2,4,1,3])+wheel(222,4,[0,2,1,3])+'<text x="78" y="140" text-anchor="middle" style="font-size:12px">5 studs: jump across</text><text x="222" y="140" text-anchor="middle" style="font-size:12px">4 studs: cross pattern</text></svg>';
const jack='<svg viewBox="0 0 300 165" role="img" aria-labelledby="t4b"><title id="t4b">Safe wheel change setup: handbrake on, chock on the opposite wheel, jack at the marked point, axle stand as backup</title><line x1="0" y1="122" x2="300" y2="122" class="f-line"/><path d="M34,100 L34,78 Q36,62 56,60 L100,56 Q120,38 160,38 L200,40 Q226,44 244,62 L268,66 Q276,70 276,88 L276,100 Z" class="f-hz"/><circle cx="80" cy="96" r="21" class="f-gray" transform="translate(0,-8)"/><circle cx="80" cy="88" r="8" class="f-fill"/><circle cx="224" cy="100" r="21" class="f-gray"/><circle cx="224" cy="100" r="8" class="f-fill"/><path d="M120,102 L130,102 L130,122 L120,122 Z" class="f-fill"/><path d="M112,122 H138" class="f-line"/><path d="M149,106 L169,106 L172,122 L146,122 Z" class="f-fill"/><path d="M257,122 L257,110 L248,122 Z" class="f-redf"/><path d="M125,100 V86" class="f-ok" marker-end="none"/><text x="96" y="142" text-anchor="middle" style="font-size:11px">jack at</text><text x="96" y="154" text-anchor="middle" style="font-size:11px">marked point</text><text x="172" y="142" text-anchor="middle" style="font-size:11px">axle stand</text><text x="172" y="154" text-anchor="middle" style="font-size:11px">as backup</text><text x="252" y="142" text-anchor="middle" style="font-size:11px">chock</text><text x="150" y="20" text-anchor="middle" style="font-weight:700">Handbrake on, firm level ground, hazards on</text></svg>';
const batt='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t4c"><title id="t4c">Battery terminal order: disconnect negative first, reconnect negative last</title><rect x="60" y="56" width="180" height="70" rx="6" class="f-gray"/><rect x="82" y="44" width="26" height="12" class="f-fill"/><rect x="192" y="44" width="26" height="12" class="f-fill"/><text x="95" y="90" text-anchor="middle" style="font-size:26px;font-weight:700;fill:#1B2430">−</text><text x="205" y="90" text-anchor="middle" style="font-size:26px;font-weight:700;fill:#1B2430">+</text><circle cx="95" cy="30" r="12" class="f-redf"/><text x="95" y="35" text-anchor="middle" style="font-weight:700;fill:#fff">1</text><circle cx="205" cy="30" r="12" class="f-redf"/><text x="205" y="35" text-anchor="middle" style="font-weight:700;fill:#fff">2</text><text x="150" y="110" text-anchor="middle" style="font-size:12px;fill:#1B2430">DISCONNECT: 1 then 2</text><text x="12" y="146" style="font-size:12px">Reconnect in reverse: positive first, negative last</text></svg>';
const tyre='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t4d"><title id="t4d">Tyre cross section showing the tread zone that can be repaired and the shoulders and sidewalls that cannot</title><rect x="95" y="20" width="110" height="26" rx="4" class="f-okf"/><rect x="62" y="30" width="33" height="26" rx="4" fill="#F2B705" stroke="#1B2430" stroke-width="2"/><rect x="205" y="30" width="33" height="26" rx="4" fill="#F2B705" stroke="#1B2430" stroke-width="2"/><rect x="54" y="56" width="22" height="64" rx="4" class="f-redf"/><rect x="224" y="56" width="22" height="64" rx="4" class="f-redf"/><path d="M76,120 H224" class="f-line"/><text x="150" y="17" text-anchor="middle" style="font-weight:700">Tread area: can be repaired</text><text x="150" y="72" text-anchor="middle" style="font-size:12px">Shoulders: replace</text><text x="150" y="90" text-anchor="middle" style="font-size:12px">Sidewall cuts and</text><text x="150" y="104" text-anchor="middle" style="font-size:12px">bulges: replace</text><text x="150" y="140" text-anchor="middle" style="font-size:12px">Repair from inside, not with a plug alone</text></svg>';
ENH[3]=Object.assign(ENH[3]||{},{
n:[
"Park on firm level ground, handbrake on, wheels chocked, hazards on. If you cannot, tow instead of risking a roadside wheel change.",
"Loosen nuts a little before jacking. Lift only at the jacking points. Never work under a car held by a jack alone.",
"Tighten nuts in a star pattern, then re-check torque after a short drive.",
"A battery that keeps going flat points to a charging fault or a drain. Test before replacing.",
"Batteries give off explosive gas and contain acid. Wear eye protection and keep sparks and flames away.",
"A damaged tyre is not just a nuisance. A failing tyre can cause a loss of control at speed."
],
g:[FIG(wheels,'<b>Star pattern.</b> Number the nuts in a star, never in a circle. This pulls the wheel on evenly.'),FIG(jack,'<b>Safe jacking.</b> The jack lifts, the stand holds, the chock stops rolling. Never go under a car on a jack alone.'),FIG(batt,'<b>Battery terminal order.</b> Negative off first and on last to avoid sparks and short circuits.'),FIG(tyre,'<b>Tyre repair zone.</b> Only damage in the tread area can be repaired, and only properly.')],
d:[
["Wheel change in detail",[
"Check the spare's pressure and condition before you need it. A space-saver spare is limited in speed and distance, so follow the limits marked on it.",
"Loosen the nuts about half a turn before lifting. Clean the mounting surface of rust and dirt.",
"Use the jack only at the marked jacking points, such as the reinforced sill. Lift just far enough to clear the tyre.",
"Start the nuts by hand to avoid cross threading. Nuts with a tapered seat must match the wheel type.",
"Tighten to the maker's torque in a star pattern with a torque wrench. Re-check after about 50 km.",
"Never use oil or grease on wheel studs unless the maker says so. It can cause nuts to loosen."]],
["Tyre damage",[
"Sidewall cuts or bulges mean replace the tyre. Do not repair them.",
"Plugs and patches are for the tread area only. A proper repair is made from inside the tyre. An outside plug alone is only a temporary measure.",
"Driving on a flat quickly ruins the sidewall. Tow it or fit the spare.",
"Check tread depth. Many countries set a legal minimum of 1.6 mm. For wet grip, replace earlier. Check the local rule.",
"Correct pressure matters. Check the placard on the door pillar. Under-inflated tyres overheat and fail."]],
["Seized or damaged fixings",[
"Use the correct size socket and a breaker bar. Do not use an extension that can slip off the nut.",
"A penetrating oil and time can free a seized nut. Never heat a wheel nut near a tyre.",
"A lost locking nut key needs a proper removal tool. Do not drive on a wheel with damaged studs.",
"Replace stripped or stretched studs and nuts before the vehicle is driven."]],
["Batteries",[
"Disconnect negative first and reconnect negative last. Wear eye protection. Batteries give off explosive gas.",
"Clean and tighten terminals. Test voltage and, if possible, load test.",
"Never jump a cracked or frozen battery. Check the manual: some hybrids and EVs have specific jump points.",
"Use a replacement of the right type, size and rating. Start-stop and AGM batteries need the same type.",
"Some modern vehicles must have a new battery registered with the vehicle's computer. Check before you fit one.",
"Take old batteries to a recycler. Never dump them or burn them."]],
["Safety checks before leaving",[
"Check all nuts are tight and the tyre pressure is correct. Put the old wheel and tools away.",
"Advise the customer to repair or replace the tyre soon and to check nut torque after about 50 km.",
"Record the job, including the vehicle, time, what you found and any advice you gave."]]
],
q:[
["Wheel nuts are tightened:",["In a star pattern","Clockwise around the circle","Any order","Top ones last"],0,"A star pattern draws the wheel on evenly and prevents warping."],
["Work under a vehicle supported by:",["A jack only","A brick","A stand or secure support","A wheel brace"],2,"Jacks can fail or slip. Only a rated axle stand or equivalent support should hold the vehicle."],
["Before jacking a wheel you should:",["Chock wheels and set the handbrake","Remove the battery","Switch on hazard lights only","Loosen the bonnet"],0,"The vehicle must not roll or shift while you work."],
["A bulge in a tyre sidewall means:",["Replace the tyre","Reduce pressure","Repair with a plug","Ignore it"],0,"A bulge means the internal cords are broken. The tyre can burst."],
["Wheel nuts are loosened before lifting by about:",["Half a turn","Three turns","Fully removed","Not loosened"],0,"Loosening them while the wheel is on the ground stops it spinning."],
["Wheel nut torque should be re-checked after about:",["5 km","50 km","500 km","5000 km"],1,"Nuts can settle after a short drive. Re-check them soon."],
["Tyre plugs and patches are suitable for:",["The tread area only","Sidewalls","Shoulders","Bulges"],0,"Only the tread area is supported enough for a safe repair."],
["When disconnecting a battery, remove first:",["The positive","The negative","Either","The case"],1,"Removing the negative first prevents a spanner on the positive from shorting to the body."],
["Before a roadside wheel change, the spare should be:",["Checked for pressure and condition","Ignored","Painted","Left under the car"],0,"A flat or damaged spare is no help. Check it early."],
["Battery gases are:",["Explosive","Harmless","Sweet","Cold"],0,"Hydrogen from a battery can ignite from a spark."],
["Never jump a battery that is:",["Cracked or frozen","Clean","Fully charged","Lead-acid"],0,"A frozen or cracked battery can explode or leak acid when jumped."],
["Where can a vehicle be lifted by a jack?",["Any flat part of the floor","Only at the marked jacking points","The exhaust","The fuel tank"],1,"Jack points are reinforced. Other parts can bend or crush."],
["Why must you not oil wheel studs unless the maker says so?",["It smells bad","It can let nuts loosen or give a false torque","It stains the tyre","It attracts dust"],1,"Oil changes the friction and so the clamping force at a given torque."],
["A tyre has a small nail in the tread area. The best repair is:",["An outside plug only","A repair made from inside by a tyre specialist","Ignore it","Fill it with sealant only"],1,"A proper repair needs the tyre off the wheel so the inside can be checked and sealed."],
["The 1.6 mm figure usually refers to:",["Tyre width","The legal minimum tread depth in many countries","Wheel offset","Stud length"],1,"Many countries set 1.6 mm as the legal minimum. Check the rule where you work."],
["A space-saver spare means you should:",["Drive normally","Keep to the marked speed and distance limits","Add more air","Fit two"],1,"Space-savers are for short, slow trips to get the tyre fixed."],
["A wheel nut is seized. You should first:",["Use an extension bar on the wrench","Use the correct socket and a breaker bar, with penetrating oil","Heat it with a torch near the tyre","Hit it with a hammer"],1,"The correct socket and a breaker bar hold the nut safely. Heat near a tyre is dangerous."],
["After fitting a new battery on a modern car you should:",["Do nothing","Check whether it needs registering with the vehicle computer","Remove the fuses","Charge it for an hour"],1,"Some systems manage charging by battery type and age and need to be told."],
["A tyre pressure placard is usually found:",["On the tyre tread","On the door pillar or fuel flap","On the engine","In the exhaust"],1,"The vehicle's recommended pressures are on the door pillar, fuel flap or handbook."]
]
});
})();
