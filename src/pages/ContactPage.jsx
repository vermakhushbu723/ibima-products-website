import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHero, Reveal, usePageTitle } from '../components/ui';
import { IMAGES } from '../data/images';
import { CONTACT } from '../data/site';
import { PRODUCTS } from '../data/products';

const ROLES = ['Insurer', 'Broker', 'Surveyor / survey firm', 'Workshop', 'Other'];

// No backend in this project: the form opens the visitor's mail app
// with the enquiry pre-filled, addressed to CONTACT.email.
const ContactPage = () => {
    usePageTitle('Contact');
    const [params] = useSearchParams();
    const preset = PRODUCTS.find((p) => p.slug === params.get('product'));
    const [sent, setSent] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const f = Object.fromEntries(new FormData(e.currentTarget));
        const subject = `iBima enquiry — ${f.product || 'General'} — ${f.company || f.name}`;
        const body = [
            `Name: ${f.name}`,
            `Company: ${f.company}`,
            `I am a: ${f.role}`,
            `Email: ${f.email}`,
            `Phone: ${f.phone}`,
            `Product of interest: ${f.product || 'Not sure yet'}`,
            '',
            f.message,
        ].join('\n');
        window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
    };

    return (
        <>
            <PageHero eyebrow="Contact" title="Let's discuss your requirement" crumbs={[{ label: 'Contact' }]} image={IMAGES.handshake}>
                Book a demo, ask about pricing, or join early access for iBima Non-Motor.
            </PageHero>

            <section className="container-x grid gap-8 section lg:grid-cols-[1fr_1.5fr]">
                <div className="space-y-4">
                    <Reveal className="card card-hover">
                        <h2 className="flex items-center gap-2 font-bold">
                            <Icon name="map" size={24} /> Registered office
                        </h2>
                        <address className="mt-3 text-sm leading-relaxed text-slate-700 not-italic">
                            {CONTACT.office.map((l) => (
                                <span key={l} className="block">{l}</span>
                            ))}
                        </address>
                        <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                            Open in Maps <Icon name="external" size={14} />
                        </a>
                    </Reveal>
                    <Reveal className="card card-hover">
                        <h2 className="flex items-center gap-2 font-bold">
                            <Icon name="phone" size={24} /> Call or email
                        </h2>
                        <ul className="mt-3 space-y-2 text-sm">
                            {CONTACT.phones.map((p) => (
                                <li key={p.href}><a href={p.href} className="text-slate-700 hover:text-brand-600">{p.label}</a></li>
                            ))}
                            <li><a href={CONTACT.emailHref} className="text-slate-700 hover:text-brand-600">{CONTACT.email}</a></li>
                            <li><a href={CONTACT.websiteHref} className="text-slate-700 hover:text-brand-600">{CONTACT.website}</a></li>
                        </ul>
                    </Reveal>
                    <Reveal className="card card-hover">
                        <h2 className="flex items-center gap-2 font-bold">
                            <Icon name="clock" size={24} /> Office hours
                        </h2>
                        <dl className="mt-3 space-y-1.5 text-sm">
                            {CONTACT.hours.map((h) => (
                                <div key={h.days} className="flex justify-between gap-4">
                                    <dt className="text-slate-700">{h.days}</dt>
                                    <dd className="font-medium text-ink">{h.time}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="mt-3 text-xs text-slate-600">Self-survey links and field apps stay available 24×7.</p>
                    </Reveal>
                </div>

                <form onSubmit={onSubmit} className="card p-5 sm:p-7">
                    <h2 className="text-xl font-bold">Request a demo</h2>
                    <p className="mt-1 text-sm text-slate-700">Fill this in and your email app will open with the enquiry ready to send.</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm">
                            <span className="mb-1.5 block font-medium text-ink">Full name *</span>
                            <input name="name" required className="field" autoComplete="name" />
                        </label>
                        <label className="block text-sm">
                            <span className="mb-1.5 block font-medium text-ink">Company *</span>
                            <input name="company" required className="field" autoComplete="organization" />
                        </label>
                        <label className="block text-sm">
                            <span className="mb-1.5 block font-medium text-ink">Email *</span>
                            <input name="email" type="email" required className="field" autoComplete="email" />
                        </label>
                        <label className="block text-sm">
                            <span className="mb-1.5 block font-medium text-ink">Phone *</span>
                            <input name="phone" type="tel" required pattern="[0-9+\s\-]{10,15}" className="field" autoComplete="tel" />
                        </label>
                        <label className="block text-sm">
                            <span className="mb-1.5 block font-medium text-ink">I am a</span>
                            <select name="role" className="field" defaultValue={ROLES[0]}>
                                {ROLES.map((r) => <option key={r}>{r}</option>)}
                            </select>
                        </label>
                        <label className="block text-sm">
                            <span className="mb-1.5 block font-medium text-ink">Product of interest</span>
                            <select name="product" className="field" defaultValue={preset?.name || ''}>
                                <option value="">Not sure yet</option>
                                {PRODUCTS.map((p) => <option key={p.slug}>{p.name}</option>)}
                            </select>
                        </label>
                        <label className="block text-sm sm:col-span-2">
                            <span className="mb-1.5 block font-medium text-ink">Message</span>
                            <textarea name="message" rows={5} className="field" placeholder="Lines of business, monthly claim volume, SaaS or Service Provider…" />
                        </label>
                    </div>

                    <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                        Send enquiry <Icon name="arrow" size={14} />
                    </button>
                    {sent && (
                        <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700" role="status">
                            Your email app should have opened. If it didn't, write to us at {CONTACT.email}.
                        </p>
                    )}
                </form>
            </section>
        </>
    );
};

export default ContactPage;
