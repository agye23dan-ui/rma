// Module 8 enhanced: accident and heavy vehicle recovery.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const steps=['Emergency services: people, fire, fuel','Scene released and made safe','Assess vehicle, load and ground','Plan the recovery and the fall zone','Recover with the right rating and kit','Record, clear and hand over'];
const order='<svg viewBox="0 0 300 190" role="img" aria-labelledby="t8a"><title id="t8a">Order of work at an accident: emergency services first, then scene made safe, assess, plan, recover, record</title>'+steps.map((t,i)=>{const y=4+i*30;return '<rect x="'+(4+i*6)+'" y="'+y+'" width="'+(292-i*6)+'" height="26" rx="5" class="'+(i===0?'f-red':'f-hz')+'" style="'+(i===0?'fill:#C93A0E;stroke:#1B2430;stroke-width:2':'')+'"/><text x="'+(14+i*6)+'" y="'+(y+17)+'" style="font-weight:700;fill:'+(i===0?'#fff':'#1B2430')+'">'+(i+1)+'  '+t+'</text>'}).join('')+'</svg>';
const spring='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t8b"><title id="t8b">Spring brake: air pressure holds the spring compressed and the brake off; if air is lost the spring extends and applies the brake</title>'+
'<rect x="10" y="30" width="130" height="50" rx="6" class="f-fill"/><path d="M26,55 h14 l6,-14 l10,28 l10,-28 l10,28 l8,-14 h10" class="f-line"/><rect x="98" y="38" width="8" height="34" class="f-gray"/><path d="M106,55 H130" class="f-ok"/><text x="75" y="22" text-anchor="middle" style="font-weight:700">Air present</text><text x="75" y="102" text-anchor="middle" style="font-size:12px">spring held compressed</text><text x="75" y="118" text-anchor="middle" style="font-size:12px;font-weight:700">brake OFF</text>'+
'<rect x="160" y="30" width="130" height="50" rx="6" class="f-fill"/><path d="M176,55 h10 l4,-14 l8,28 l8,-28 l8,28 l6,-14 h6" class="f-line"/><rect x="236" y="38" width="8" height="34" class="f-gray"/><path d="M244,55 H282" class="f-red"/><text x="225" y="22" text-anchor="middle" style="font-weight:700">Air lost</text><text x="225" y="102" text-anchor="middle" style="font-size:12px">spring pushes out</text><text x="225" y="118" text-anchor="middle" style="font-size:12px;font-weight:700;fill:#C93A0E">brake ON, wheels locked</text><text x="150" y="144" text-anchor="middle" style="font-size:11px">Chock wheels before caging or releasing any spring brake.</text></svg>';
const up='<svg viewBox="0 0 300 160" role="img" aria-labelledby="t8c"><title id="t8c">Uprighting an overturned truck with two lines: one rolls it, the second holds it back; the fall zone must be kept clear</title><line x1="0" y1="132" x2="300" y2="132" class="f-line"/><rect x="118" y="86" width="90" height="46" rx="4" class="f-hz"/><circle cx="108" cy="102" r="8" class="f-gray"/><circle cx="108" cy="122" r="8" class="f-gray"/><rect x="212" y="92" width="86" height="40" fill="#C93A0E" opacity=".13"/><rect x="212" y="92" width="86" height="40" fill="none" stroke="#C93A0E" stroke-width="2" stroke-dasharray="5 4"/><text x="255" y="109" text-anchor="middle" style="font-size:11px;font-weight:700">fall zone</text><text x="255" y="123" text-anchor="middle" style="font-size:11px;font-weight:700">keep clear</text><path d="M122,86 L26,28" class="f-red"/><rect x="6" y="24" width="30" height="22" rx="4" class="f-fill"/><text x="21" y="38" text-anchor="middle" style="font-size:10px">winch</text><path d="M206,86 L282,52" class="f-ok"/><rect x="266" y="40" width="30" height="22" rx="4" class="f-fill"/><text x="281" y="54" text-anchor="middle" style="font-size:10px">brake</text><text x="150" y="14" text-anchor="middle" style="font-weight:700">Roll line + holding line</text><text x="64" y="86" text-anchor="middle" style="font-size:11px">rolls it up</text><text x="226" y="36" text-anchor="middle" style="font-size:11px">holds it back</text><text x="150" y="152" text-anchor="middle" style="font-size:11px">Lines go to chassis and axles only.</text></svg>';
const slope='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t8d"><title id="t8d">Recovering a vehicle from an embankment: pull along the slope with the anchor uphill and a snatch block to change direction away from the edge</title><path d="M0,60 L110,60 L300,138 L300,150 L0,150 Z" class="f-fill"/><rect x="16" y="36" width="64" height="24" rx="5" class="f-hz"/><circle cx="30" cy="62" r="7" class="f-gray"/><circle cx="68" cy="62" r="7" class="f-gray"/><text x="6" y="30" style="font-size:11px">anchor truck, chocked</text><g transform="translate(176,106) rotate(22)"><path d="M0,0 L0,-12 L56,-12 L56,0 Z" fill="#F2B705" stroke="#1B2430" stroke-width="2"/><circle cx="12" cy="2" r="7" class="f-gray"/><circle cx="44" cy="2" r="7" class="f-gray"/></g><path d="M80,48 L178,92" class="f-red"/><text x="238" y="100" style="font-size:12px">vehicle</text><text x="150" y="16" text-anchor="middle" style="font-weight:700">Pull along the slope, anchor uphill</text><text x="150" y="142" text-anchor="middle" style="font-size:11px">Do not pull across the slope: the vehicle can roll.</text></svg>';
ENH[7]=Object.assign(ENH[7]||{},{
n:[
"Police, fire and medical needs come before recovery. Do not move a scene until it is released.",
"Isolate the battery and watch for leaking fuel, airbags not yet fired and damaged high-voltage parts.",
"Overturned trucks: unload first if allowed, then plan an upright with two lines and a controlled roll.",
"Damaged steering or brakes mean the vehicle must be carried or fully lifted, not towed on its wheels.",
"Photograph the scene and damage before moving anything.",
"Hybrid and electric cars have orange high-voltage cables. Do not cut or touch them. Follow the maker's emergency guide.",
"Chock and stabilise a vehicle on its side before any lift."
],
g:[FIG(order,'<b>Order of work.</b> Emergency services come first. Each later step waits for the one before it.'),FIG(spring,'<b>Spring brake.</b> On an air-braked truck, lost air means locked wheels, so the truck may not roll at all.'),FIG(up,'<b>Uprighting.</b> Two lines roll and hold. Plan the fall zone before you start.'),FIG(slope,'<b>Embankment pull.</b> Keep the load along the slope and anchor uphill.')],
d:[
["Arriving and taking control",[
"Report to the police or incident commander. Ask what has been done and what you may move.",
"Confirm casualties are cared for and the fire service has made the scene safe before rigging.",
"Identify the load: fuel, chemicals, livestock or passengers' luggage. Dangerous goods need a specialist. Look for hazard placards and call the number shown.",
"Park on firm ground, set stabilisers, and plan where the vehicle will end up."]],
["Hazards after a crash",[
"Fuel leaks: stop sources of ignition and keep people back. Use absorbent and call the fire service.",
"Airbags and seat belt pre-tensioners that have not fired can still go off. Keep clear of the deployment zones and do not cut near them.",
"Hybrid and electric cars: high-voltage cables are orange. Never cut, touch or lift by them. Follow the maker's guide.",
"Broken glass, sharp metal, hot parts, unstable loads and spilt fluids are all hazards. Wear PPE.",
"Loads that may shift: chain or strap and chock them before you lift."]],
["Assessing the vehicle",[
"Estimate weight from the plate or manual plus the load. Heavy trucks may need a heavy wrecker or two trucks.",
"Look for leaking fuel, hot brakes, burst tyres, bent axles and hanging parts.",
"Air brakes: spring brakes can apply when air is lost, so a crashed truck may be locked. Release them the maker's way (caging bolts or an air supply), after chocking the wheels.",
"Drive axle on the ground needs the propshaft or axle shafts removed to protect the gearbox.",
"Buses: passengers must be off before recovery. Livestock needs a specialist."]],
["Uprighting an overturned truck",[
"Remove or transfer the load first if it is safe.",
"Attach lines to strong points: chassis and axles, not body panels or the cab roof.",
"Use two lines: one rolls it over, the second holds it back so it does not slam down.",
"Roll slowly and stop at the balance point. Keep everyone outside the fall zone, at least the vehicle's height plus a margin.",
"Once upright, inspect chassis, steering and brakes before moving it."]],
["Ditches and embankments",[
"Pull along the slope, not across it, so the vehicle stays upright. Anchor uphill.",
"Use snatch blocks to change the pull direction away from the edge.",
"Chock the recovery truck and check the ground can carry it."]],
["Evidence, records and finishing",[
"Photograph the scene and damage before moving anything. Note the position of the vehicles, skid marks and debris. The police may need the original positions.",
"Do not remove personal property or tamper with the vehicle without authority.",
"Photograph the final position and give a condition list to the owner and police.",
"Soak up fuel spills with absorbent. Never wash fuel into drains.",
"Record hours, equipment used and damage for billing and insurance.",
"A bad crash is distressing. Look after yourself and your crew, and ask for support if you need it."]]
],
q:[
["Before moving an accident vehicle:",["Move it fast","Get clearance and photograph the scene","Wash it","Remove the plates"],1,"The police may need the original positions as evidence."],
["Vehicle has broken steering. You should:",["Tow it normally","Carry or fully lift it","Push it","Drive it"],1,"A vehicle without steering must not be towed on its wheels."],
["Injured people, fire and fuel are dealt with:",["Before recovery","After recovery","Never","Only by the owner"],0,"Life and fire safety come first."],
["An air-braked truck that loses air may have its spring brakes:",["Released","Applied, locking the wheels","Unchanged","Disabled"],1,"Spring brakes apply when air is lost."],
["A truck lies in a ditch and fuel is leaking. What comes first?",["Hook up","Get fire service and police control of the scene and the leak","Photograph","Winch"],1,"Fuel is a fire and pollution risk and needs the proper responders."],
["Before uprighting a loaded truck, the best first step is to:",["Roll it","Unload or transfer the load if safe","Add weight","Drive it"],1,"Less weight means less load on the lines and less risk."],
["Who controls the scene on arrival?",["Anyone","The police or incident commander","The recovery truck driver","The owner"],1,"The incident commander coordinates all the agencies."],
["Hybrid high-voltage cables are usually coloured:",["Orange","Green","Blue only","Black"],0,"Orange warns of high voltage."],
["To upright a truck, attach lines to:",["Cab roof","Chassis and axles","Body panels","The fuel tank"],1,"Only the chassis and axles are strong enough."],
["The second line when uprighting:",["Prevents it slamming down","Adds speed","Is optional","Holds the winch"],0,"The holding line controls the fall as the truck rolls over the balance point."],
["Fuel spills should be:",["Washed into the drain","Soaked up with absorbent","Left","Burned"],1,"Never put fuel in drains."],
["Pulling along an embankment slope helps:",["Keep the vehicle from rolling","Tear the slope","Speed up the pull","Reduce rope"],0,"A pull across the slope can roll it."],
["Air-brake spring brakes apply when:",["Air is lost","Air is added","The engine starts","The lights come on"],0,"The spring pushes out when air pressure drops."],
["Why chock the wheels before caging a spring brake?",["For looks","Releasing the brake lets the truck roll","To cool them","It is not needed"],1,"Once caged or released, nothing holds the truck on a slope."],
["What are unfired airbags a danger for?",["They can inflate unexpectedly and injure","They smell","They are heavy","They are safe"],0,"Unfired airbags and pretensioners can deploy later."],
["How far should the fall zone be when uprighting a truck?",["One metre","At least the vehicle's height plus a margin","None","Ten centimetres"],1,"The truck can swing or roll the full height as it comes over."],
["A hazard placard shows an unknown chemical load. You should:",["Open the load","Keep back and call the specialist responders","Smell it","Cover with a cloth"],1,"Dangerous goods need trained responders."],
["Why photograph the scene before moving anything?",["For social media","It records positions and damage for police and insurers","To slow down the job","To train a dog"],1,"Photos protect everyone from disputes."],
["The driver of a bus crash has passengers still on board. Before recovery:",["Recover at once","Make sure all passengers are off","Open the windows","Take photos only"],1,"People must never be on a vehicle being lifted or moved."],
["After the truck is upright you should:",["Drive off","Inspect chassis, steering and brakes before moving it","Wash it","Remove the plates"],1,"The roll-over may have damaged the chassis, steering or brakes."]
]
});
})();
