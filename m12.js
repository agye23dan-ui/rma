// Module 12 enhanced: business basics.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const segs=[['Call-out',64,'#F2B705'],['Distance',70,'#9AA6B4'],['Labour',60,'#1F5FAE'],['Gear',44,'#1F7A45'],['Night',44,'#C93A0E']];
let x=10;const bar=segs.map(s=>{const r='<rect x="'+x+'" y="34" width="'+s[1]+'" height="34" fill="'+s[2]+'" stroke="#1B2430" stroke-width="2"/><text x="'+(x+s[1]/2)+'" y="86" text-anchor="middle" style="font-size:10px">'+s[0]+'</text>';x+=s[1];return r}).join('');
const price='<svg viewBox="0 0 300 130" role="img" aria-labelledby="t12a"><title id="t12a">How a recovery quote is built up from call-out fee, distance, labour, equipment and after-hours rate</title><text x="150" y="20" text-anchor="middle" style="font-weight:700">A quote is built from parts</text>'+bar+'<text x="150" y="112" text-anchor="middle" style="font-size:11px">Show each part on the quote.</text></svg>';
const sheet='<svg viewBox="0 0 300 170" role="img" aria-labelledby="t12b"><title id="t12b">Dispatch call sheet: caller, phone, exact location, vehicle, fault, people, hazards, time</title><rect x="20" y="6" width="260" height="158" rx="6" class="f-fill"/><text x="30" y="24" style="font-weight:700">Call sheet</text>'+['Caller and phone','Exact location, landmarks','Vehicle and registration','Fault, and is it safe?','People and any injuries','Hazards, traffic, fuel','Time of call and ETA'].map((t,i)=>'<text x="30" y="'+(44+i*17)+'" style="font-size:11px">'+(i+1)+'. '+t+'</text><line x1="30" y1="'+(48+i*17)+'" x2="270" y2="'+(48+i*17)+'" class="f-thin"/>').join('')+'</svg>';
const cost='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t12c"><title id="t12c">Price must cover fixed costs, running costs and a profit for replacing equipment</title><rect x="10" y="20" width="84" height="100" class="f-gray"/><text x="52" y="60" text-anchor="middle" style="font-weight:700;fill:#1B2430">Fixed</text><text x="52" y="76" text-anchor="middle" style="font-size:10px;fill:#1B2430">insurance,</text><text x="52" y="88" text-anchor="middle" style="font-size:10px;fill:#1B2430">licence, loan</text><rect x="94" y="20" width="96" height="100" class="f-hz"/><text x="142" y="60" text-anchor="middle" style="font-weight:700;fill:#1B2430">Running</text><text x="142" y="76" text-anchor="middle" style="font-size:10px;fill:#1B2430">fuel, tyres, wages,</text><text x="142" y="88" text-anchor="middle" style="font-size:10px;fill:#1B2430">repairs, gear</text><rect x="190" y="20" width="100" height="100" fill="#1F7A45" stroke="#1B2430" stroke-width="2"/><text x="240" y="60" text-anchor="middle" style="font-weight:700;fill:#fff">Profit</text><text x="240" y="76" text-anchor="middle" style="font-size:10px;fill:#fff">saving for new truck,</text><text x="240" y="88" text-anchor="middle" style="font-size:10px;fill:#fff">tax, growth</text><text x="150" y="14" text-anchor="middle" style="font-weight:700">What the price must cover</text><text x="150" y="142" text-anchor="middle" style="font-size:11px">If your price is too low, the business cannot last.</text></svg>';
const maint='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t12d"><title id="t12d">Maintenance rhythm: daily, weekly, monthly and yearly checks for the truck and recovery gear</title>'+[['Daily','lights, tyres, fluids, winch, load straps'],['Weekly','shackles, hooks, slings, wire rope'],['Monthly','brakes, hydraulics, battery, jacks'],['Yearly','full service, load tests, records']].map((r,i)=>'<rect x="6" y="'+(8+i*34)+'" width="288" height="30" rx="5" class="f-fill"/><rect x="6" y="'+(8+i*34)+'" width="70" height="30" rx="5" class="f-hz"/><text x="41" y="'+(28+i*34)+'" text-anchor="middle" style="font-weight:700;fill:#1B2430">'+r[0]+'</text><text x="84" y="'+(28+i*34)+'" style="font-size:11px">'+r[1]+'</text>').join('')+'</svg>';
ENH[11]=Object.assign(ENH[11]||{},{
n:[
"Price by distance, vehicle weight, hours, risk and equipment used. Keep a clear price list.",
"Dispatch: take caller name, number, exact location, vehicle, fault and number of people.",
"Keep insurance current for the truck, cargo and staff.",
"Maintain your own truck, winch and straps. A failed recovery truck costs jobs.",
"A safe, honest and reliable service builds the reputation that brings repeat work.",
"Records, receipts and good paperwork protect the business and keep it legal."
],
g:[FIG(price,'<b>Quote parts.</b> Customers accept a fair quote they can understand.'),FIG(sheet,'<b>Call sheet.</b> The same seven questions on every call keep dispatch safe and complete.'),FIG(cost,'<b>Pricing.</b> Cover fixed costs, running costs and a profit, or the business cannot replace worn equipment.'),FIG(maint,'<b>Maintenance rhythm.</b> Small regular checks cost less than a failed truck.')],
d:[
["Pricing",[
"Typical parts: call-out fee, distance, hourly labour, special equipment and after-hours rate.",
"Quote before work where possible. Invoice clearly with a breakdown.",
"Know your cost per kilometre and per hour. Include fuel, tyres, wages, repairs, insurance and depreciation.",
"Adjust for risk: night work, bad weather, heavy or difficult recoveries."]],
["Dispatch and records",[
"Log every call: time, caller, location, vehicle, fault and people involved.",
"If the caller cannot say where they are, ask for landmarks and a shared phone location.",
"Ask if anyone is hurt or in danger. If yes, tell them to call the emergency services first.",
"Give an honest arrival time and update the caller if it changes.",
"Keep job and fuel records for each truck."]],
["Insurance and legal",[
"Insure the truck, the vehicles you carry and your staff. Add public liability.",
"Keep licences and roadworthiness documents current and follow local rules.",
"In Ghana, check business registration, vehicle registration and roadworthiness, insurance and tax duties with the relevant authorities. They include the Registrar-General's Department, the DVLA, the National Insurance Commission and the Ghana Revenue Authority.",
"Keep copies of important documents and records. They help with claims, audits and taxes."]],
["Staff, training and safety",[
"Train every driver and crew member. Keep records of training and competence checks.",
"Have a written safety policy, a risk assessment for common jobs, and a way to report accidents and near misses.",
"Pay on time and treat staff fairly. A trained, motivated crew is your best safety asset."]],
["Keeping the fleet reliable",[
"Maintain your own truck, winch and straps. A failed recovery truck costs jobs.",
"Follow a regular check schedule for the truck and recovery gear, and keep logs.",
"Budget for tyres, repairs and eventual replacement. Do not run worn gear to save money."]],
["Growing the business",[
"Build links with garages, insurers, haulage firms and the police.",
"Reputation brings repeat work. Keep trucks, winches and straps well maintained.",
"Be easy to find and contact: a phone number that is answered, clear signs on the truck, and honest reviews from happy customers.",
"Save profit for equipment replacement before spending on growth."]]
],
q:[
["Most important detail to take from a caller:",["Exact location","Car colour","Their hobby","Their job"],0,"Without the location you cannot get there."],
["Why maintain your own equipment?",["For looks","A failure stops work and creates danger","It is cheaper to ignore","For fun"],1,"A failed truck or winch means lost jobs and injuries."],
["A dispatcher should confirm the:",["Vehicle, fault and exact location","Weather forecast","Radio station","Trip music"],0,"You need these to send the right truck and kit."],
["A caller cannot say exactly where they are. You:",["Hang up","Ask for landmarks and a shared phone location","Guess","Drive around"],1,"Landmarks and shared location find them faster."],
["A call-out fee covers:",["Getting the truck to the job","Fuel only","Nothing","Insurance only"],0,"It pays for getting the crew and truck to the scene."],
["Quoting before work helps:",["Avoid disputes","Cause arguments","Save paper","Increase fuel"],0,"The customer knows what to expect."],
["Truck insurance should also include:",["Public liability","Nothing","Parking","Car wash"],0,"It covers harm to third parties."],
["Job records are kept for:",["Each truck and each job","Only big jobs","Never","One truck"],0,"They help with billing, claims and audits."],
["Dispatch should log:",["Time, caller, location, vehicle and fault","Nothing","Only the fee","The weather"],0,"Complete logs help you keep track and learn."],
["If arrival is delayed:",["Ignore","Update the caller","Switch off the phone","Cancel"],1,"Honest updates keep trust."],
["Build links with:",["Garages, insurers, haulage firms and police","Nobody","Only friends","Competitors only"],0,"They send work and help."],
["Which cost is a fixed cost?",["Fuel","Tyres","Insurance","Wages for one job"],2,"Insurance is paid whether or not you work."],
["Why should a quote show a breakdown?",["It looks long","Customers can see what each part pays for","It reduces profit","It is illegal not to"],1,"Clear quotes build trust."],
["If someone is hurt at the scene, the caller should be told to:",["Wait for you","Call the emergency services first","Move the car","Post online"],1,"Injuries are an emergency, not a recovery job."],
["Why record training for each crew member?",["It is optional","It shows who is competent to do what","It makes work slower","It is a tax"],1,"Records prove competence and help with safety and insurance."],
["Why save part of the profit?",["To avoid taxes","To replace worn equipment and grow","To buy sweets","There is no reason"],1,"Equipment wears out and must be replaced."],
["Which should you check with the authorities before you start a recovery business in Ghana?",["Only the colour of the truck","Business registration, vehicle roadworthiness, insurance and tax duties","Nothing","Only the fuel price"],1,"Rules differ by country. Check what applies where you work."],
["A regular check schedule for the truck:",["Wastes time","Prevents failures and keeps you safe","Is only for new trucks","Is done after breakdown"],1,"Small checks find faults early."],
["Charging a very low price to win jobs can:",["Make the business safe","Leave no money to maintain or replace equipment","Help staff","Reduce insurance"],1,"Prices must cover all costs plus a margin."],
["A written safety policy helps because it:",["Is decoration","Sets standards everyone can follow and be held to","Takes up space","Replaces training"],1,"A clear policy makes safe work normal."]
]
});
})();
