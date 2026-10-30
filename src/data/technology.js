// =============================================================
// TECHNOLOGY PAGE
// The four connected capabilities, the objective ticker, the
// interactive claim workflow and the "under the hood" stack.
// Workflow stages follow the real Claim Desk queues
// (callCenterAsForServiceProvider/src/constants/navigation.js).
// =============================================================

export const CAPABILITIES = [
    {
        icon: 'brain',
        title: 'Artificial Intelligence',
        product: 'ai-assess',
        body: 'Computer vision finds and grades every damaged part, prices the repair and drafts the loss assessment.',
        points: ['Part-level damage detection', 'Severity grading & cost engine', 'Cause-of-loss consistency check', 'Drafted AI ILA'],
    },
    {
        icon: 'users',
        title: 'CRM & Claim Desk',
        product: 'claim-desk',
        body: 'One shared desk for insurers, handlers, surveyors and workshops — every claim, contact and document in one place.',
        points: ['Intimation & allocation', 'Stage-wise work queues', 'Documents DMS', 'Full communication history'],
    },
    {
        icon: 'message',
        title: 'Auto Response',
        product: 'control',
        body: 'Stage-wise SMS, email and WhatsApp triggers keep the customer, workshop and surveyor informed without a single call.',
        points: ['Instant acknowledgement on intimation', 'Survey links sent automatically', 'Status updates at every stage', 'Templates set per insurer'],
    },
    {
        icon: 'workflow',
        title: 'Online Claim Management',
        product: 'claim-desk',
        body: 'Track a claim digitally from first call to payment recommendation, against the TAT set for every stage.',
        points: ['Live status for every stakeholder', 'TAT per stage with alerts', 'Approval & authority matrix', 'Audit log of every action'],
    },
];

export const OBJECTIVES = [
    'Faster Communication',
    'Better Coordination',
    'Structured Assessment',
    'Improved TAT',
    'Geo-tagged Evidence',
    'Complete Audit Trail',
];

// Each stage of the interactive workflow viewer.
export const WORKFLOW = [
    {
        title: 'Claim intimation',
        product: 'claim-desk',
        actor: 'Customer / call-centre agent',
        tat: 'Minutes',
        body: 'The customer calls or files online. The agent records policy, vehicle, accident details and contact on one guided intimation form.',
        outputs: ['Claim number generated', 'Policy & vehicle linked', 'Loss details recorded'],
    },
    {
        title: 'Auto acknowledgement',
        product: 'control',
        actor: 'System',
        tat: 'Instant',
        body: 'The communication matrix fires straight away: the customer gets an SMS / email with the claim number and what happens next.',
        outputs: ['SMS + email sent', 'Logged in communication history'],
    },
    {
        title: 'Handler allocation',
        product: 'claim-desk',
        actor: 'System / supervisor',
        tat: 'Same hour',
        body: 'The claim is routed to a handler based on location, claim type and current load from the allocation matrix.',
        outputs: ['Handler assigned', 'Claim in "New / Assigned" queue'],
    },
    {
        title: 'Surveyor assignment',
        product: 'claim-desk',
        actor: 'Handler',
        tat: 'Same day',
        body: 'A surveyor is appointed — or a self-survey web link is sent to the customer or workshop.',
        outputs: ['Surveyor notified', 'Survey link issued'],
    },
    {
        title: 'Guided survey capture',
        product: 'motor',
        actor: 'Surveyor / workshop / customer',
        tat: '15–20 min',
        body: 'Angle-by-angle photos, walk-around video, odometer and chassis close-ups — all geo-tagged and time-stamped — plus on-screen declarations.',
        outputs: ['Complete photo set', 'Signed declarations', 'GPS + time metadata'],
    },
    {
        title: 'AI damage assessment',
        product: 'ai-assess',
        actor: 'AI',
        tat: '~2 min',
        body: 'The model outlines every damaged part, grades severity, decides repair vs replace and checks the damage matches the reported cause.',
        outputs: ['Damage map per photo', 'Cost estimate', 'Consistency flags'],
    },
    {
        title: 'ILA review',
        product: 'claim-desk',
        actor: 'Handler',
        tat: 'Within TAT',
        body: 'The drafted AI ILA lands in the handler’s queue. They review, edit any line and finalise the Handler ILA. Edits feed back into training.',
        outputs: ['Handler ILA', 'Corrections sent to retraining'],
    },
    {
        title: 'Approval & repair',
        product: 'control',
        actor: 'Approver / workshop',
        tat: 'Per authority matrix',
        body: 'Approval routes by amount through the authority matrix. The workshop repairs and uploads the invoice and post-repair photos.',
        outputs: ['Approval recorded', 'Repair invoice uploaded'],
    },
    {
        title: 'Final Loss Assessment',
        product: 'claim-desk',
        actor: 'Handler / surveyor',
        tat: 'Within TAT',
        body: 'Final bills are checked against the ILA, depreciation and policy terms applied, and the FLA completed.',
        outputs: ['FLA report', 'Letters issued with live preview'],
    },
    {
        title: 'Payment recommendation',
        product: 'claim-desk',
        actor: 'Handler',
        tat: 'Closure',
        body: 'The payment recommendation goes to the insurer, the survey fee bill is raised, and the full file — every photo, version and message — is archived.',
        outputs: ['Payment recommendation', 'Survey paybill', 'Archived claim file'],
    },
];

export const STACK = [
    { icon: 'smartphone', title: 'Field apps', body: 'Native Android & iOS apps with camera, GPS and offline-safe capture; web links for customers.' },
    { icon: 'chart', title: 'Web portals', body: 'Claim Desk, Admin and Super Admin consoles that run in any modern browser.' },
    { icon: 'brain', title: 'AI engine', body: 'Segmentation models for damage, a rule-based cost engine and an LLM-drafted assessment narrative.' },
    { icon: 'network', title: 'Independent services', body: 'Each portal has its own service and database, so one can scale or update without touching the others.' },
    { icon: 'shield', title: 'Security', body: 'Role-based access, token auth, per-organisation data isolation and encrypted transport.' },
    { icon: 'lock', title: 'Audit & compliance', body: 'Every action and configuration change logged — who, what and when.' },
];
