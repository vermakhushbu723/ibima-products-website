import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHero, Reveal, usePageTitle } from '../components/ui';
import { IMAGES } from '../data/images';
import { CONTACT } from '../data/site';
import { FAQS } from '../data/content';

const FaqPage = () => {
    usePageTitle('FAQs');
    const [query, setQuery] = useState('');
    const q = query.trim().toLowerCase();
    const list = q ? FAQS.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q)) : FAQS;

    return (
        <>
            <PageHero eyebrow="FAQs" title="Frequently asked questions" crumbs={[{ label: 'FAQs' }]} image={IMAGES.headsetDesk}>
                Everything about the iBima products, how they are used and how to get started.
            </PageHero>

            <section className="container-x max-w-3xl section">
                <label className="relative block">
                    <span className="sr-only">Search FAQs</span>
                    <Icon name="find" size={18} className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search questions…"
                        className="field py-2.5 pl-11"
                    />
                </label>

                <div className="mt-6 space-y-2.5">
                    {list.map((f, i) => (
                        <Reveal key={f.q} delay={Math.min(i, 6) * 50}>
                        <details className="group card p-4 open:border-brand-200">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                                {f.q}
                                <Icon name="chevron" size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-slate-700">{f.a}</p>
                        </details>
                        </Reveal>
                    ))}
                    {list.length === 0 && <p className="py-8 text-center text-slate-600">No questions match “{query}”.</p>}
                </div>

                <div className="card mt-10 flex flex-col items-start gap-4 bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-bold">Still have questions?</h2>
                        <p className="text-sm text-slate-700">Talk to our team — we usually reply within one working day.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/contact" className="btn-blue">Contact us</Link>
                        <a href={CONTACT.emailHref} className="btn-outline">Email us</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqPage;
