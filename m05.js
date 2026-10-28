// Module 5 enhanced: towing methods and vehicle types.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const car=(x,y,col,extra)=>'<g transform="translate('+x+','+y+')"><path d="M0,22 L0,12 Q2,5 12,4 L24,3 Q30,-5 44,-5 L56,-4 Q64,0 68,4 L74,6 Q78,9 78,16 L78,22 Z" fill="'+col+'" stroke="#1B2430" stroke-width="2"/>'+(extra||'')+'</g>';
const wh=(x,y,up)=>'<circle cx="'+x+'" cy="'+y+'" r="9" class="f-gray"/><circle cx="'+x+'" cy="'+y+'" r="3" class="f-fill"/>';
const matrix='<svg viewBox="0 0 300 175" role="img" aria-labelledby="t5a"><title id="t5a">Which end to lift for each drive type: front wheel drive lift the front, rear wheel drive lift the rear, all wheel drive and electric use a flatbed</title>'+
['Front-wheel drive','Rear-wheel drive','All-wheel drive','Electric or hybrid'].map((t,i)=>{const y=6+i*42;
const note=['Wheel-lift, front up','Wheel-lift, rear up','Flatbed','Flatbed'][i];
const mark=[ '<path d="M70,-14 V-2" class="f-red"/><path d="M64,-8 L70,-14 L76,-8" class="f-red"/>','<path d="M8,-14 V-2" class="f-red"/><path d="M2,-8 L8,-14 L14,-8" class="f-red"/>','<path d="M-4,34 H84" class="f-ok"/>','<path d="M-4,34 H84" class="f-ok"/>'][i];
return '<rect x="4" y="'+y+'" width="292" height="38" rx="6" class="f-fill"/><text x="12" y="'+(y+17)+'" style="font-weight:700">'+t+'</text><text x="12" y="'+(y+31)+'" style="font-size:11px">'+note+'</text><g transform="translate(190,'+(y+14)+') scale(.6)">'+car(0,0,'#F2B705')+'<circle cx="14" cy="22" r="8" class="f-gray"/><circle cx="64" cy="22" r="8" class="f-gray"/>'+mark+'</g>'}).join('')+'</svg>';
const bed='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t5b"><title id="t5b">Loading a car on a flatbed using a low ramp angle and a winch line to a rated recovery point</title><line x1="0" y1="132" x2="300" y2="132" class="f-line"/><rect x="8" y="64" width="62" height="42" rx="6" class="f-hz"/><rect x="14" y="70" width="22" height="16" class="f-fill"/><rect x="72" y="96" width="150" height="10" class="f-fill"/><path d="M222,96 L292,128 L292,132 L222,106 Z" class="f-fill"/><circle cx="38" cy="116" r="14" class="f-gray"/><circle cx="130" cy="116" r="14" class="f-gray"/><circle cx="190" cy="116" r="14" class="f-gray"/><g transform="translate(228,86) rotate(24)"><path d="M0,0 L0,-10 Q2,-17 12,-18 L24,-19 Q30,-27 44,-27 L56,-26 Q64,-22 68,-18 L74,-16 Q78,-13 78,-6 L78,0 Z" class="f-hz"/><circle cx="14" cy="2" r="7" class="f-gray"/><circle cx="62" cy="2" r="7" class="f-gray"/></g><path d="M72,92 L228,86" class="f-red"/><circle cx="76" cy="92" r="4" class="f-redf"/><text x="150" y="20" text-anchor="middle" style="font-weight:700">Low ramp angle, winch line to a rated point</text><text x="150" y="38" text-anchor="middle" style="font-size:12px">Keep people out of line of the winch rope</text><text x="150" y="148" text-anchor="middle" style="font-size:11px">Handbrake on and chocked once loaded</text></svg>';
const tie='<svg viewBox="0 0 300 140" role="img" aria-labelledby="t5c"><title id="t5c">Four point tie down: one strap from each corner of the car to the bed</title><rect x="20" y="14" width="260" height="110" rx="4" class="f-fill"/><rect x="95" y="38" width="110" height="62" rx="12" fill="#F2B705" stroke="#1B2430" stroke-width="2"/><rect x="108" y="46" width="30" height="46" rx="4" class="f-fill"/><rect x="162" y="46" width="30" height="46" rx="4" class="f-fill"/><g class="f-red"><path d="M100,44 L38,22"/><path d="M200,44 L262,22"/><path d="M100,94 L38,116"/><path d="M200,94 L262,116"/></g><g class="f-redf"><circle cx="38" cy="22" r="5"/><circle cx="262" cy="22" r="5"/><circle cx="38" cy="116" r="5"/><circle cx="262" cy="116" r="5"/></g><text x="150" y="136" text-anchor="middle" style="font-size:11px">One rated strap at each corner</text></svg>';
ENH[4]=Object.assign(ENH[4]||{},{
n:[
"Flatbed: best for all-wheel-drive, low, damaged or valuable cars.",
"Wheel-lift: lift the driven wheels. Front-wheel-drive is lifted at the front.",
"Rear-wheel-drive automatics: lift the rear, use dollies, or remove the propshaft. Towing on the drive wheels can damage the gearbox.",
"Check steering lock, handbrake, lights and tow-bar rating before moving.",
"Keep speed low and allow longer braking distance.",
"Know the vehicle's weight and your truck's rating before lifting. Some automatics must not be towed with the driven wheels on the ground. Check the owner's manual.",
"Electric and hybrid cars are usually carried on a flatbed. Follow the maker's towing guide."
],
g:[FIG(matrix,'<b>Match the method to the drive type.</b> The wheels that drive the car should not turn on the road unless the maker allows it.'),FIG(bed,'<b>Flatbed loading.</b> A low angle protects the car and the winch line pulls straight to a rated recovery point.'),FIG(tie,'<b>Tie-down layout.</b> Straps hold the car on four points. Straps go to rated points on the car, never to brake lines or loose parts.')],
d:[
["Towing methods",[
"Flatbed (rollback): the car rides fully on the bed. Best for all-wheel-drive, low, damaged, valuable or electric cars.",
"Wheel-lift: a yoke or sling lifts one axle. Quick and good for short moves of cars with a working axle.",
"Integrated or underlift: grips the frame and suits heavy vehicles.",
"Tow bar or A-frame: a rigid link used for recovery and short moves. Needs a safety link and working lights on the towed vehicle.",
"Dollies: small wheeled frames put under the wheels that must not roll. Used when the driven wheels are locked or must not touch the road.",
"Avoid old hook-and-chain methods. They damage bumpers and can strip body panels."]],
["Know your weights and ratings",[
"Know the weight of the vehicle you will lift or load. Check the truck's lifting and towing ratings and the tow bar rating.",
"Overloading the truck or its axles reduces braking and steering and can be illegal.",
"Heavy vehicles and damaged loads need more than one operator and the right kit. Do not improvise."]],
["Hook-up basics",[
"Use a rated tow bar or A-frame, a secondary safety attachment, and working lights on the towed vehicle.",
"Unlock the steering. Turn the key to ON so the column stays free.",
"With the engine off, the steering is heavier and the brake has little assist after a few presses. Allow much longer stopping distances.",
"Release the handbrake only when the vehicle is secured, and apply it before leaving.",
"Never allow anyone to ride in a towed vehicle."]],
["Loading and securing on a flatbed",[
"Use a ramp angle as low as you can. Use a winch with a line to a rated recovery point. Do not winch from a bumper or loose part.",
"Secure with four tie-downs, one at each corner, using straps and points that are rated for the load. Put the vehicle in park, or in gear, and set the handbrake.",
"Lock the steering and chock the wheels if you can. Fit a cover or protector over sharp edges.",
"Walk around and re-check straps after the first few hundred metres, and at each stop."]],
["Driving while towing",[
"Keep the line taut. Brake early and gently. Take bends wide.",
"Keep speed low and constant. Avoid sharp turns and sudden stops. Follow the vehicle maker's limits and the law for speed and distance.",
"Check trailer brakes, coupling and safety chain before every move.",
"Use hazard lights where the law allows. Allow more room to overtake and more distance to stop."]],
["Special cases",[
"Locked or seized wheels: use dollies or a flatbed.",
"Low cars: use slide-on ramps to avoid scraping the front.",
"Accident damage: check tyres, axles and steering before any wheel stays on the ground.",
"Electric and hybrid cars: wheels turned by the road can generate power and damage the motor. Use a flatbed unless the maker says otherwise.",
"Automatic gearboxes: many must not be towed with the driven wheels on the ground. Use a flatbed, dollies or remove the propshaft."]]
],
q:[
["Best method for an all-wheel-drive car:",["Flatbed","Hook and chain","Tow rope","Drive it"],0,"A flatbed keeps all wheels off the road so the drivetrain is not turned."],
["Towing a front-wheel-drive car on a wheel-lift, lift the:",["Rear wheels","Front wheels","Left side","Nothing"],1,"The driven wheels are lifted so they do not turn the gearbox."],
["Why check steering lock and handbrake before towing?",["For fuel savings","So the car can steer and will not roll","To start the engine","For the radio"],1,"A locked steering column makes the towed car unsteerable. An applied handbrake drags."],
["Towing with the engine off means:",["Heavier steering and less brake assist","No change","Faster braking","Lighter steering"],0,"Power steering and the brake booster need the engine to work."],
["A car with a damaged front axle needs moving. The best method is:",["Wheel-lift on the front","Flatbed","Tow rope","Drive it"],1,"A damaged axle must not stay on the ground."],
["An electric car must be moved. The usual safe method is:",["Wheel-lift","Flatbed","Tow rope","Hook and chain"],1,"Turning the driven wheels can generate power and damage the motor and electronics."],
["A flatbed suits:",["All-wheel-drive, low and damaged vehicles","Only trucks","Only motorcycles","Nothing"],0,"The whole vehicle is carried so it is the most flexible method."],
["A rear-wheel-drive automatic on a wheel-lift is best:",["Lifted at the rear or on dollies","Lifted at the front","Left on the ground","Wheels turning"],0,"The driven wheels must not turn the gearbox without lubrication."],
["The steering lock must be:",["Released before towing","Locked","Welded","Ignored"],0,"A locked column cannot steer and can break."],
["Towing with the engine off needs:",["Longer braking distance","Shorter distance","Faster speed","No change"],0,"Brake assist runs out after a few presses."],
["Locked or seized wheels are best moved with:",["Dollies or a flatbed","Dragging","A rope","A jack"],0,"They cannot turn, so they must be lifted or carried."],
["Slide-on ramps help with:",["Low cars","Tall trucks","Tyre changes","Fuel"],0,"They reduce the approach angle to avoid scraping the front."],
["Before towing, check:",["Tow bar rating and lights","Radio","Wipers","Air freshener"],0,"The bar must hold the load and the towed car must show lights."],
["How many tie-down points are normally used to secure a car on a flatbed?",["One","Two","Four, one at each corner","Eight"],2,"Four-point tie-down is the usual way to restrain a car."],
["Where should you attach the winch line when loading a car?",["The bumper trim","A rated recovery point","The exhaust","The wiper arm"],1,"Only rated points are strong enough and safe."],
["Why is a low ramp angle better?",["It looks neat","It reduces scraping and strain on the winch","It is cheaper","It is illegal to use a high one"],1,"A shallow angle protects the car and needs less pull."],
["May anyone ride in a towed vehicle?",["Yes, the driver","Yes, a child","No","Only on a flatbed"],2,"The towed car has little control and no brake assist. Nobody should be in it."],
["A hook-and-chain method is generally avoided because it:",["Is too quick","Can damage bumpers and body panels","Needs no training","Is silent"],1,"Modern bumpers and panels are not built to take that load."],
["You must tow an automatic car with the driven wheels on the ground. You should first:",["Do it anyway","Check the owner's manual for limits or use dollies/flatbed","Add fuel","Put it in park"],1,"Many automatics can be damaged. Follow the maker's guidance."],
["After loading a car, when should you re-check the straps?",["Never","After the first few hundred metres and at each stop","Only at the end","Once a week"],1,"Straps settle and loosen with movement."]
]
});
})();
