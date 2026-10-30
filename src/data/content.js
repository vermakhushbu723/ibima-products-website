// =============================================================
// PAGE CONTENT
// Copy for the home, how-it-works, about and FAQ pages. Product
// copy lives in products.js.
// =============================================================

// What the name means — shown on Home and About.
export const NAME_MEANING = [
    { part: 'i', meaning: 'Intelligent', body: 'AI reads the photos, grades the damage and drafts the assessment.' },
    { part: 'Bima', meaning: 'Insurance (बीमा)', body: 'Built for how Indian insurance claims actually run.' },
    { part: 'Assist', meaning: 'Helps, never replaces', body: 'People decide. iBima removes the delays around them.' },
];

export const WHY_CHOOSE = [
    { icon: 'zap', title: 'Faster turnaround', body: 'Guided capture means files arrive complete, so claims stop bouncing back for missing photos.' },
    { icon: 'shield', title: 'Fraud-resistant evidence', body: 'Geo-tagged, time-stamped photos and pre-inspection records leave little room for staged or old damage.' },
    { icon: 'brain', title: 'AI where it helps', body: 'Damage detection and a drafted ILA in minutes — always reviewed by a human.' },
    { icon: 'workflow', title: 'Your process, configured', body: 'Stages, TATs, approvals and letters set in iBima Control — no custom code.' },
    { icon: 'handshake', title: 'Software or service', body: 'Run iBima with your own team, or let our team run claims for you.' },
    { icon: 'map', title: 'PAN-India reach', body: 'Self-survey links and field apps work from metros to Tier-3 towns.' },
];

// The claim lifecycle — which product handles each step.
export const LIFECYCLE = [
    { step: 'Pre-Inspection', product: 'preinspection', body: 'Vehicle condition recorded before cover starts.' },
    { step: 'Intimation', product: 'claim-desk', body: 'Claim reported by call or online, allocated to a handler.' },
    { step: 'Survey', product: 'motor', body: 'Guided, geo-tagged photo and video capture.' },
    { step: 'Assessment', product: 'ai-assess', body: 'AI detects damage, estimates cost, drafts the ILA.' },
    { step: 'Decision', product: 'claim-desk', body: 'Handler ILA, FLA and payment recommendation.' },
    { step: 'Control', product: 'control', body: 'Rules, approvals, fraud checks and audit around it all.' },
];

export const MODES = [
    {
        key: 'saas',
        title: 'As SaaS',
        subtitle: 'Your team, our software',
        icon: 'cloud',
        body: 'You get your own secure iBima ID. Your handlers, surveyors and agents log in and work on the platform; you configure it in iBima Control.',
        points: ['Own users and branding of process', 'Pay per plan / usage', 'Full control of every decision', 'Onboarded in days'],
    },
    {
        key: 'service',
        title: 'As Service Provider',
        subtitle: 'Our team runs it for you',
        icon: 'handshake',
        body: 'Our trained claim desk, surveyors and inspection agents operate the process on your behalf, on the same platform, against agreed TATs.',
        points: ['No hiring or training on your side', 'Agreed turnaround times', 'Real-time visibility for your team', 'Scale up for CAT events'],
    },
];

export const AUDIENCES = [
    { icon: 'building', title: 'Insurers', body: 'Shorter claim cycles, lower leakage and a full audit trail across motor and non-motor.' },
    { icon: 'handshake', title: 'Brokers', body: 'Pre-inspections and claim follow-ups for clients without chasing paper.' },
    { icon: 'user', title: 'Surveyors', body: 'Capture on the phone, get AI help on the estimate, submit reports faster.' },
    { icon: 'wrench', title: 'Workshops', body: 'Submit claim photos and repair invoices straight from the floor.' },
];

export const PROCESS = [
    { title: 'Talk to us', body: 'A 30-minute call to understand your lines, volumes and current process.' },
    { title: 'Choose modules & mode', body: 'Pick products and decide SaaS or Service Provider.' },
    { title: 'Configure', body: 'We set up users, workflow, approvals and templates in iBima Control.' },
    { title: 'Pilot', body: 'Run live claims in one region or branch and measure turnaround.' },
    { title: 'Roll out', body: 'Extend across branches, with training and support from our team.' },
];

export const VALUES = [
    { icon: 'scan', title: 'Accuracy', body: 'Evidence first — every photo located, timed and complete.' },
    { icon: 'scale', title: 'Impartiality', body: 'We assist assessment; the insurer and its assessors decide.' },
    { icon: 'search', title: 'Transparency', body: 'Every estimate line, rule and action is traceable.' },
    { icon: 'clock', title: 'Timeliness', body: 'Turnaround is the measure we hold ourselves to.' },
    { icon: 'shield', title: 'Data care', body: 'Role-based access, isolated organisations, full audit logs.' },
];

export const FAQS = [
    {
        q: 'What is iBima?',
        a: 'iBima is a family of insurance-claim products from VroomSync Expertise Pvt Ltd: iBima Motor, Pre-Inspection, AI Assess, Claim Desk, Control, Cloud and (soon) Non-Motor. They work together as one platform or can be adopted one at a time.',
    },
    {
        q: 'Is iBima an insurance company?',
        a: 'No. iBima is a technology and claims-services platform. We do not sell policies, underwrite risk or decide claims — the insurer and its licensed assessors do.',
    },
    {
        q: 'What is the difference between SaaS and Service Provider mode?',
        a: 'In SaaS mode your own team uses the iBima software. In Service Provider mode our team runs the surveys, inspections and claim desk for you on the same platform, and you see everything in real time.',
    },
    {
        q: 'Do customers need to install an app?',
        a: 'No. Policyholders receive a secure web link for self-survey or self-inspection that works in the phone browser. Surveyors and agents use the field apps.',
    },
    {
        q: 'How accurate is the AI damage assessment?',
        a: 'The model is trained on Indian vehicles and improves as handlers correct it. Its output is a draft for review — the handler can edit any part, severity or cost line before anything is finalised.',
    },
    {
        q: 'Which vehicles does iBima Motor support?',
        a: 'Two-wheelers, private cars and commercial vehicles, each with its own set of guided capture angles.',
    },
    {
        q: 'Can we use only one product?',
        a: 'Yes. Many clients start with Pre-Inspection or Motor survey alone and add Claim Desk and AI Assess later. Every product is switched on per organisation in iBima Cloud.',
    },
    {
        q: 'Can iBima follow our existing claim process?',
        a: 'Yes. Stages, turnaround times, approval limits, letters and communication are configured in iBima Control to match your process.',
    },
    {
        q: 'When will Non-Motor be available?',
        a: 'iBima Non-Motor is in development. Insurers and survey firms can join early access through the contact form.',
    },
    {
        q: 'How is our data kept secure?',
        a: 'Each organisation’s data is isolated, access is role-based, and every action and configuration change is written to an audit log.',
    },
];
