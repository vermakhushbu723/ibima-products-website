// =============================================================
// SITE-WIDE CONFIGURATION
// Brand, navigation and contact details in one place. Values are
// the same ones the existing iBima Assist site uses; anything
// marked TODO still needs the client's confirmation.
// =============================================================

export const BRAND = {
    name: 'iBima',
    fullName: 'iBima Assist',
    tagline: 'One family of products for every insurance claim',
    operator: 'VroomSync Expertise Pvt Ltd',
    established: 2018,
};

export const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Technology', to: '/technology' },
    { label: 'How it Works', to: '/how-it-works' },
    { label: 'About', to: '/about' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Contact', to: '/contact' },
];

export const CONTACT = {
    phones: [
        { label: '+91 92013 25367', href: 'tel:+919201325367' },
        { label: '+91 85029 38357', href: 'tel:+918502938357' },
    ],
    email: 'info@ibimaassist.com',
    emailHref: 'mailto:info@ibimaassist.com',
    website: 'www.ibimaassist.com',
    websiteHref: 'https://www.ibimaassist.com',
    office: [
        'Pati Basant Vihar Colony, Near Garden',
        'Purena, Krishak Nagar',
        'Raipur, Chhattisgarh - 492012',
    ],
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Purena+Krishak+Nagar+Raipur+Chhattisgarh+492012',
    hours: [
        { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM IST' },
        { days: 'Saturday', time: '10:00 AM – 2:00 PM IST' },
        { days: 'Sunday', time: 'Closed' },
    ],
};

// Login links for the live portals. Same hosts the backends README lists.
export const PORTAL_LINKS = [
    { label: 'Claim Desk (CMS)', href: 'https://cms.ibimaassist.online' },
    { label: 'Admin Portal', href: 'https://admin.ibimaassist.online' },
    { label: 'Super Admin', href: 'https://superadmin.ibimaassist.online' },
];

// TODO: replace with VroomSync Expertise Pvt Ltd's real CIN / GSTIN.
export const LEGAL = {
    cin: 'CIN: U00000XX0000PTC000000',
    gstin: 'GSTIN: 00XXXXX0000X0XX',
    disclaimer:
        'iBima is a technology and claims-services platform of VroomSync Expertise Pvt Ltd. It is not an insurer, broker or corporate agent, does not underwrite risk and does not decide the admissibility or quantum of any claim. AI outputs are decision-support for a qualified surveyor or loss assessor. Insurer names, where mentioned, describe scope of service and do not imply endorsement.',
};
