// Module 7 enhanced: off-road 4x4 recovery.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const kin='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t7a"><title id="t7a">Kinetic rope recovery: the recovery vehicle starts with slack, bystanders stay back at least one and a half times the rope length</title><line x1="0" y1="96" x2="300" y2="96" class="f-line"/><path d="M200,96 Q215,60 230,60 L262,60 Q276,62 280,76 L286,84 L286,96 Z" class="f-hz"/><circle cx="222" cy="96" r="9" class="f-gray"/><circle cx="268" cy="96" r="9" class="f-gray"/><path d="M12,96 Q18,60 32,60 L64,60 Q78,62 82,76 L90,84 L90,96 Z" class="f-fill"/><circle cx="34" cy="96" r="9" class="f-gray" transform="translate(0,6)"/><circle cx="72" cy="96" r="9" class="f-gray" transform="translate(0,6)"/><path d="M90,84 Q120,104 150,92 Q180,80 200,84" class="f-red"/><rect x="140" y="82" width="16" height="12" rx="2" fill="#1B2430" opacity=".75"/><text x="48" y="48" text-anchor="middle" style="font-size:12px">stuck</text><text x="244" y="48" text-anchor="middle" style="font-size:12px">recovery vehicle</text><text x="148" y="76" text-anchor="middle" style="font-size:11px">damper</text><path d="M200,120 H12" class="f-ok"/><text x="106" y="138" text-anchor="middle" style="font-size:12px;font-weight:700">Bystanders: 1.5 x rope length away</text><text x="150" y="16" text-anchor="middle" style="font-weight:700">Start with slack, pull away smoothly</text></svg>';
const tyres='<svg viewBox="0 0 300 140" role="img" aria-labelledby="t7b"><title id="t7b">Lower tyre pressure in sand gives a longer footprint so the tyre floats instead of digging in</title><path d="M0,100 H300 V140 H0 Z" fill="#E7C98B" opacity=".6"/><line x1="0" y1="100" x2="300" y2="100" class="f-line"/><circle cx="75" cy="68" r="32" class="f-gray"/><circle cx="75" cy="68" r="12" class="f-fill"/><path d="M62,98 H88" class="f-red"/><text x="75" y="120" text-anchor="middle" style="font-size:11px">high pressure:</text><text x="75" y="134" text-anchor="middle" style="font-size:11px">small footprint</text><ellipse cx="225" cy="73" rx="38" ry="28" class="f-gray"/><circle cx="225" cy="70" r="12" class="f-fill"/><path d="M190,100 H260" class="f-ok"/><text x="225" y="120" text-anchor="middle" style="font-size:11px">lower pressure:</text><text x="225" y="134" text-anchor="middle" style="font-size:11px">wide footprint</text><text x="150" y="16" text-anchor="middle" style="font-weight:700">Air down in sand, then re-inflate</text></svg>';
const water='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t7c"><title id="t7c">Water crossing depth: water must stay below the air intake and electrics. Walk the crossing first.</title><path d="M0,98 H300 V150 H0 Z" fill="#1F5FAE" opacity=".45"/><path d="M26,98 L26,64 Q30,40 54,38 L120,38 Q146,40 160,54 L184,62 Q198,66 200,84 L200,98 Z" class="f-hz"/><circle cx="66" cy="98" r="13" class="f-gray"/><circle cx="158" cy="98" r="13" class="f-gray"/><rect x="134" y="42" width="20" height="14" class="f-fill"/><text x="144" y="34" text-anchor="middle" style="font-size:11px">air intake</text><path d="M230,98 V56" class="f-line"/><path d="M222,60 H238 M222,74 H238 M222,88 H238" class="f-thin"/><text x="244" y="64" style="font-size:11px">too deep</text><path d="M214,98 H246" class="f-line"/><text x="14" y="136" style="font-size:12px;font-weight:700">Walk it first. Slow, steady, no stopping.</text><text x="150" y="16" text-anchor="middle" style="font-weight:700">Water must stay below the intake</text></svg>';
const pts='<svg viewBox="0 0 300 130" role="img" aria-labelledby="t7d"><title id="t7d">Good and bad recovery points: a rated frame point with a bow shackle is good, a tow ball or plastic bumper is not</title><rect x="6" y="8" width="138" height="116" rx="6" class="f-fill"/><rect x="156" y="8" width="138" height="116" rx="6" class="f-fill"/><circle cx="40" cy="40" r="14" class="f-okf"/><path d="M33,40 L38,46 L48,34" fill="none" stroke="#fff" stroke-width="3"/><rect x="26" y="66" width="28" height="12" class="f-gray"/><rect x="62" y="64" width="24" height="16" rx="8" class="f-gray"/><text x="75" y="98" text-anchor="middle" style="font-size:11px;font-weight:700">Rated frame point</text><text x="75" y="112" text-anchor="middle" style="font-size:11px">+ bow shackle</text><circle cx="190" cy="40" r="14" class="f-redf"/><path d="M183,33 L197,47 M197,33 L183,47" fill="none" stroke="#fff" stroke-width="3"/><circle cx="224" cy="72" r="9" class="f-gray"/><rect x="220" y="56" width="8" height="14" class="f-gray"/><text x="225" y="98" text-anchor="middle" style="font-size:11px;font-weight:700">Tow ball, bumper,</text><text x="225" y="112" text-anchor="middle" style="font-size:11px">axle, towbar tongue</text></svg>';
ENH[6]=Object.assign(ENH[6]||{},{
n:[
"Bogged means stuck in soft ground such as mud or sand. Stop the wheels spinning first or you dig in deeper.",
"Walk the ground, clear mud from under the vehicle and look for the route out. Do not guess.",
"In sand, lowering tyre pressure widens the footprint. Carry a compressor to re-inflate.",
"Traction aids: recovery boards or branches. Engage 4x4, low range and diff lock if fitted. Use gentle throttle.",
"A kinetic rope stretches and stores energy to pull a vehicle free. A static strap does not stretch. Match the rating to the vehicle weight.",
"Use rated recovery points and bow shackles only. A tow ball is not a recovery point. Never join straps with a knot.",
"Drape a damper on the rope. A common rule is to keep bystanders back at least 1.5 times the length of the line.",
"Deep water: check depth on foot. Water above the air intake can wreck the engine. If it stalls, do not restart. Tow it out."
],
g:[FIG(kin,'<b>Kinetic rope pull.</b> The recovery vehicle starts with slack and pulls away smoothly. The stuck driver drives out at the same time.'),FIG(tyres,'<b>Tyre pressure in sand.</b> A wider footprint spreads the load and floats the vehicle on top.'),FIG(pts,'<b>Recovery points.</b> Use rated frame points with rated bow shackles.'),FIG(water,'<b>Water crossing.</b> Know the depth and where the air intake is before you drive in.')],
d:[
["Reading the ground",[
"Mud can be slick or deep. Sand can be soft or firm. Ruts and ridges can high-centre a vehicle.",
"Check ground clearance and approach and departure angles.",
"Plan the pull direction, usually back along the way the vehicle came.",
"Check for hidden hazards such as rocks, stumps, drops and soft edges before you commit the recovery vehicle."]],
["Self-recovery first",[
"Stop spinning the wheels. Clear mud and sand from under the vehicle and in front of the tyres.",
"Use traction aids under the drive wheels. Engage low range and diff lock if fitted.",
"In sand, lower the tyre pressure to widen the footprint. Re-inflate once you are on firm ground.",
"Gentle, steady throttle. Rocking the vehicle gently forward and back can help but never wheelspin."]],
["Recovery methods",[
"Self recovery: dig, boards, lower tyre pressure in sand.",
"Kinetic rope: quick, but both drivers must work together. It is for pulling a stuck vehicle free, not for long tows.",
"Winch: slow and controlled, best in tight spots or for heavy loads.",
"Double line or snatch block: when one line is not enough."]],
["Kinetic rope technique",[
"Choose a rope rated well above the stuck vehicle's weight. Follow the maker's sizing chart.",
"Connect to rated recovery points with bow shackles or soft shackles. Never to tow balls, bumpers or axles.",
"The recovery vehicle starts with a little slack and pulls away gently. The stuck driver drives out at the same time.",
"Stop at once if anything looks wrong. Never repeat full-power pulls on a damaged rope.",
"Drape a damper and keep everyone clear. Windows closed in both vehicles."]],
["Water crossings",[
"Walk the crossing first and check depth and the bottom.",
"Know where the air intake is. Water above it can enter the engine and lock it up (hydro-lock).",
"Keep a steady, slow speed to make a small bow wave. Do not stop in deep water.",
"If the engine stalls in water, do not try to restart it. Tow it out and have it checked.",
"Afterwards test the brakes gently and check the oil for a milky look."]],
["Common mistakes",[
"Using a tow ball as a recovery point.",
"Using a knot to join straps.",
"Pulling hard from a standing start with no slack or a rope that is too short.",
"Letting bystanders stand close or in line with the rope."]]
],
q:[
["Which must not be used as a recovery point?",["Rated frame point","Tow ball","Rated shackle","Rated hook"],1,"A tow ball is made for towing a trailer. It can break off and fly."],
["A kinetic rope differs from a static strap because it:",["Stretches and stores energy","Is lighter","Cannot break","Is cheaper"],0,"Stretch stores energy which helps pull a stuck vehicle free."],
["A 4x4 that stalls in deep water should be:",["Restarted at once","Towed out, not restarted","Revved","Left running"],1,"Water in the cylinders can wreck the engine if you crank it."],
["Your 4x4 is bogged and the wheels are spinning. First:",["Rev harder","Stop the wheels spinning and assess","Reverse fast","Add fuel"],1,"Spinning digs the vehicle deeper."],
["In soft sand, lower tyre pressure helps by:",["Widening the footprint","Making it taller","Cooling the tyre","Saving fuel"],0,"A larger footprint spreads the weight."],
["Carry a compressor to:",["Re-inflate tyres afterwards","Cool the engine","Wash the car","Test fuel"],0,"Tyres must be pumped up again before driving on hard roads."],
["A kinetic rope rating should be:",["Well above the stuck vehicle's weight","The same","Below the weight","Not important"],0,"A margin covers shock loading."],
["Water above the air intake can cause:",["Hydro-lock","Better cooling","Higher power","Nothing"],0,"Water cannot be compressed and can bend rods."],
["After a water crossing, check:",["Brakes and the oil for a milky look","The radio","The mirror","The seats"],0,"Water can reduce braking and contaminate oil."],
["A bow shackle beats a hook because it:",["Takes loads from several angles","Is lighter","Is cheaper","Never breaks"],0,"A bow shackle is designed for angled pulls. A hook can be loaded badly."],
["The best recovery pull direction is usually:",["Back along the way the vehicle came","Across the slope","Into the bog","Up the hill"],0,"That path is already known to be passable."],
["Why must both drivers work together in a kinetic recovery?",["To save fuel","The rope's stored energy helps pull the vehicle free only if the stuck driver drives out too","It looks neat","It is a legal rule"],1,"Both vehicles contribute. The rope's energy releases when the pull begins."],
["A common rule for bystander distance in a kinetic recovery is:",["1 m","1.5 times the rope length","The length of the rope only","No need"],1,"A broken rope or shackle can fly further than the rope length."],
["The purpose of a damper on the rope is to:",["Look neat","Reduce whip if the rope fails","Count turns","Mark the middle"],1,"It absorbs energy and drops the rope."],
["You join two straps by tying a knot. This is:",["Fine","Unsafe, because knots weaken straps","Required","A good habit"],1,"Knots greatly reduce strength. Use rated shackles instead."],
["Before crossing water, you should:",["Drive straight in","Walk it first to check depth and bottom","Open the windows","Turn off the lights"],1,"Hidden holes and deep water are hazards."],
["Why keep a steady slow speed in water?",["To save fuel","To make a small bow wave that keeps water away from the engine","To impress","To warm the tyres"],1,"A big wave or stalling can flood the intake."],
["Low range and diff lock help by:",["Giving more traction and torque at low speed","Making it faster","Cooling","Steering"],0,"They provide the control and traction needed off-road."],
["After a damaged kinetic rope has taken a shock load you should:",["Keep using it","Inspect it and retire it if in doubt","Wash it","Tie it shorter"],1,"Hidden damage can cause it to fail later."],
["Why choose a rated recovery point on the frame over a bumper?",["It is shiny","The frame can take the load, the bumper cannot","It costs less","It is quieter"],1,"Bumpers and plastic parts can tear off and fly."]
]
});
})();
