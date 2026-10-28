// Module 3 enhanced: roadside diagnosis and quick fixes.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
ENH[2]=Object.assign(ENH[2]||{},{
n:[
"Ask the driver what happened, what they heard and saw, and which warning lights came on. The story often points straight at the fault.",
"Work in order: ask, look, test, decide. Do not start swapping parts before you have found the cause.",
"No start: check battery terminals, battery charge, fuel level, fuses and the starter signal.",
"Overheating: stop, let it cool, never open a hot radiator cap. Check coolant, hoses and belt.",
"Jump start: red to dead +, red to donor +, black to donor -, last black clamp to bare metal on the dead car away from the battery.",
"If the fault is not fixable safely on site, or it is beyond your tools and training, tow."
],
g:[
FIG('<svg viewBox="0 0 300 130" role="img" aria-labelledby="t3a"><title id="t3a">Four step diagnosis method: ask, look, test, decide, with towing as the safe exit</title><defs><marker id="ah3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" class="f-ink"/></marker></defs><rect x="6" y="14" width="62" height="40" rx="6" class="f-hz"/><rect x="80" y="14" width="62" height="40" rx="6" class="f-hz"/><rect x="154" y="14" width="62" height="40" rx="6" class="f-hz"/><rect x="228" y="14" width="66" height="40" rx="6" class="f-hz"/><text x="37" y="31" text-anchor="middle" style="font-weight:700;fill:#1B2430">1 Ask</text><text x="37" y="46" text-anchor="middle" style="font-size:10px;fill:#1B2430">the story</text><text x="111" y="31" text-anchor="middle" style="font-weight:700;fill:#1B2430">2 Look</text><text x="111" y="46" text-anchor="middle" style="font-size:10px;fill:#1B2430">lights, leaks</text><text x="185" y="31" text-anchor="middle" style="font-weight:700;fill:#1B2430">3 Test</text><text x="185" y="46" text-anchor="middle" style="font-size:10px;fill:#1B2430">volts, fuses</text><text x="261" y="31" text-anchor="middle" style="font-weight:700;fill:#1B2430">4 Decide</text><text x="261" y="46" text-anchor="middle" style="font-size:10px;fill:#1B2430">fix or tow</text><path d="M68,34H78M142,34H152M216,34H226" class="f-line" marker-end="url(#ah3)"/><path d="M261,56V78" class="f-red"/><rect x="150" y="80" width="144" height="38" rx="6" fill="none" stroke="#C93A0E" stroke-width="3"/><text x="222" y="96" text-anchor="middle" style="font-weight:700">Not safe, or beyond</text><text x="222" y="111" text-anchor="middle" style="font-weight:700">your limits? Tow.</text><text x="6" y="100">Repeat the loop</text><text x="6" y="114">if the fix fails.</text></svg>','<b>Diagnosis loop.</b> Finish each step before the next. Towing is a normal and safe outcome.'),
FIG('<svg viewBox="0 0 300 160" role="img" aria-labelledby="t3b"><title id="t3b">Battery voltage scale showing flat, low, healthy resting and charging ranges</title><rect x="20" y="40" width="37" height="22" fill="#C93A0E"/><rect x="57" y="40" width="33" height="22" fill="#F2B705"/><rect x="90" y="40" width="30" height="22" fill="#1F7A45"/><rect x="120" y="40" width="71" height="22" fill="#9AA6B4"/><rect x="191" y="40" width="52" height="22" fill="#1F7A45"/><rect x="243" y="40" width="22" height="22" fill="#9AA6B4"/><rect x="265" y="40" width="15" height="22" fill="#C93A0E"/><rect x="20" y="40" width="260" height="22" class="f-line"/><g style="font-size:11px"><text x="14" y="80">11.5</text><text x="45" y="80">12.0</text><text x="90" y="80">12.6</text><text x="180" y="80">13.8</text><text x="230" y="80">14.5</text><text x="262" y="80">15.0</text></g><path d="M102,36V20" class="f-ok"/><text x="20" y="14" style="font-weight:700">Engine off, rested: 12.6 V is healthy</text><path d="M217,64V100" class="f-ok"/><text x="285" y="116" text-anchor="end" style="font-weight:700">Engine running: 13.8 to 14.5 V</text><text x="285" y="130" text-anchor="end" style="font-size:11px">charging system working</text><text x="38" y="102" text-anchor="middle" style="font-size:11px">flat</text><text x="73" y="102" text-anchor="middle" style="font-size:11px">low</text><text x="272" y="102" text-anchor="end" style="font-size:11px">too high</text><text x="8" y="152" style="font-size:11px">Measure with a multimeter set to DC volts.</text></svg>','<b>Battery voltage guide.</b> Resting voltage shows charge. Running voltage shows the alternator.'),
FIG('<svg viewBox="0 0 300 170" role="img" aria-labelledby="t3c"><title id="t3c">No-start symptom guide linking what you see and hear to the likely cause</title><g font-size="12"><rect x="4" y="6" width="130" height="34" rx="5" class="f-fill"/><text x="12" y="21" style="font-weight:700">Cranks slowly</text><text x="12" y="34" style="font-size:11px">lights dim</text><path d="M134,23H164" class="f-line"/><rect x="164" y="6" width="132" height="34" rx="5" class="f-hz"/><text x="172" y="21" style="font-weight:700;fill:#1B2430">Weak battery,</text><text x="172" y="34" style="font-size:11px;fill:#1B2430">poor connections</text><rect x="4" y="48" width="130" height="34" rx="5" class="f-fill"/><text x="12" y="63" style="font-weight:700">Only clicks</text><text x="12" y="76" style="font-size:11px">no crank</text><path d="M134,65H164" class="f-line"/><rect x="164" y="48" width="132" height="34" rx="5" class="f-hz"/><text x="172" y="63" style="font-weight:700;fill:#1B2430">Weak battery or</text><text x="172" y="76" style="font-size:11px;fill:#1B2430">starter solenoid</text><rect x="4" y="90" width="130" height="34" rx="5" class="f-fill"/><text x="12" y="105" style="font-weight:700">No lights, no crank</text><text x="12" y="118" style="font-size:11px">dash dead</text><path d="M134,107H164" class="f-line"/><rect x="164" y="90" width="132" height="34" rx="5" class="f-hz"/><text x="172" y="105" style="font-weight:700;fill:#1B2430">Dead battery or</text><text x="172" y="118" style="font-size:11px;fill:#1B2430">loose terminal</text><rect x="4" y="132" width="130" height="34" rx="5" class="f-fill"/><text x="12" y="147" style="font-weight:700">Cranks, will not start</text><text x="12" y="160" style="font-size:11px">normal speed</text><path d="M134,149H164" class="f-line"/><rect x="164" y="132" width="132" height="34" rx="5" class="f-hz"/><text x="172" y="147" style="font-weight:700;fill:#1B2430">Fuel, spark or air</text><text x="172" y="160" style="font-size:11px;fill:#1B2430">diesel: filter, air</text></g></svg>','<b>No-start guide.</b> Match the sound and the lights to the most likely cause, then test it.')
],
d:[
["A simple method",[
"Ask what happened, observe, test, then decide. Write down what you find.",
"Check lights, fuel, fuses and belts first. Most roadside faults are simple.",
"Use your senses: smell fuel or burning, listen for clicks, grinding or hissing, look for leaks, smoke and loose wires.",
"A rested 12 V battery reads about 12.6 V. With the engine running it should read about 13.8 to 14.5 V."]],
["Warning lights",[
"Red means stop. Oil pressure, brake system, high temperature and charging warnings are serious. Stop the engine safely.",
"Amber or yellow means check soon. Engine management, ABS and tyre pressure are common examples.",
"An OBD scanner reads stored fault codes on most modern vehicles. A code points to a system, not always to a part, so test before you replace anything.",
"Do not clear codes before you note them. The customer or garage may need them."]],
["No-start guide",[
"Cranks slowly: weak battery or poor connections.",
"Only clicks: weak battery or starter solenoid.",
"No lights and no crank: dead battery or disconnected terminals.",
"Cranks normally but no start: fuel, spark or air. On diesels, check the fuel filter and air in the lines.",
"Key fob not recognised: try the spare key or a fresh fob battery. Immobiliser lights flashing mean the car may be refusing the key.",
"Wrong fuel put in the tank: do not start the engine. Tow the vehicle for draining."]],
["Jump starting safely",[
"Use leads of the right size. Park the cars close but not touching, with both engines and ignition off.",
"Red clamp to dead battery +, red to donor +, black to donor -, and the last black clamp to bare metal on the dead car, away from the battery.",
"Start the donor, wait a minute, then start the dead car. Remove the clamps in reverse order.",
"Never jump a cracked, leaking or frozen battery. Check the manual: some hybrids and EVs have set jump points, and some must not be jumped at all.",
"If the car dies again after a jump, the battery or the charging system is faulty. Tell the customer."]],
["Overheating and fluids",[
"Stop in a safe place and switch off. Open the bonnet to help it cool but stand back.",
"Never open a radiator or coolant cap while it is hot. The system is under pressure and can spray scalding liquid and steam.",
"Check coolant only when the engine is cold. Look for leaking hoses, a broken belt or a dead fan.",
"White smoke or sweet-smelling steam suggests coolant. Blue smoke suggests burning oil. Black smoke suggests too much fuel.",
"Red oil warning light: stop the engine. Do not drive on.",
"Check brake fluid and power steering fluid for leaks."]],
["When to tow instead",[
"Brake or steering faults, major leaks, red warning lights, smoke or severe noise.",
"A broken timing belt can wreck some engines if cranked. Do not keep trying to start.",
"The vehicle is unsafe to drive, or the fix needs tools or skills you do not have.",
"Be honest with the customer. A tow is cheaper than a wrecked engine."]],
["Talking to the customer",[
"Explain the cause in plain words and give the options with prices before you start.",
"Make sure they understand what you did. Note the time, the findings and any advice they refused.",
"Stay within your limits and insurance. Do not promise a repair you cannot guarantee."]]
],
q:[
["Where does the last jump lead clamp go?",["Dead battery negative post","Bare metal away from the battery","Radiator cap","Donor positive post"],1,"The final connection can spark. Putting it away from the battery keeps the spark away from explosive battery gas."],
["An overheated engine: you should",["Open the cap at once","Pour cold water on it","Let it cool before opening the cap","Rev it to cool it"],2,"The coolant is hot and under pressure. Opening the cap early can spray scalding liquid."],
["A battery that goes flat again after charging suggests:",["A charging fault or drain","A good battery","Too much fuel","Worn tyres"],0,"Either the alternator is not charging or something is draining the battery when the car is off."],
["A healthy charging system at the battery with the engine running shows about:",["10 V","12.6 V","13.8 to 14.5 V","18 V"],2,"The alternator must supply more than the resting voltage to charge the battery."],
["The engine cranks slowly and the lights dim. Most likely:",["Weak battery or poor connections","Empty fuel tank","Bad spark plugs","Low tyre pressure"],0,"High current is needed to crank. A weak battery or a corroded terminal cannot supply it."],
["A rested 12 V battery should read about:",["8 V","10 V","12.6 V","14.8 V"],2,"12.6 V is a fully charged battery at rest. Below about 12.0 V it is nearly flat."],
["A clicking sound and no crank suggests:",["A weak battery or starter solenoid","A faulty fuel pump","A flat tyre","A blown bulb"],0,"The solenoid clicks but there is not enough current, or the contacts are worn."],
["No lights and no crank suggests:",["A dead battery or disconnected terminals","Water in the fuel","A bad radio","A weak fan belt"],0,"With no power at all, start at the battery and its terminals."],
["The radiator cap should be opened:",["Only when the engine is cold","While running","When steam shows","At any time"],0,"A cold system is no longer under dangerous pressure."],
["A red oil warning light means:",["Stop the engine","Top up screenwash","Drive on carefully","Check tyres later"],0,"Oil pressure loss destroys an engine within minutes."],
["A diesel cranks but will not start. Check:",["Fuel filter and air in the lines","The radio fuse","Wiper blades","The horn"],0,"Diesels need clean fuel with no air. A blocked filter or air in the lines stops them."],
["Which fault means tow, not repair on site?",["Brake failure","A flat battery","A blown bulb","A loose cap"],0,"A vehicle without reliable brakes must not be driven or repaired in a rush at the roadside."],
["What does a red warning light on the dashboard generally mean?",["Check soon","Stop safely and investigate","Ignore until service","The bulb is on test"],1,"Red lights flag serious faults such as oil pressure, brakes, overheating or charging."],
["Why should you note fault codes before clearing them?",["To save time","Because the codes point to the system at fault and may be needed later","Clearing is illegal","They are always wrong"],1,"Codes are evidence. Clearing them first loses information the garage or customer needs."],
["Someone puts petrol in a diesel car and has not started it. You advise:",["Start it and drive slowly","Add oil","Do not start it, tow it to be drained","Add water"],2,"Starting the engine circulates the wrong fuel and can destroy the fuel system."],
["Why is a car that dies again after a jump start a concern?",["The jump leads are bad","The battery or charging system is faulty","The key is worn","The tyres are cold"],1,"A jump only supplies power. If the car stops again, the battery will not hold charge or the alternator is not charging."],
["White smoke with a sweet smell from the exhaust or bonnet often suggests:",["Burning oil","Coolant loss","Rich fuel","A blocked air filter"],1,"Coolant burning or boiling gives white smoke or steam with a sweet smell."],
["Which tool reads stored fault codes on most modern vehicles?",["A torque wrench","An OBD scanner","A tyre gauge","A hydrometer only"],1,"An OBD scanner connects to the diagnostic port and shows fault codes."],
["Before you start a repair at the roadside, the customer should:",["Be told nothing","Understand the cause, the options and the cost","Pay in full","Sign a blank form"],1,"Clear information and agreement before work prevents disputes."],
["A timing belt is thought to have broken. You should:",["Keep cranking to check","Stop cranking and tow","Add oil","Tap the belt cover"],1,"Cranking an engine with a broken timing belt can bend valves and wreck the engine."]
]
});
