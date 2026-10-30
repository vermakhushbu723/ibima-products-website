// =============================================================
// IMAGERY
// Same Unsplash photos the iBima Assist site already uses — each
// was fetched and visually checked there. Free for commercial use,
// hotlinked from Unsplash's CDN as their licence expects.
// TODO before launch: swap for the client's own photography; only
// this file needs to change.
// =============================================================
import preInspectionArt from '../assets/pre-inspection-capture.jpg';

const unsplash = (id, w = 1400) => `https://images.unsplash.com/${id}?w=${w}&q=72&auto=format&fit=crop`;

const shot = (id, alt, w) => ({ src: unsplash(id, w), alt });

export const IMAGES = {
    // Inspector walking a car with a hand lamp, checking the panels.
    inspection: shot('photo-1652987086612-d948b775d358', 'Surveyor inspecting the panels of a car'),
    // Two hands holding and typing on a smartphone.
    smartphone: shot('photo-1526045612212-70caf35c14df', 'Hands using a smartphone', 700),
    // Small group inspecting an open engine bay together.
    teamInspect: shot('photo-1690051840072-0c8a4a498854', 'Team inspecting an engine bay together'),
    // Technician standing beside an open car door in a workshop.
    workshopFloor: shot('photo-1618312980089-c7cfe73ebb85', 'Technician beside a car in a workshop'),
    // Colleagues talking across an office desk.
    officeCollab: shot('photo-1560264350-1a8891f44df0', 'Colleagues discussing work in an office'),
    // A single headset resting beside an open laptop.
    headsetDesk: shot('photo-1553775282-20af80779df7', 'Support headset beside a laptop'),
    // Two people shaking hands in an office.
    handshake: shot('photo-1521791136064-7986c2920216', 'Two people shaking hands'),
    // Syntax-highlighted source code filling a screen.
    code: shot('photo-1515879218367-8466d910aaa4', 'Source code on a screen'),
    // Analytics dashboard filling a monitor.
    analytics: shot('photo-1551288049-bebda4e38f71', 'Analytics dashboard on a monitor'),
};

// Hero image per product, keyed by slug in products.js.
export const PRODUCT_IMAGES = {
    motor: shot('photo-1597328290883-50c5787b7c7e', 'Close-up of a damaged car front end being surveyed'),
    preinspection: {
        src: preInspectionArt,
        alt: 'Inspector capturing a vehicle’s condition — exterior 360°, odometer, chassis and existing damage',
    },
    'ai-assess': shot('photo-1673187139211-1e7ec3dd60ec', 'Car with heavy rear-quarter damage'),
    'claim-desk': shot('photo-1603714228681-b399854b8f80', 'Claim support team with headsets at their desks'),
    control: shot('photo-1551288049-bebda4e38f71', 'Analytics dashboard with charts and KPIs'),
    cloud: shot('photo-1460925895917-afdab827c52f', 'Laptop showing a reporting dashboard'),
    'non-motor': shot('photo-1496247749665-49cf5b1022e9', 'Interior of an industrial plant with machinery'),
};
