import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand, FeatureCard, IconTile, PageHero, Reveal, SectionHeading, usePageTitle } from '../components/ui';
import { getProduct } from '../data/products';
import { CAPABILITIES, OBJECTIVES, STACK, WORKFLOW } from '../data/technology';
import { IMAGES } from '../data/images';

const STEP_MS = 4500;

// Interactive claim workflow: step list + detail panel. Auto-plays,
// can be paused, stepped through, and opened full screen (Esc exits).
const WorkflowViewer = () => {
    const [active, setActive] = useState(0);
    const [playing, setPlaying] = useState(true);
    const [full, setFull] = useState(false);
    const listRef = useRef(null);
    const step = WORKFLOW[active];
    const product = getProduct(step.product);

    useEffect(() => {
        if (!playing) return undefined;
        const t = setTimeout(() => setActive((i) => (i + 1) % WORKFLOW.length), STEP_MS);
        return () => clearTimeout(t);
    }, [playing, active]);

    useEffect(() => {
        if (!full) return undefined;
        const onKey = (e) => e.key === 'Escape' && setFull(false);
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [full]);

    // On phones the step list is a horizontal strip — keep the active
    // chip in view by scrolling the strip itself (never the page).
    useEffect(() => {
        const ol = listRef.current;
        if (!ol || ol.scrollWidth <= ol.clientWidth) return;
        const li = ol.children[active];
        ol.scrollTo({ left: li.offsetLeft - ol.clientWidth / 2 + li.offsetWidth / 2, behavior: 'smooth' });
    }, [active]);

    const go = (i) => {
        setActive((i + WORKFLOW.length) % WORKFLOW.length);
        setPlaying(false);
    };

    return (
        <div className={full ? 'fixed inset-0 z-[60] overflow-y-auto bg-ink/95 p-4 backdrop-blur sm:p-8' : ''}>
            <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ${full ? 'mx-auto max-w-6xl' : ''}`}>
                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                    <p className="text-sm font-bold text-ink">
                        Claim workflow <span className="font-medium text-slate-600">· step {active + 1} of {WORKFLOW.length}</span>
                    </p>
                    <div className="flex items-center gap-1.5">
                        <button type="button" onClick={() => go(active - 1)} className="btn-outline px-2.5 py-1.5" aria-label="Previous step">
                            <Icon name="arrow" size={14} className="rotate-180" />
                        </button>
                        <button type="button" onClick={() => setPlaying((v) => !v)} className="btn-outline px-2.5 py-1.5" aria-label={playing ? 'Pause' : 'Play'}>
                            <Icon name={playing ? 'pause' : 'play'} size={14} />
                        </button>
                        <button type="button" onClick={() => go(active + 1)} className="btn-outline px-2.5 py-1.5" aria-label="Next step">
                            <Icon name="arrow" size={14} />
                        </button>
                        <button type="button" onClick={() => setFull((v) => !v)} className="btn-blue px-3 py-1.5">
                            <Icon name={full ? 'shrink' : 'expand'} size={14} /> {full ? 'Exit full screen' : 'Full screen'}
                        </button>
                    </div>
                </div>

                {/* Progress */}
                <div className="h-1 bg-slate-100">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-logo-teal transition-all duration-500" style={{ width: `${((active + 1) / WORKFLOW.length) * 100}%` }} />
                </div>

                <div className="grid lg:grid-cols-[minmax(0,19rem)_1fr]">
                    {/* Step list */}
                    <ol ref={listRef} className="flex gap-1.5 overflow-x-auto border-b border-slate-200 p-2 [scrollbar-width:none] lg:block lg:overflow-visible lg:border-r lg:border-b-0">
                        {WORKFLOW.map((s, i) => {
                            const p = getProduct(s.product);
                            const on = i === active;
                            return (
                                <li key={s.title} className="shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => go(i)}
                                        className={`flex w-max items-center gap-2 rounded-lg px-2.5 py-1.5 text-left transition lg:w-full lg:gap-3 lg:px-3 lg:py-2 ${on ? 'bg-brand-50 ring-1 ring-brand-200' : 'hover:bg-slate-50'}`}
                                    >
                                        <span
                                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                                                i < active ? 'bg-emerald-500 text-white' : on ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-700'
                                            }`}
                                        >
                                            {i < active ? <Icon name="tick" size={12} strokeWidth={3} /> : i + 1}
                                        </span>
                                        <span className="min-w-0 lg:flex-1">
                                            <span className={`block text-[13px] font-semibold whitespace-nowrap lg:truncate ${on ? 'text-brand-700' : 'text-slate-800'}`}>{s.title}</span>
                                            <span className="hidden truncate text-[11px] text-slate-500 lg:block">{p.name}</span>
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ol>

                    {/* Detail */}
                    <div key={active} className="animate-[fadeUp_.45s_ease] p-5 sm:p-7">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <p className="eyebrow">Step {active + 1}</p>
                                <h3 className="mt-1 text-2xl font-extrabold">{step.title}</h3>
                            </div>
                            <Link to={`/products/${product.slug}`} className="group flex items-center gap-2.5 rounded-lg border border-slate-200 px-3 py-2 hover:border-brand-300">
                                <IconTile name={product.icon} size="sm" />
                                <span>
                                    <span className="block text-[11px] text-slate-500">Handled by</span>
                                    <span className="block text-sm font-bold text-ink">{product.name}</span>
                                </span>
                            </Link>
                        </div>
                        <p className="mt-4 max-w-2xl leading-relaxed text-slate-800">{step.body}</p>
                        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-lg bg-slate-50 p-3">
                                <dt className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Who acts</dt>
                                <dd className="mt-0.5 font-semibold text-ink">{step.actor}</dd>
                            </div>
                            <div className="rounded-lg bg-slate-50 p-3">
                                <dt className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Typical time</dt>
                                <dd className="mt-0.5 font-semibold text-ink">{step.tat}</dd>
                            </div>
                        </dl>
                        <p className="mt-5 text-[11px] font-bold tracking-wider text-slate-500 uppercase">Output</p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {step.outputs.map((o) => (
                                <li key={o} className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[13px] font-medium text-emerald-800 ring-1 ring-emerald-200">
                                    <Icon name="tick" size={12} strokeWidth={3} /> {o}
                                </li>
                            ))}
                        </ul>
                        {playing && (
                            <div className="mt-6 h-0.5 overflow-hidden rounded bg-slate-100">
                                <div className="h-full origin-left bg-brand-500" style={{ animation: `grow ${STEP_MS}ms linear` }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {full && <p className="mt-3 text-center text-xs text-slate-400">Press Esc to exit full screen</p>}
        </div>
    );
};

const TechnologyPage = () => {
    usePageTitle('Technology');

    return (
        <>
            <PageHero eyebrow="Technology-enabled claims" title="Technology meets claims expertise" crumbs={[{ label: 'Technology' }]} image={IMAGES.code}>
                Modern claims need speed, connectivity, accurate documentation and well-managed information. iBima is the
                technology framework we built around that principle — and the people who use it every day.
            </PageHero>

            {/* Framework */}
            <section className="container-x section">
                <SectionHeading eyebrow="Our framework" title="Four connected capabilities">
                    Each one is useful alone. Together they move a claim from first call to payment without paper,
                    phone tag or lost photos.
                </SectionHeading>
                <div className="grid gap-5 md:grid-cols-2">
                    {CAPABILITIES.map((c, i) => {
                        const p = getProduct(c.product);
                        return (
                            <Reveal key={c.title} delay={(i % 2) * 90}>
                                <div className="card card-hover group h-full">
                                    <div className="flex items-start gap-4">
                                        <IconTile name={c.icon} size="lg" />
                                        <div>
                                            <h3 className="text-lg font-bold">{c.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-700">{c.body}</p>
                                        </div>
                                    </div>
                                    <ul className="mt-4 grid gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
                                        {c.points.map((pt) => (
                                            <li key={pt} className="flex gap-2 text-[13px] text-slate-800">
                                                <Icon name="tick" size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-emerald-600" /> {pt}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={`/products/${p.slug}`} className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-700">
                                        Powered by {p.name} <Icon name="arrow" size={14} className="transition group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* Objective ticker */}
            <section className="surface-deep overflow-hidden py-9 text-white">
                <div className="container-x mb-5 text-center">
                    <p className="text-xs font-bold tracking-[0.16em] text-logo-teal uppercase">Our objective</p>
                    <h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                        Faster communication. Better coordination. Structured assessment. Improved TAT.
                    </h2>
                </div>
                <div className="relative [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
                    <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
                        {[...OBJECTIVES, ...OBJECTIVES].map((o, i) => (
                            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-slate-100">
                                <span className="h-1.5 w-1.5 rounded-full bg-logo-orange" /> {o}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow viewer */}
            <section className="section bg-slate-50">
                <div className="container-x">
                    <SectionHeading eyebrow="Claim workflow" title="See how a claim moves through iBima">
                        An interactive look at the end-to-end claim — tap any step, or let it play. For the full system view, see the{' '}
                        <Link to="/architecture" className="font-semibold text-brand-700 underline underline-offset-2">claims architecture</Link>.
                    </SectionHeading>
                    <Reveal>
                        <WorkflowViewer />
                    </Reveal>
                </div>
            </section>

            {/* Under the hood */}
            <section className="container-x section">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
                    <div>
                        <SectionHeading eyebrow="Under the hood" title="Built for scale, security and audit">
                            Purpose-built for Indian insurance claims — field-first, AI-assisted and fully traceable.
                        </SectionHeading>
                        <Reveal className="overflow-hidden rounded-xl shadow-lg">
                            <img src={IMAGES.analytics.src} alt={IMAGES.analytics.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                        </Reveal>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {STACK.map((s, i) => (
                            <FeatureCard key={s.title} {...s} delay={(i % 2) * 80} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABand title="See our technology in action" body="A live walkthrough of the claim workflow on your own sample claims." />
        </>
    );
};

export default TechnologyPage;
