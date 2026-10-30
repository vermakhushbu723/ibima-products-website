import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand, FeatureCard, IconTile, ProductCard, Reveal, SectionHeading, usePageTitle } from '../components/ui';
import { PRODUCTS, getProduct } from '../data/products';
import { AUDIENCES, FAQS, LIFECYCLE, MODES, NAME_MEANING, WHY_CHOOSE } from '../data/content';
import { IMAGES } from '../data/images';

const live = PRODUCTS.filter((p) => p.status === 'Live');

// Small white "app notification" cards that float over the hero photo.
const FloatCard = ({ icon, title, sub, className = '', delay = '0s' }) => (
    <div
        className={`absolute flex animate-float items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl shadow-slate-900/20 ring-1 ring-slate-200 backdrop-blur ${className}`}
        style={{ animationDelay: delay }}
    >
        <Icon name={icon} size={26} />
        <div className="leading-tight">
            <p className="text-[13px] font-bold text-ink">{title}</p>
            <p className="text-[11px] text-slate-600">{sub}</p>
        </div>
    </div>
);

const HeroVisual = () => (
    <div className="relative mx-auto w-full max-w-xl pb-6 lg:pb-0">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img src={IMAGES.inspection.src} alt={IMAGES.inspection.alt} className="aspect-[4/3] w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden="true" />
            {/* Scan line sweeping the photo, hinting at AI reading it */}
            <div className="absolute inset-x-0 top-0 h-full animate-[scan_3.5s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-logo-teal/25 to-transparent" style={{ height: '30%' }} aria-hidden="true" />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                {['Front', 'Left', 'Rear', 'Right', 'Odometer'].map((a, i) => (
                    <span key={a} className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-ink">
                        <Icon name="tick" size={11} strokeWidth={3} className={i < 4 ? 'text-emerald-600' : 'text-slate-400'} /> {a}
                    </span>
                ))}
            </div>
        </div>
        <img
            src={IMAGES.smartphone.src}
            alt=""
            className="absolute -right-3 -bottom-2 hidden w-32 rotate-3 rounded-xl border-4 border-white object-cover shadow-2xl sm:block lg:-right-6 lg:w-36"
            style={{ aspectRatio: '3/4' }}
        />
        <FloatCard icon="brain" title="AI found 4 damages" sub="Draft ILA ready in 2 min" className="top-4 -left-2 sm:-left-6" />
        <FloatCard icon="map" title="Geo-tagged" sub="Raipur · 11:42 AM" className="top-1/2 -left-2 hidden sm:flex lg:-left-10" delay="1.2s" />
        <FloatCard icon="check" title="Survey submitted" sub="Claim CLM-24871" className="top-6 -right-2 sm:-right-4" delay="2.1s" />
    </div>
);

const HomePage = () => {
    usePageTitle();

    return (
        <>
            {/* Hero */}
            <section className="surface-deep relative overflow-hidden text-white">
                <div className="grid-lines absolute inset-0" aria-hidden="true" />
                <div className="container-x relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr]">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-100">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-logo-orange" />
                            Motor · Pre-Inspection · AI · Claim Desk · Non-Motor
                        </p>
                        <h1 className="mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-[3.25rem]">
                            Every insurance claim, <span className="text-logo-teal">one iBima</span> platform.
                        </h1>
                        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-200">
                            iBima is a family of {PRODUCTS.length} connected products for insurers, brokers, surveyors and
                            workshops — from pre-inspection and motor survey to AI damage assessment, the claim desk and
                            platform administration.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2.5">
                            <Link to="/products" className="btn-primary">
                                Explore products <Icon name="arrow" size={14} />
                            </Link>
                            <Link to="/technology" className="btn-ghost">
                                Our technology
                            </Link>
                        </div>
                        <dl className="mt-9 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-5">
                            {[
                                [live.length, 'Live products'],
                                ['2', 'Ways to use — SaaS or Service'],
                                ['24×7', 'Self-survey links'],
                            ].map(([v, l]) => (
                                <div key={l}>
                                    <dt className="sr-only">{l}</dt>
                                    <dd className="text-2xl font-extrabold text-white sm:text-3xl">{v}</dd>
                                    <dd className="mt-0.5 text-xs text-slate-300">{l}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <HeroVisual />
                </div>
            </section>

            {/* Product strip — quick jump to each product */}
            <div className="border-b border-slate-200 bg-white">
                <div className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
                    {PRODUCTS.map((p) => (
                        <Link
                            key={p.slug}
                            to={`/products/${p.slug}`}
                            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-[13px] font-semibold text-slate-800 transition hover:border-brand-300 hover:bg-brand-50"
                        >
                            <Icon name={p.icon} size={20} className="transition group-hover:scale-110" /> {p.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* What is iBima */}
            <section className="container-x section">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                    <SectionHeading eyebrow="What is iBima?" title="Intelligent insurance, built for how India claims.">
                        Bima (बीमा) means insurance. iBima takes the slowest parts of a claim — collecting evidence,
                        assessing damage, chasing documents and approvals — and makes them digital, guided and
                        traceable. Each product does one job well, and together they cover the whole claim.
                    </SectionHeading>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {NAME_MEANING.map((n, i) => (
                            <Reveal key={n.part} delay={i * 90}>
                                <div className="card card-hover h-full border-t-4 border-t-logo-orange">
                                    <p className="text-3xl font-extrabold text-logo-orange">{n.part}</p>
                                    <p className="mt-1.5 font-bold text-ink">{n.meaning}</p>
                                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{n.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="section bg-slate-50">
                <div className="container-x">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                        <SectionHeading eyebrow="Our products" title="The iBima product family">
                            Start with one, or run them all together. Every product shares the same login, data and audit
                            trail.
                        </SectionHeading>
                        <Link to="/products" className="btn-outline mb-8 self-start sm:self-auto">
                            Compare all <Icon name="arrow" size={14} />
                        </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {PRODUCTS.map((p, i) => (
                            <ProductCard key={p.slug} product={p} delay={(i % 4) * 80} />
                        ))}
                        <Reveal delay={240} className="h-full">
                            <Link
                                to="/contact"
                                className="group flex h-full flex-col justify-center rounded-xl border-2 border-dashed border-slate-300 p-5 text-center transition hover:border-brand-400 hover:bg-white"
                            >
                                <Icon name="sparkles" size={34} className="mx-auto transition group-hover:scale-110" />
                                <p className="mt-2 font-bold text-ink">Need something else?</p>
                                <p className="mt-1 text-sm text-slate-700">Tell us your line of business — we build on the same platform.</p>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Lifecycle */}
            <section className="container-x section">
                <SectionHeading center eyebrow="Across the claim" title="Which iBima product does what">
                    One claim, start to finish — and the product that handles each stage.
                </SectionHeading>
                <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {LIFECYCLE.map((s, i) => {
                        const p = getProduct(s.product);
                        return (
                            <Reveal as="li" key={s.step} delay={i * 70}>
                                <Link to={`/products/${p.slug}`} className="card card-hover group block h-full p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-bold text-brand-600">STEP {i + 1}</span>
                                        <Icon name={p.icon} size={24} className="transition group-hover:scale-110" />
                                    </div>
                                    <p className="mt-2 font-bold text-ink">{s.step}</p>
                                    <p className="mt-1 text-[13px] leading-relaxed text-slate-700">{s.body}</p>
                                    <span className="mt-3 block text-xs font-semibold text-brand-700">{p.name} →</span>
                                </Link>
                            </Reveal>
                        );
                    })}
                </ol>
            </section>

            {/* Modes */}
            <section className="surface-deep section text-white">
                <div className="container-x">
                    <Reveal className="mb-8 max-w-2xl">
                        <p className="mb-2 text-xs font-bold tracking-[0.16em] text-logo-teal uppercase">Two ways to use iBima</p>
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]">Use the software, or let us run it.</h2>
                    </Reveal>
                    <div className="grid gap-5 md:grid-cols-2">
                        {MODES.map((m, i) => (
                            <Reveal key={m.key} delay={i * 100}>
                                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-logo-teal/40 hover:bg-white/[0.07]">
                                    <div className="flex items-center gap-3">
                                        <IconTile name={m.icon} />
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{m.title}</h3>
                                            <p className="text-sm text-slate-300">{m.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-slate-200">{m.body}</p>
                                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                        {m.points.map((pt) => (
                                            <li key={pt} className="flex gap-2 text-sm text-slate-100">
                                                <Icon name="tick" size={16} className="mt-0.5 shrink-0 text-logo-teal" /> {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why choose */}
            <section className="container-x section">
                <SectionHeading eyebrow="Why iBima" title="Built to remove the delays around a claim." />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {WHY_CHOOSE.map((w, i) => (
                        <FeatureCard key={w.title} {...w} delay={(i % 3) * 80} />
                    ))}
                </div>
            </section>

            {/* Audiences */}
            <section className="section bg-slate-50">
                <div className="container-x">
                    <SectionHeading center eyebrow="Who it's for" title="One platform, four kinds of user." />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {AUDIENCES.map((a, i) => (
                            <Reveal key={a.title} delay={i * 80}>
                                <div className="card card-hover group h-full text-center">
                                    <IconTile name={a.icon} className="mx-auto" />
                                    <h3 className="mt-3 font-bold">{a.title}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{a.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ preview */}
            <section className="container-x section grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                    <SectionHeading eyebrow="FAQs" title="Common questions">
                        Quick answers on what iBima is and how it works.
                    </SectionHeading>
                    <Link to="/faqs" className="btn-outline">
                        All FAQs <Icon name="arrow" size={14} />
                    </Link>
                </div>
                <div className="space-y-2.5">
                    {FAQS.slice(0, 5).map((f, i) => (
                        <Reveal key={f.q} delay={i * 60}>
                            <details className="group card p-4 open:border-brand-200">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink">
                                    {f.q}
                                    <Icon name="chevron" size={18} className="shrink-0 text-slate-500 transition group-open:rotate-180" />
                                </summary>
                                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">{f.a}</p>
                            </details>
                        </Reveal>
                    ))}
                </div>
            </section>

            <CTABand />
        </>
    );
};

export default HomePage;
