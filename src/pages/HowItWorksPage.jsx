import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand, IconTile, PageHero, ProductIcon, Reveal, SectionHeading, usePageTitle } from '../components/ui';
import { IMAGES } from '../data/images';
import { getProduct } from '../data/products';
import { LIFECYCLE, MODES, PROCESS } from '../data/content';

// How the products sit on top of each other — field apps feed the
// AI and the claim desk; Control and Cloud wrap around everything.
const LAYERS = [
    { title: 'Capture', body: 'Evidence collected in the field', products: ['preinspection', 'motor', 'non-motor'] },
    { title: 'Intelligence', body: 'Photos read and assessed', products: ['ai-assess'] },
    { title: 'Operations', body: 'Claims worked to a decision', products: ['claim-desk'] },
    { title: 'Governance', body: 'Rules, users, tenants and audit', products: ['control', 'cloud'] },
];

const HowItWorksPage = () => {
    usePageTitle('How it Works');

    return (
        <>
            <PageHero eyebrow="How it works" title="From first photo to final payment" crumbs={[{ label: 'How it Works' }]} image={IMAGES.workshopFloor}>
                How the iBima products connect, what happens at each stage of a claim, and how your organisation gets
                started.
            </PageHero>

            {/* Platform layers */}
            <section className="container-x section">
                <SectionHeading eyebrow="The platform" title="Four layers, one data trail">
                    Field apps capture evidence. AI reads it. The Claim Desk works it to a decision. Control and Cloud set
                    the rules around all of it.
                </SectionHeading>
                <div className="space-y-4">
                    {LAYERS.map((l, i) => (
                        <Reveal key={l.title} delay={i * 80} className="card card-hover flex flex-col gap-5 md:flex-row md:items-center">
                            <div className="md:w-56">
                                <span className="text-xs font-bold text-brand-600">LAYER {i + 1}</span>
                                <h3 className="text-lg font-bold">{l.title}</h3>
                                <p className="text-sm text-slate-700">{l.body}</p>
                            </div>
                            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {l.products.map((slug) => {
                                    const p = getProduct(slug);
                                    return (
                                        <Link key={slug} to={`/products/${slug}`} className="group flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50/40">
                                            <ProductIcon product={p} size="sm" />
                                            <span className="min-w-0">
                                                <span className="block text-sm font-semibold text-ink">{p.name}</span>
                                                <span className="block text-xs text-slate-600">{p.status}</span>
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Lifecycle */}
            <section className="bg-slate-50 section">
                <div className="container-x">
                    <SectionHeading eyebrow="Claim lifecycle" title="A motor claim on iBima" />
                    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {LIFECYCLE.map((s, i) => {
                            const p = getProduct(s.product);
                            return (
                                <Reveal as="li" key={s.step} delay={(i % 3) * 80} className="card card-hover group">
                                    <div className="flex items-center gap-3">
                                        <span className="grid h-8 w-8 place-items-center rounded-full bg-logo-orange text-sm font-bold text-white">{i + 1}</span>
                                        <Icon name={p.icon} size={24} className="order-last ml-auto transition group-hover:scale-110" />
                                        <h3 className="font-bold">{s.step}</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{s.body}</p>
                                    <Link to={`/products/${p.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                                        {p.name} <Icon name="arrow" size={14} />
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* Modes */}
            <section className="container-x section">
                <SectionHeading eyebrow="Deployment" title="SaaS or Service Provider — your choice">
                    Every organisation on iBima Cloud picks a mode per module. You can switch later.
                </SectionHeading>
                <div className="grid gap-5 md:grid-cols-2">
                    {MODES.map((m, i) => (
                        <Reveal key={m.key} delay={i * 90} className="card card-hover group">
                            <div className="flex items-center gap-3">
                                <IconTile name={m.icon} />
                                <div>
                                    <h3 className="text-lg font-bold">{m.title}</h3>
                                    <p className="text-sm text-slate-600">{m.subtitle}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-slate-700">{m.body}</p>
                            <ul className="mt-4 space-y-2">
                                {m.points.map((pt) => (
                                    <li key={pt} className="flex gap-2 text-sm text-slate-800">
                                        <Icon name="tick" size={16} className="mt-0.5 shrink-0 text-emerald-600" /> {pt}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Getting started */}
            <section className="surface-deep section text-white">
                <div className="container-x">
                    <p className="mb-2 text-xs font-bold tracking-[0.16em] text-logo-teal uppercase">Getting started</p>
                    <h2 className="mb-8 text-2xl font-extrabold text-white sm:text-[2rem]">Live in five steps</h2>
                    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {PROCESS.map((s, i) => (
                            <Reveal as="li" key={s.title} delay={i * 80} className="rounded-xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-logo-teal/40">
                                <span className="text-3xl font-extrabold text-logo-orange">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="mt-2 font-bold text-white">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-200">{s.body}</p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <CTABand />
        </>
    );
};

export default HowItWorksPage;
