// Module 11 enhanced: loading, documentation and customer handling.
// Question format: [question, options, index of correct option, explanation]
window.ENH=window.ENH||{};
(function(){
const walk=()=>{const pts=[[150,16,'1'],[236,34,'2'],[262,78,'3'],[236,122,'4'],[150,140,'5'],[64,122,'6'],[38,78,'7'],[64,34,'8']];
return '<svg viewBox="0 0 300 160" role="img" aria-labelledby="t11a"><title id="t11a">Walk around the vehicle and photograph all eight positions before loading and again after unloading</title><rect x="96" y="40" width="108" height="82" rx="16" class="f-hz"/><rect x="116" y="52" width="68" height="22" rx="4" class="f-fill"/><rect x="116" y="88" width="68" height="22" rx="4" class="f-fill"/>'+pts.map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="11" class="f-redf"/><text x="'+p[0]+'" y="'+(p[1]+4)+'" text-anchor="middle" style="font-weight:700;fill:#fff">'+p[2]+'</text>').join('')+'<text x="150" y="157" text-anchor="middle" style="font-size:11px">Also photograph the dash and odometer.</text></svg>'};
const ang='<svg viewBox="0 0 300 150" role="img" aria-labelledby="t11b"><title id="t11b">Tie-down strap about 45 degrees from the bed over the tyre or wheel</title><rect x="20" y="108" width="260" height="10" class="f-fill"/><circle cx="150" cy="86" r="30" class="f-gray"/><circle cx="150" cy="86" r="10" class="f-fill"/><path d="M118,64 L70,108" class="f-red"/><path d="M182,64 L230,108" class="f-red"/><circle cx="70" cy="108" r="5" class="f-redf"/><circle cx="230" cy="108" r="5" class="f-redf"/><path d="M90,108 A20,20 0 0 0 82,92" class="f-thin"/><text x="98" y="100" style="font-size:12px;font-weight:700">45°</text><text x="150" y="30" text-anchor="middle" style="font-weight:700">Strap over the tyre, about 45°</text><text x="150" y="138" text-anchor="middle" style="font-size:11px">Rated point on the bed. Re-check later.</text></svg>';
const flow='<svg viewBox="0 0 300 130" role="img" aria-labelledby="t11c"><title id="t11c">Job paperwork flow: record at pickup, load, secure, record at drop off, signed handover</title><defs><marker id="ah11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" class="f-ink"/></marker></defs>'+['Condition photos','Consent signed','Load secure','Unload recheck','Handover signed'].map((t,i)=>{const x=6+i*58;return '<rect x="'+x+'" y="24" width="52" height="64" rx="6" class="f-hz"/><text x="'+(x+26)+'" y="44" text-anchor="middle" style="font-weight:700;fill:#1B2430">'+(i+1)+'</text><text x="'+(x+26)+'" y="62" text-anchor="middle" style="font-size:9px;fill:#1B2430">'+t.split(' ')[0]+'</text><text x="'+(x+26)+'" y="74" text-anchor="middle" style="font-size:9px;fill:#1B2430">'+t.split(' ').slice(1).join(' ')+'</text>'}).join('')+'<text x="150" y="112" text-anchor="middle" style="font-size:11px">If it is not written down, it did not happen.</text></svg>';
const talk='<svg viewBox="0 0 300 120" role="img" aria-labelledby="t11d"><title id="t11d">Four steps with an upset customer: listen, explain, offer options, agree</title>'+['Listen','Explain','Offer options','Agree'].map((t,i)=>{const x=6+i*72;return '<circle cx="'+(x+30)+'" cy="40" r="26" class="f-hz"/><text x="'+(x+30)+'" y="46" text-anchor="middle" style="font-size:18px;font-weight:700;fill:#1B2430">'+(i+1)+'</text><text x="'+(x+30)+'" y="86" text-anchor="middle" style="font-size:12px;font-weight:700">'+t+'</text>'}).join('')+'<text x="150" y="112" text-anchor="middle" style="font-size:11px">Stay calm, stay polite, keep the customer safe.</text></svg>';
ENH[10]=Object.assign(ENH[10]||{},{
n:[
"Secure the vehicle with chains or straps at proper points. Check wheel nets and tie-downs again after a short distance.",
"Never exceed the truck's load rating or axle limits.",
"Record the condition, photos, odometer, time and location before loading.",
"Explain price, destination and risks clearly. Get a signed handover.",
"Paperwork protects you, the customer and the vehicle. A good record ends most disputes before they start.",
"Treat every customer as someone having a bad day. Calm, honest service wins repeat work."
],
g:[FIG(walk(),'<b>Photo walk-around.</b> Eight positions plus the dash and odometer. Do the same again at drop-off.'),FIG(ang,'<b>Strap angle.</b> A strap near 45 degrees holds the car down and forward. Keep straps off brake lines and suspension arms.'),FIG(flow,'<b>Paperwork flow.</b> The same record at pickup and drop-off shows exactly what changed.'),FIG(talk,'<b>Customer conversation.</b> Use the same four steps with every upset customer.')],
d:[
["Securing the load",[
"Use at least four tie-down points on a car. Use rated points or the wheels, not suspension arms.",
"Straps at about 45 degrees hold best. Check the handbrake and gear. Put the car in park or in gear.",
"Re-check after a short distance and again at stops.",
"Check the load against the truck's rating and axle limits. Never exceed them.",
"Use edge protectors where straps touch sharp edges."]],
["Before you load",[
"Walk around the vehicle with the customer. Record every scratch, dent and damage.",
"Take photos of all sides, the interior and the dashboard. Note the odometer reading and fuel level.",
"Record the registration number, make, model, colour and where it is going.",
"Ask about valuables. Record keys, wheel locks and personal items on the job card. Advise removing valuables."]],
["Job records",[
"Record time, place, vehicle, registration, damage, keys and valuables.",
"Photograph all sides before loading and after unloading.",
"Get signatures at pickup and drop-off.",
"Keep the job card, photos and any police reference together. Protect customers' personal details."]],
["Customer handling",[
"Explain what will happen, the price and any risk. Get consent before moving the vehicle.",
"Keep the customer in a safe place away from traffic.",
"Stay calm and polite, even when the customer is stressed.",
"If a passenger rides in your truck, they must wear a seat belt and sit in a proper seat.",
"Be honest about delays and costs. Do not promise what you cannot deliver."]],
["Payment and receipts",[
"Agree the price before you start. Give an itemised receipt for cash, mobile money or bank payments.",
"Never take more than the agreed price. Charge extra only for work agreed in advance.",
"Keep copies of receipts for your records."]],
["Complaints and damage claims",[
"Listen without arguing. Apologise for the inconvenience. Record the complaint.",
"Show the customer the before and after photos and the signed condition report.",
"If you caused damage, report it, tell your insurer and put it right. Honesty protects your reputation.",
"Escalate to the owner or insurer if you cannot settle it."]]
],
q:[
["Before loading you should:",["Record condition and take photos","Start the engine","Wash the car","Skip paperwork"],0,"Photos and notes prove the state of the vehicle before you touched it."],
["Tie-downs should be re-checked:",["After a short distance","Never","Next week","After delivery"],0,"Straps settle and loosen as the load moves."],
["Why get a signed handover?",["It looks professional","It proves condition and what was agreed","It is a tax","It stops fuel use"],1,"A signature shows the customer accepted the vehicle and terms."],
["Minimum tie-down points on a car:",["One","Two","Four","Eight"],2,"Four points restrain the car at each corner."],
["Tie-downs are best attached to:",["Rated points or the wheels","Suspension arms","Brake lines","The exhaust"],0,"Rated points can carry the load. Suspension and brake parts can be damaged."],
["Photograph the vehicle:",["On all sides before and after","Once from the front","Never","Only if damaged"],0,"Before and after photos show any change."],
["Before moving a vehicle, get the customer's:",["Consent and signature","Phone only","Nothing","Photo"],0,"You must have permission to take it."],
["Keys and valuables should be:",["Recorded on the job card","Ignored","Left in the car","Taken home"],0,"A record prevents disputes later."],
["The strap angle that holds best is about:",["10 degrees","45 degrees","90 degrees","0 degrees"],1,"About 45 degrees pulls the car down and toward the anchor."],
["Re-check tie-downs:",["After a short distance and at stops","Only at the end","Never","Yearly"],0,"Re-checking catches loosening early."],
["How many positions should a full photo walk-around cover?",["One","Four sides plus corners, interior and odometer","Two","None"],1,"Cover every angle so any change can be seen."],
["A customer is upset about the delay. You should first:",["Argue","Listen and acknowledge","Leave","Hang up"],1,"Listening calms the situation."],
["Why record the odometer reading?",["It is a legal tax","It shows distance driven and proves no misuse","To waste time","It is not useful"],1,"It shows the vehicle's mileage at pickup and drop-off."],
["Passengers in your recovery truck must:",["Sit anywhere","Wear seat belts in proper seats","Stand","Ride on the bed"],1,"Safety rules apply to passengers too."],
["Should you charge more than the agreed price without telling the customer?",["Yes","No, only for agreed extra work","Sometimes","Always"],1,"Hidden charges break trust and may be unlawful."],
["What should a receipt show?",["Nothing","An itemised breakdown of what was paid for","Only the total","A phone number"],1,"Clear receipts avoid disputes."],
["You damaged a customer's bumper while loading. You should:",["Hide it","Report it, record it, tell the insurer and put it right","Blame the customer","Leave quickly"],1,"Honesty protects you and the customer."],
["Why use edge protectors under straps?",["For looks","Sharp edges can cut or weaken the strap","To make noise","They are free"],1,"A cut strap can fail."],
["The load must not exceed:",["The customer's wish","The truck's rating and axle limits","The car's colour","Nothing"],1,"Overloading harms braking, steering and legal compliance."],
["Customers waiting at the roadside should be:",["Standing in the lane","Kept in a safe place away from traffic","In the work area","Left alone anywhere"],1,"Customers are at risk too."]
]
});
})();
