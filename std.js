// Learning outcomes per module and the standards alignment map.
// ENH[i] patches module i of M (see content.js); m01.js, m02.js ... carry the enhanced notes.
window.ENH=window.ENH||{};
const OUT=[
["Identify the hazards of a recovery scene and record a risk assessment before starting","Select, wear and maintain the correct PPE for the task","Apply stop-work, emergency and first-aid procedures","Recognise fire, fallen power line and electric or hybrid vehicle hazards and respond safely"],
["Identify the core recovery tools and equipment and state what each is used for","Read working load limit markings and apply them to a lift or pull","Inspect equipment before use and reject anything damaged","Store, clean and maintain equipment so it stays safe"],
["Follow a systematic method to find a roadside fault","Carry out a safe jump start and other quick fixes within your limits","Decide when a vehicle must be towed rather than repaired","Explain the problem and the options to the customer clearly"],
["Change a wheel on site using safe jacking, support and nut tightening practice","Assess tyre damage and decide whether it is safe to continue","Test, handle and replace a vehicle battery safely","Deal with seized or damaged wheel fixings without causing injury"],
["Choose the right towing method for the vehicle type and condition","Load, secure and lash a vehicle correctly","Prepare a vehicle for towing, including steering, brakes and lights","Drive a loaded or towing vehicle within safe limits"],
["Estimate the load of a recovery and choose rigging with a suitable rating","Use anchor points, snatch blocks and bridles correctly","Set up a safe zone and keep everyone out of line of a loaded line","Control a winch pull from start to finish"],
["Assess ground, slope and vehicle position before an off-road recovery","Choose between winch, kinetic rope and traction aids","Use recovery points and soft shackles correctly","Recover a bogged or stranded vehicle without damage or injury"],
["Assess an accident scene and make it safe before recovery","Plan the recovery of an overturned or heavy vehicle","Recognise air brake, load and hazardous-material risks","Protect evidence and follow police and insurer requirements"],
["Do a pre-use check on a forklift or similar plant","Explain stability, the load plate and the stability triangle","Move or recover plant without overturning it","Follow site safety rules around lifting equipment"],
["Set up warning, positioning and traffic control at a roadside scene","Position the recovery vehicle to protect the work area","Communicate with police, road authorities and other responders","Work safely at night and in poor visibility"],
["Load, secure and unload a vehicle without damage","Complete a vehicle condition report and job paperwork","Handle customers, payments and complaints professionally","Hand over a vehicle and keep job records"],
["Cost a recovery job and keep basic business records","Explain licensing, insurance and legal duties of a recovery business","Plan equipment, maintenance and replacement costs","Build a reputation through reliable, safe, honest service"]
];
const REF=[
["ISO 45001 (occupational health and safety management)","UK PAS 43: safe working of vehicle breakdown, recovery and removal operations","IMI National Occupational Standard IMIRR10 (recovery incident management)"],
["PAS 43","Manufacturer rating and inspection guidance for slings, chains, shackles and winches"],
["IMI roadside assistance and recovery standards (roadside diagnostics and rectification)"],
["Vehicle manufacturer jacking and torque data"],
["PAS 43","TRAA Towing and Recovery Operator Certification Program (TROCP) topics: light, medium and heavy duty"],
["Australian unit PUADEFVH001A: conduct recovery vehicle operations in a field environment","Equipment manufacturer WLL tables"],
["Four-wheel-drive recovery competencies (load estimation, equipment ratings, winch and kinetic rope recovery)"],
["PAS 43","IMI IMIRR10","SURVIVE Group best practice guidelines for safe vehicle recovery","UK government guidance for recovery operators working with electric vehicles"],
["Plant manufacturer operator manual and load plate"],
["UK Traffic Signs Manual Chapter 8 (traffic management and incident recovery)","IMI IMIRR10"],
["Industry customer-service and documentation practice"],
["Local business registration, licensing and insurance requirements (check with the relevant Ghana authorities)"]
];
const STD={
note:"This course is aligned to the references below. It is not accredited or approved by NVTI, COTVET or any other body. No published NVTI or COTVET occupational standard for Recovery Mechanic was found, so the learning outcomes follow the competency-based training format (outcome, evidence, assessment) and should be validated with NVTI or COTVET before the course is used for formal certification.",
units:[
{n:"Work safely and manage risk",m:[1,2,10],r:"ISO 45001, PAS 43, IMI IMIRR10"},
{n:"Use recovery tools, equipment and rigging",m:[2,6,7],r:"PAS 43, manufacturer ratings, PUADEFVH001A"},
{n:"Diagnose and fix roadside faults",m:[3,4],r:"IMI roadside assistance and recovery standards"},
{n:"Tow and transport vehicles",m:[5,11],r:"PAS 43, TRAA TROCP"},
{n:"Recover vehicles in difficult conditions",m:[7,8,9],r:"4x4 recovery competencies, SURVIVE guidelines, IMI IMIRR10"},
{n:"Manage the scene and traffic",m:[10],r:"UK Traffic Signs Manual Chapter 8"},
{n:"Serve customers and run the business",m:[11,12],r:"Industry practice and local regulation"}
],
links:[
["UK PAS 43 (BSI)","https://knowledge.bsigroup.com/products/safe-working-of-vehicle-breakdown-recovery-and-removal-operations-management-system-specification"],
["IMI NOS IMIRR10","https://ukstandards.org.uk/en/nos-finder/IMIRR10/carry-out-recovery-incident-management-activities-for-motor-vehicle-recovery-operations"],
["Recovery operators working with electric vehicles (UK government)","https://www.gov.uk/government/publications/recovery-operators-working-with-electric-vehicles/recovery-operators-working-with-electric-vehicles"],
["TRAA certification programs","https://traaonline.com/ndcp"]
]};
OUT.forEach((o,i)=>{ENH[i]=Object.assign(ENH[i]||{},{o,r:REF[i]})});
