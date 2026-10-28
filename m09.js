// Module 9 enhanced: heavy equipment and plant (forklift).
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const parts='<svg viewBox="0 0 300 160" role="img" aria-labelledby="t9a"><title id="t9a">Parts of a counterbalance forklift: mast, forks, carriage, overhead guard, seat, counterweight and wheels</title><line x1="0" y1="140" x2="300" y2="140" class="f-line"/><rect x="190" y="40" width="10" height="100" class="f-gray"/><rect x="206" y="40" width="10" height="100" class="f-gray"/><rect x="198" y="70" width="14" height="30" rx="2" class="f-hz"/><path d="M200,128 H278 V134 H206 V128" class="f-gray"/><rect x="70" y="78" width="120" height="46" rx="6" class="f-hz"/><path d="M84,78 V34 H160 V78" class="f-line"/><rect x="108" y="92" width="26" height="16" rx="3" class="f-fill"/><rect x="56" y="82" width="24" height="42" rx="6" class="f-gray"/><circle cx="150" cy="126" r="16" class="f-gray"/><circle cx="150" cy="126" r="5" class="f-fill"/><circle cx="92" cy="130" r="11" class="f-gray"/><g style="font-size:11px"><text x="224" y="32">mast</text><text x="226" y="152">forks</text><text x="224" y="86">carriage</text><text x="96" y="26">overhead guard</text><text x="104" y="60" style="font-size:10px"></text><text x="114" y="104" style="fill:#1B2430;font-size:10px">seat</text><text x="6" y="66">counter-</text><text x="6" y="78">weight</text><text x="150" y="156" text-anchor="middle">drive wheel</text></g></svg>';
const lc='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t9b"><title id="t9b">Rated capacity falls as the load centre moves further from the mast; read the load plate for the real figure</title><line x1="0" y1="124" x2="300" y2="124" class="f-line"/><rect x="40" y="30" width="10" height="94" class="f-gray"/><rect x="50" y="116" width="150" height="8" class="f-gray"/><rect x="58" y="62" width="64" height="54" class="f-hz"/><path d="M50,40 V30 M122,40 V30 M50,34 H122" class="f-thin"/><text x="100" y="26" text-anchor="middle" style="font-size:11px">500 mm: rated load</text><rect x="58" y="62" width="64" height="54" fill="none"/><rect x="122" y="62" width="40" height="54" fill="#F2B705" opacity=".4" stroke="#C93A0E" stroke-width="2" stroke-dasharray="4 3"/><text x="150" y="52" text-anchor="middle" style="font-size:11px;fill:#C93A0E">600 mm: lower capacity</text><text x="172" y="78" style="font-size:12px;font-weight:700">Example only</text><text x="172" y="94" style="font-size:11px">2,500 kg at 500 mm</text><text x="172" y="108" style="font-size:11px">~2,100 kg at 600 mm</text><text x="150" y="144" text-anchor="middle" style="font-size:11px">Always use the figure on the load plate.</text></svg>';
const slope='<svg viewBox="0 0 300 130" role="img" aria-labelledby="t9c"><title id="t9c">On a ramp a loaded forklift travels with the load facing uphill and the forks low</title><path d="M0,112 L300,60 L300,130 L0,130 Z" class="f-fill"/><g transform="translate(120,76) rotate(-10)"><rect x="0" y="0" width="56" height="30" rx="5" class="f-hz"/><path d="M8,0 V-24 H40 V0" class="f-line"/><circle cx="14" cy="32" r="8" class="f-gray"/><circle cx="46" cy="32" r="8" class="f-gray"/><rect x="56" y="-14" width="6" height="46" class="f-gray"/><rect x="62" y="24" width="30" height="5" class="f-gray"/><rect x="66" y="6" width="26" height="18" class="f-redf" opacity=".85"/></g><text x="150" y="20" text-anchor="middle" style="font-weight:700">Loaded: load faces uphill</text><text x="150" y="38" text-anchor="middle" style="font-size:12px">Unloaded: forks face downhill. Never turn on a slope.</text></svg>';
const tip='<svg viewBox="0 0 300 130" role="img" aria-labelledby="t9d"><title id="t9d">If a forklift starts to tip: stay in the seat, stay belted, hold on firmly, lean away from the fall; never jump</title><rect x="10" y="10" width="136" height="110" rx="6" class="f-fill"/><circle cx="46" cy="40" r="14" class="f-redf"/><path d="M39,33 L53,47 M53,33 L39,47" fill="none" stroke="#fff" stroke-width="3"/><text x="66" y="46" style="font-weight:700;font-size:13px">Never jump</text><text x="20" y="80" style="font-size:11px">The cage can crush</text><text x="20" y="94" style="font-size:11px">you as it falls.</text><rect x="154" y="10" width="136" height="110" rx="6" class="f-fill"/><circle cx="190" cy="40" r="14" class="f-okf"/><path d="M183,40 L188,46 L198,34" fill="none" stroke="#fff" stroke-width="3"/><text x="210" y="46" style="font-weight:700;font-size:13px">Stay belted</text><text x="164" y="80" style="font-size:11px">Brace both feet, hold on,</text><text x="164" y="94" style="font-size:11px">lean away from the fall.</text></svg>';
ENH[8]=Object.assign(ENH[8]||{},{
n:[
"Types: counterbalance, reach truck, pallet jack. Know the load plate and rated capacity.",
"Stability triangle: two front wheels and the rear axle pivot form a triangle. The combined centre of gravity must stay inside it.",
"Raised, forward or side-loaded weight pushes the centre outside the triangle and tips the machine.",
"If it tips: stay belted and in the seat, hold on, lean away from the fall. Do not jump.",
"Servicing: check mast, chains, forks, hydraulic hoses, tyres, brakes and battery or fuel before each shift.",
"Recovering a tipped forklift: isolate power, spill control, then lift or roll upright with rated slings.",
"Capacity falls as the load centre moves out. The load plate gives the rating at a stated load centre.",
"Travel with forks low and the mast tilted back. On a ramp, keep a loaded forklift's load facing uphill."
],
g:[FIG(parts,'<b>Forklift parts.</b> Know each part so you can inspect it and so you know where to sling it.'),FIG(lc,'<b>Load centre.</b> The further the load centre from the mast, the less the forklift can safely lift.'),FIG(slope,'<b>Ramps.</b> Keep the load uphill and travel straight. Never turn on a slope.'),FIG(tip,'<b>If it tips.</b> The seat belt and cage protect you only if you stay inside.')],
d:[
["Operating rules",[
"Only trained, authorised operators. Do the pre-use check each shift and tag out faulty machines.",
"Wear the seat belt. Keep hands and feet inside the cab.",
"Sound the horn at corners. Never let anyone stand under raised forks or ride on the forks.",
"Pedestrians have priority. Look in the direction of travel, and reverse with a spotter if your view is blocked.",
"Keep a safe speed, and stop and lower the forks before leaving the seat."]],
["Pre-use check",[
"Look over the mast, chains, forks, carriage and hydraulic hoses for cracks, bends, wear and leaks.",
"Tyres: cuts, wear and loose wheel nuts. Check the horn, lights, seat belt, steering, brakes and parking brake.",
"Check oil, coolant, fuel or battery charge. Report any fault and do not use the machine if it is unsafe.",
"Never use your hand to find a hydraulic leak. A high-pressure pinhole jet can inject oil through the skin."]],
["Handling loads",[
"Approach square, forks fully under, spread to fit. Tilt back slightly, lift just enough to clear, then travel low.",
"Never exceed the load plate. Attachments change the capacity.",
"Slopes: a loaded forklift travels with the load uphill. Never turn on a slope.",
"Stack only as high as the capacity allows, and never when the mast is tilted forward under load."]],
["Servicing",[
"Daily: tyres, fluids, hoses, forks and chains. Service by running hours.",
"Electric: charge in a ventilated area. Lead-acid batteries give off explosive hydrogen, so no sparks or flames. Wear eye protection.",
"LPG: check hoses and cylinder mounting. Store cylinders upright and outdoors."]],
["Moving a broken-down forklift",[
"A forklift is heavy and counterbalance trucks are not built to be towed far or fast. Prefer a flatbed or a low loader.",
"Many have a spring-applied parking brake that must be released the maker's way before the wheels can turn.",
"If you must tow, use the maker's tow point at very low speed and steer from the seat if possible."]],
["Recovering a tipped forklift",[
"Isolate power, shut off LPG, and check for spills.",
"Sling from the overhead guard or chassis points. Do not pull on the mast.",
"Know the weight from the data plate. Use a crane or a rated winch plan, and keep the fall zone clear.",
"Lift upright slowly, then inspect the mast, hydraulics and frame before it returns to work."]]
],
q:[
["If a forklift starts to tip, you should:",["Jump out","Stay belted and brace","Put the forks up","Open the door"],1,"The cage keeps you safe only if you stay inside it."],
["Stability depends on the centre of gravity staying:",["Inside the stability triangle","Behind the seat","Above the mast","Outside"],0,"Outside the triangle the machine tips."],
["A common forklift pre-shift check is:",["Mast, chains, forks and hydraulics","Radio","Paint","Seat cover only"],0,"Faults here cause the worst accidents."],
["On a ramp, a loaded forklift should travel with the load:",["Uphill","Downhill","Sideways","Raised"],0,"Load uphill keeps the weight on the drive wheels."],
["A forklift starts to tip. You are seated and belted. You:",["Jump","Stay in, hold on, lean away","Open the door","Reach out"],1,"Do not try to get out as it falls."],
["The stability triangle has:",["Three support points","Four","Five","Two"],0,"The two front wheels and the rear axle pivot."],
["Travel with forks:",["Low and the mast tilted back","High","Forward","Waving"],0,"Low forks and a back tilt lower the centre of gravity."],
["A load plate shows:",["Rated capacity at a stated load centre","The maker's phone","The price","Paint code"],0,"It tells you what you can lift at a given load centre."],
["Never allow anyone to:",["Ride on the forks","Stand clear","Wear PPE","Use the horn"],0,"The forks are not a platform."],
["Lead-acid charging gives off:",["Explosive hydrogen","Oxygen","Water","Nothing"],0,"Keep sparks and flames away."],
["LPG cylinders should be stored:",["Upright and outdoors","Lying down","In the cab","Under the forks"],0,"Upright keeps the valve in the vapour space."],
["Lift a tipped forklift by slinging from:",["The overhead guard or chassis points","The mast","The forks","The hoses"],0,"Only the strong structure should carry the load."],
["As the load centre moves further from the mast, capacity:",["Rises","Falls","Stays the same","Doubles"],1,"A longer lever arm makes the load heavier on the front axle."],
["Where do you find the true capacity for your forklift?",["The seat","The load plate","The tyre","The mirror"],1,"The plate states the rated load for the machine and attachment."],
["Why must you not use your hand to look for a hydraulic leak?",["It is dirty","A pinhole jet can inject oil through the skin","The oil is hot only","It is slow"],1,"Injection injuries are serious and need urgent medical care."],
["Before leaving the seat of a forklift you should:",["Leave it running with forks up","Lower the forks, set the brake and switch off","Wave","Lock it only"],1,"A raised load or a running machine can hurt someone."],
["Why should a forklift not be turned on a slope?",["It looks bad","The load can shift and the machine can tip","Tyres wear faster","It uses fuel"],1,"Turning on a slope moves the centre of gravity toward the edge."],
["Which is a sign of a worn fork that must be replaced?",["Clean paint","Cracks, bends or wear beyond the limit","A shiny finish","A tag"],1,"Damaged forks can snap under load."],
["You must move a broken-down forklift. Best choice is:",["Tow it fast","Flatbed or low loader","Drag it","Push it"],1,"A forklift is not built for long or fast towing."],
["During recovery of a tipped forklift you must first:",["Lift at once","Isolate power, shut off LPG, check for spills","Wash it","Start the engine"],1,"Fuel, gas and electrical hazards come first."]
]
});
})();
