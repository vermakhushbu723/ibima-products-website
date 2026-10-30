// =============================================================
// THE iBIMA PRODUCT FAMILY
// One entry per product. Each maps to a real app in the
// "AS FOR SERVICE PROVIDER" suite next to this folder:
//
//   motor          -> cliamAppAsForServiceProvider (Flutter claim workshop/surveyor flow)
//   preinspection  -> preinspectionAgentAppAsForServiceProvider
//   ai-assess      -> backendAsForServiceProvider/ai-training-backend
//   claim-desk     -> callCenterAsForServiceProvider (+ callcenter-service)
//   control        -> adminAsForServiceProvider (+ admin-service)
//   cloud          -> superAdminAsForServiceProvider (+ superadmin-service)
//   non-motor      -> roadmap; not yet built
//
// Every product page renders the same template (like a surveyor's
// department page): overview, scope, capabilities, workflow,
// documents typically required, and three highlight callouts.
// `icon` values are keys in src/components/Icon.jsx.
// =============================================================

export const PRODUCTS = [
    {
        slug: 'motor',
        name: 'iBima Motor',
        icon: 'car',
        color: 'from-sky-500 to-blue-700',
        category: 'Claims',
        status: 'Live',
        platforms: ['Android', 'iOS', 'Web link'],
        tagline: 'Motor claim survey — guided, geo-tagged and photo-perfect.',
        summary:
            'A guided capture app for motor own-damage claims. Workshops, surveyors or the customer themselves record the vehicle angle by angle, so every claim reaches the desk complete the first time.',
        overview: [
            'Most motor claims slow down for one reason: the photos and documents that arrive are incomplete or unusable, and someone has to go back. iBima Motor fixes that at the point of capture.',
            'The app walks the user through each angle of the vehicle — car, bike or truck — with an outline guide on the camera. Every photo and video is stamped with GPS location and time, odometer and chassis are captured as close-ups, and the owner and surveyor sign on screen. The finished file lands in iBima Claim Desk, already structured.',
        ],
        audience: ['Insurers', 'Brokers', 'Independent surveyors', 'Authorised workshops', 'Policyholders (web link)'],
        scope: [
            'Own-damage (partial loss) claims',
            'Total loss / constructive total loss (CTL) assessment',
            'Spot survey and accident-site capture',
            'Re-inspection and final survey after repair',
            'Repair invoice and bill submission',
            'Two-wheeler, private car and commercial vehicle',
        ],
        capabilities: [
            { icon: 'camera', title: 'Angle-by-angle capture', body: 'On-screen vehicle outlines for front, rear, sides and corners — nothing gets missed.' },
            { icon: 'map', title: 'Geo-tag & time-stamp', body: 'Location and capture time are burned into each photo and video for audit.' },
            { icon: 'video', title: '360° walk-around video', body: 'A continuous video record of the vehicle backs up the still photos.' },
            { icon: 'pen', title: 'Digital declarations', body: 'Owner and surveyor declarations with on-screen signatures — no paper.' },
            { icon: 'link', title: 'Three ways to capture', body: 'Workshop flow, surveyor flow, or a self-survey web link sent to the customer.' },
            { icon: 'wrench', title: 'Repair submission', body: 'Estimates, invoices and post-repair photos go back into the same claim.' },
        ],
        workflow: [
            'Claim is intimated and a survey is assigned',
            'Surveyor / workshop / customer opens the claim in the app or web link',
            'Owner, vehicle and policy details are confirmed',
            'Guided photo and video capture of every angle and damaged part',
            'Declarations and signatures captured on screen',
            'File submitted to Claim Desk; AI Assess runs automatically',
        ],
        documents: [
            'Policy copy',
            'Registration Certificate (RC)',
            'Driving licence of the driver at the time of loss',
            'Duly filled claim form',
            'Repair estimate from the workshop',
            'FIR / police report (theft, third-party or major accidents)',
            'Final repair invoice and payment receipt',
            'KYC and cancelled cheque for settlement',
        ],
        highlights: [
            { value: '100%', label: 'Mandatory angles enforced before submission' },
            { value: '3', label: 'Capture modes — workshop, surveyor, self-survey link' },
            { value: '0', label: 'Paper forms in the survey process' },
        ],
    },
    {
        slug: 'preinspection',
        name: 'iBima Pre-Inspection',
        icon: 'clipboard',
        color: 'from-teal-500 to-cyan-700',
        category: 'Underwriting',
        status: 'Live',
        platforms: ['Android', 'iOS', 'Web link'],
        tagline: 'Break-in and pre-policy inspection in minutes, not days.',
        summary:
            'For break-in policies, ownership transfers and add-on covers. Agents, surveyors or the customer capture the vehicle’s condition before cover starts, and the underwriter gets a clear recommend / reject report.',
        overview: [
            'When a motor policy lapses, or a vehicle is moved to a new insurer, the risk must be inspected before cover is issued. Done by hand, that means a surveyor visit, phone calls and a paper report — often days.',
            'iBima Pre-Inspection puts the inspection on the agent’s or customer’s phone. The same guided capture used for claims records the vehicle’s existing condition, so pre-existing damage is on file before the policy starts — and cannot later be claimed as new.',
        ],
        audience: ['Insurer underwriting teams', 'Brokers & POSPs', 'Insurance agents', 'Inspection agencies', 'Customers (web link)'],
        scope: [
            'Break-in (lapsed policy) inspection',
            'Ownership transfer and change of insurer',
            'Add-on cover inspection (zero-dep, engine protect, etc.)',
            'IDV and vehicle condition verification',
            'Pre-existing damage recording',
            'Used-vehicle condition report',
        ],
        capabilities: [
            { icon: 'user', title: 'Agent app', body: 'Agents create inspection requests and capture on the spot, from their own login.' },
            { icon: 'link', title: 'Customer self-inspection', body: 'A secure web link lets the owner inspect their own vehicle — no app install.' },
            { icon: 'camera', title: 'Guided capture', body: 'The same angle-by-angle guides, odometer and chassis close-ups as iBima Motor.' },
            { icon: 'check', title: 'Recommend / reject', body: 'Reviewer marks the risk acceptable or not, with reasons recorded.' },
            { icon: 'file', title: 'Inspection report', body: 'A standard PDF report the underwriter can attach to the policy.' },
            { icon: 'shield', title: 'Fraud deterrent', body: 'Pre-existing damage is evidenced, so it can’t resurface as a fresh claim.' },
        ],
        workflow: [
            'Inspection request raised by agent, broker or insurer',
            'Agent visits, or customer receives a self-inspection link',
            'Vehicle, document and odometer details captured',
            'Guided photos and video of the full vehicle',
            'Reviewer recommends or rejects with remarks',
            'Inspection report issued; policy can be booked',
        ],
        documents: [
            'Registration Certificate (RC)',
            'Previous policy copy (if any)',
            'Owner KYC',
            'Odometer and chassis number photo',
            'Ownership transfer papers (for transfer cases)',
        ],
        highlights: [
            { value: 'Same day', label: 'Typical turnaround for a break-in inspection' },
            { value: '24×7', label: 'Self-inspection links work any time' },
            { value: '1 report', label: 'Standard PDF for every insurer' },
        ],
    },
    {
        slug: 'ai-assess',
        name: 'iBima AI Assess',
        icon: 'brain',
        color: 'from-violet-500 to-indigo-700',
        category: 'Intelligence',
        status: 'Live',
        platforms: ['Built into Claim Desk', 'API'],
        tagline: 'AI damage detection and a draft loss assessment in minutes.',
        summary:
            'Computer-vision models trained on Indian vehicles find each damaged part, grade severity, estimate repair cost and draft the Initial Loss Assessment (ILA) for the handler to review.',
        overview: [
            'Once photos arrive, iBima AI Assess reads them the way a surveyor would. A segmentation model (YOLO) locates every damaged panel — dent, scratch, crack, broken glass, missing part — and grades its severity.',
            'A rule-based cost engine converts that into repair-or-replace decisions and an estimate. The system checks whether the damage pattern is consistent with the reported cause of loss, then drafts an ILA in plain language. Every correction a handler makes is fed back into training, so the model keeps getting better on your own claims.',
        ],
        audience: ['Claim handlers', 'Surveyors & loss assessors', 'Insurer claims heads', 'Fraud & audit teams'],
        scope: [
            'Damaged-part detection and segmentation',
            'Severity grading (minor / moderate / severe)',
            'Repair vs replace recommendation',
            'Indicative repair cost estimate',
            'Cause-of-loss consistency check',
            'Drafted Initial Loss Assessment (AI ILA)',
        ],
        capabilities: [
            { icon: 'scan', title: 'Part-level detection', body: 'Pixel-accurate outlines on each damaged part, shown over the photo.' },
            { icon: 'gauge', title: 'Severity grading', body: 'Each damage is graded so minor scratches aren’t priced like a replacement.' },
            { icon: 'rupee', title: 'Cost engine', body: 'Transparent, rule-based estimate — every line can be traced and edited.' },
            { icon: 'search', title: 'Cause-of-loss check', body: 'Flags damage that doesn’t match the accident story for a closer look.' },
            { icon: 'file', title: 'Drafted ILA', body: 'A written assessment the handler reviews, edits and signs off.' },
            { icon: 'refresh', title: 'Learns from corrections', body: 'Handler edits become training data — accuracy improves claim by claim.' },
        ],
        workflow: [
            'Photos arrive from iBima Motor',
            'Model detects and outlines every damaged part',
            'Severity graded; repair or replace decided per part',
            'Cost engine builds the estimate',
            'Cause-of-loss consistency checked',
            'Draft ILA placed in the handler’s "AI ILA Pending" queue',
        ],
        documents: [
            'Guided claim photos (all mandatory angles)',
            'Close-ups of each damaged part',
            'Reported cause and description of loss',
            'Vehicle make, model and variant',
        ],
        highlights: [
            { value: 'Minutes', label: 'From photo upload to draft ILA' },
            { value: 'Human-in-loop', label: 'The handler always decides — AI only assists' },
            { value: 'Self-improving', label: 'Retrained on reviewed corrections' },
        ],
        note: 'AI outputs are decision-support. They are not a survey report or an offer of settlement until reviewed by a qualified surveyor or loss assessor.',
    },
    {
        slug: 'claim-desk',
        name: 'iBima Claim Desk',
        icon: 'headset',
        color: 'from-blue-600 to-blue-900',
        category: 'Claims',
        status: 'Live',
        platforms: ['Web portal'],
        tagline: 'The call-centre and claim management system (CMS) for the whole claim.',
        summary:
            'From first call to payment recommendation in one screen: intimation, handler allocation, surveyor assignment, ILA, FLA, survey paybill, letters, documents and communication history.',
        overview: [
            'iBima Claim Desk is where your claims team works every day. A claim is intimated on a call or online, routed to a handler, assigned to a surveyor and tracked through every stage until the payment recommendation.',
            'The handler sees everything on one page — policy, photos, AI findings, documents and the full communication trail — and works from queues: New / Assigned, AI ILA Pending, Handler ILA Pending, FLA Pending and Payment Recommendation. Letters are generated with a live preview, and every SMS, email and call is logged against the claim.',
        ],
        audience: ['Insurer claim teams', 'TPA & call-centre operators', 'Claim handlers', 'Survey coordinators'],
        scope: [
            'Claim intimation (call-centre and online)',
            'Handler allocation and workload balancing',
            'Surveyor assignment and tracking',
            'Initial (ILA) and Final (FLA) Loss Assessment',
            'Payment recommendation',
            'Survey fee bill (paybill), letters and document management',
        ],
        capabilities: [
            { icon: 'phone', title: 'Intimation form', body: 'Capture a new claim in one guided form while the customer is on the call.' },
            { icon: 'users', title: 'Allocation', body: 'Route claims to handlers and surveyors by location, load and skill.' },
            { icon: 'list', title: 'Work queues', body: 'AI ILA, Handler ILA, FLA and Payment queues — nothing sits forgotten.' },
            { icon: 'mail', title: 'Letters with preview', body: 'Issue query, approval and repudiation letters from templates, previewed live.' },
            { icon: 'folder', title: 'Documents DMS', body: 'Every document uploaded, versioned and viewable inside the claim.' },
            { icon: 'message', title: 'Communication log', body: 'SMS, email and call history, stage by stage, for audit and follow-up.' },
        ],
        workflow: [
            'Customer calls or files online — claim intimated',
            'Claim allocated to a handler',
            'Surveyor assigned; survey captured on iBima Motor',
            'AI ILA reviewed and Handler ILA prepared',
            'Repair tracked; Final Loss Assessment completed',
            'Payment recommended; survey fee bill raised',
        ],
        documents: [
            'Claim intimation details',
            'Survey report and photographs',
            'ILA and FLA',
            'Repair estimate and invoice',
            'Letters issued to customer / workshop',
            'Settlement documents',
        ],
        highlights: [
            { value: '1 screen', label: 'Policy, photos, AI, documents and history together' },
            { value: '6 queues', label: 'Stage-wise work lists for handlers' },
            { value: 'Full trail', label: 'Every action and message logged' },
        ],
    },
    {
        slug: 'control',
        name: 'iBima Control',
        icon: 'settings',
        color: 'from-amber-500 to-orange-600',
        category: 'Administration',
        status: 'Live',
        platforms: ['Web portal'],
        tagline: 'Set the rules once — users, workflows, approvals and fraud controls.',
        summary:
            'The admin portal behind every iBima deployment. Configure who can do what, how a claim moves, who approves what amount, which patterns trigger a fraud check, and report on all of it.',
        overview: [
            'No two insurers run claims the same way. iBima Control lets each organisation configure the platform to match its own process without code changes.',
            'Administrators create users and roles, set up branches, define the claim journey with turnaround times (TAT) per stage, build approval and authority matrices, tune the recommendation engine and balance allocation load. Fraud trigger rules can be tested in a simulator before they go live, and every change is captured in the audit log.',
        ],
        audience: ['Insurer IT & operations heads', 'Claims process owners', 'Compliance & audit', 'Service-provider admins'],
        scope: [
            'Users, roles and permissions',
            'Branches / offices and document templates',
            'Stage-wise communication matrix (SMS / email / WhatsApp)',
            'Claim flow with TAT and stage rules',
            'Approval logic and authority matrix',
            'Fraud routing, trigger rules and reports',
        ],
        capabilities: [
            { icon: 'userCog', title: 'Users & roles', body: 'Create users, assign roles, reset passwords and activate accounts.' },
            { icon: 'workflow', title: 'Claim flow builder', body: 'Define each stage, its TAT, rules and communication triggers.' },
            { icon: 'scale', title: 'Approval matrix', body: 'Who approves what amount — drafted, reviewed, then published with history.' },
            { icon: 'siren', title: 'Fraud trigger rules', body: 'Build rules, test them in the simulator, route hits to a review queue.' },
            { icon: 'chart', title: 'Reports & downloads', body: 'Claim, user and usage reports, exportable as CSV, Excel or JSON.' },
            { icon: 'lock', title: 'Audit logs', body: 'Every configuration change recorded — who, what, when.' },
        ],
        workflow: [
            'Set up branches, users and roles',
            'Configure the claim journey and stage TATs',
            'Define approval and authority limits',
            'Set communication templates per stage',
            'Switch on fraud rules after simulation',
            'Monitor dashboards, reports and audit logs',
        ],
        documents: [
            'Organisation and branch list',
            'User list with roles',
            'Approval authority limits',
            'Letter and communication templates',
        ],
        highlights: [
            { value: 'No-code', label: 'Process changes without a software release' },
            { value: 'Simulated', label: 'Fraud rules tested before they go live' },
            { value: 'Audited', label: 'Every change logged for compliance' },
        ],
    },
    {
        slug: 'cloud',
        name: 'iBima Cloud',
        icon: 'cloud',
        color: 'from-slate-600 to-slate-900',
        category: 'Platform',
        status: 'Live',
        platforms: ['Web portal'],
        tagline: 'Multi-company platform — run iBima as SaaS or as a managed service.',
        summary:
            'The super-admin layer that onboards insurers, brokers, surveyors and workshops, switches modules on per organisation, and lets each one choose: use iBima as SaaS, or have us run claims for them as a service provider.',
        overview: [
            'iBima Cloud is how one platform serves many organisations securely. Each insurer or broker gets its own isolated ID, its own users and its own configuration.',
            'Organisations choose the Claim module, the Pre-Inspection module, or both — and pick how they want to work. In SaaS mode their own team uses the software. In Service Provider mode our trained team runs the surveys, inspections and claim desk on their behalf. Plans, usage and organisation-level reports are managed from one console.',
        ],
        audience: ['Insurance companies', 'Brokers', 'Survey firms', 'Workshop networks', 'Platform operators'],
        scope: [
            'Insurer and broker onboarding (new ID creation)',
            'Surveyor and workshop partner registry',
            'Module selection — Claim and / or Pre-Inspection',
            'Mode selection — SaaS or Service Provider',
            'Plans and subscriptions',
            'Platform-wide usage and claim reports',
        ],
        capabilities: [
            { icon: 'building', title: 'Organisation onboarding', body: 'Create an insurer or broker ID with all its details in one guided form.' },
            { icon: 'layers', title: 'Module switches', body: 'Turn Claim and Pre-Inspection on or off per organisation.' },
            { icon: 'handshake', title: 'SaaS or Service', body: 'Each customer chooses self-run software or a fully managed service.' },
            { icon: 'network', title: 'Partner registry', body: 'Surveyors and workshops registered once, available to every client.' },
            { icon: 'chart', title: 'Platform dashboards', body: 'Claims by status, partners by type and usage across all organisations.' },
            { icon: 'lock', title: 'Data isolation', body: 'Each organisation’s data, users and settings are kept separate.' },
        ],
        workflow: [
            'Organisation is onboarded with a new ID',
            'Modules (Claim / Pre-Inspection) selected',
            'Mode chosen — SaaS or Service Provider',
            'Plan assigned and admin user created',
            'Organisation configures itself in iBima Control',
            'Usage and performance tracked centrally',
        ],
        documents: [
            'Company registration details',
            'Authorised contact persons',
            'Selected modules and mode',
            'Plan / commercial agreement',
        ],
        highlights: [
            { value: '2 modules', label: 'Claim and Pre-Inspection' },
            { value: '2 modes', label: 'SaaS or Service Provider' },
            { value: 'Isolated', label: 'Separate data per organisation' },
        ],
    },
    {
        slug: 'non-motor',
        name: 'iBima Non-Motor',
        icon: 'factory',
        color: 'from-rose-500 to-red-700',
        category: 'Claims',
        status: 'Coming soon',
        platforms: ['Android', 'Web'],
        tagline: 'The same digital survey discipline for fire, marine, engineering and more.',
        summary:
            'Extending the iBima capture-and-assess workflow beyond vehicles: site photos, inventories, document checklists and assessment reports for non-motor lines.',
        overview: [
            'Non-motor claims — a warehouse fire, a damaged consignment, a broken-down machine — involve far more documents and far less standard evidence than motor. They are also where delays hurt most.',
            'iBima Non-Motor brings guided site capture, line-specific document checklists and the Claim Desk workflow to these lines. It is in development now; insurers and survey firms can join the early-access programme.',
        ],
        audience: ['Insurer non-motor claim teams', 'Licensed surveyors & loss assessors', 'Corporate policyholders'],
        scope: [
            'Fire & property (building, machinery, stock)',
            'Marine cargo (inland and import / export transit)',
            'Engineering (machinery breakdown, CAR / EAR, EEI)',
            'Miscellaneous (burglary, liability, package policies)',
            'Loss of profit / business interruption',
            'Catastrophe (CAT) event claims',
        ],
        capabilities: [
            { icon: 'camera', title: 'Site capture', body: 'Geo-tagged photo and video of the loss site, stock and machinery.' },
            { icon: 'list', title: 'Line-wise checklists', body: 'The right document list for fire, marine, engineering and others.' },
            { icon: 'file', title: 'Inventory & quantum', body: 'Structured loss inventory to support assessment of quantum.' },
            { icon: 'headset', title: 'On Claim Desk', body: 'Runs through the same intimation-to-recommendation workflow.' },
        ],
        workflow: [
            'Loss intimated; surveyor appointed',
            'Site inspection captured on the app',
            'Line-specific documents collected',
            'Loss inventory and assessment prepared',
            'Report and recommendation submitted',
        ],
        documents: [
            'Policy copy and claim form',
            'FIR / fire brigade report (where applicable)',
            'Stock / asset registers and invoices',
            'Bill of lading, invoice and packing list (marine)',
            'Repair estimates and maintenance records (engineering)',
            'Audited financials (loss of profit)',
        ],
        highlights: [
            { value: '6 lines', label: 'Fire, marine, engineering, misc, LOP, CAT' },
            { value: 'Early access', label: 'Open to insurers and survey firms' },
            { value: '1 platform', label: 'Same Claim Desk as motor' },
        ],
    },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
