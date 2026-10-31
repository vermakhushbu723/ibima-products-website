import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand, usePageTitle } from '../components/ui';
import { getProduct } from '../data/products';
import { ARCH_NOTES, KINDS, STAGES, STATUS } from '../data/architecture';

const ALL_NODES = STAGES.flatMap((s) => s.nodes);
const COUNTS = ALL_NODES.reduce((acc, n) => ({ ...acc, [n.status]: (acc[n.status] || 0) + 1 }), {});

const StatusPill = ({ status }) => (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${STATUS[status].className}`}>
        {STATUS[status].label}
    </span>
);

// Animated dashed arrow between two stages.
const Connector = ({ color = '#0ea5e9', label }) => (
    <div className="relative flex h-14 items-center justify-center" aria-hidden="true">
        <svg width="16" height="56" viewBox="0 0 16 56" className="overflow-visible">
            <line x1="8" y1="0" x2="8" y2="46" stroke={color} strokeWidth="2.4" strokeDasharray="7 6" className="animate-[flow_1.6s_linear_infinite]" />
            <path d="M2 44 L8 54 L14 44 Z" fill={color} />
        </svg>
        {label && <span className="absolute left-1/2 ml-4 font-mono text-[10px] whitespace-nowrap text-slate-500">{label}</span>}
    </div>
);

const NodeCard = ({ node, dim, selected, onSelect }) => {
    const kind = KINDS[node.kind];
    return (
        <button
            type="button"
            onClick={() => onSelect(node)}
            aria-pressed={selected}
            className={`group relative flex h-full w-full items-start gap-3 rounded-xl border bg-gradient-to-br from-[#0d1b2b] to-[#07101d] p-3.5 pt-4 text-left shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1 ${
                selected ? 'ring-2' : ''
            } ${dim ? 'opacity-20 hover:opacity-60' : ''}`}
            style={{ borderColor: `${kind.color}66`, '--tw-ring-color': kind.color, boxShadow: selected ? `0 10px 30px -8px ${kind.color}66` : undefined }}
        >
            <span
                className="absolute -top-2 left-3 rounded-full border bg-[#0c1b2b] px-1.5 font-mono text-[9px] text-slate-300"
                style={{ borderColor: `${kind.color}88` }}
            >
                {node.step}
            </span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/95 shadow transition group-hover:scale-110">
                <Icon name={node.icon} size={26} />
            </span>
            <span className="min-w-0 flex-1">
                <span className="block text-[13px] leading-snug font-bold" style={{ color: kind.color }}>
                    {node.title}
                </span>
                <span className="mt-1 block font-mono text-[10px] leading-snug text-slate-400">{node.short}</span>
                <span className="mt-2 flex flex-wrap items-center gap-1.5">
                    <StatusPill status={node.status} />
                    {node.tat && <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[9px] text-slate-300 ring-1 ring-white/10">⏱ {node.tat.split(' (')[0]}</span>}
                </span>
            </span>
        </button>
    );
};

// Side panel (desktop) / bottom sheet (phone) for the selected node.
const DetailPanel = ({ node, onClose }) => {
    useEffect(() => {
        if (!node) return undefined;
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [node, onClose]);

    if (!node) return null;
    const kind = KINDS[node.kind];
    const product = getProduct(node.product);
    return (
        <aside
            className="fixed inset-x-3 bottom-3 z-[60] max-h-[70vh] animate-[fadeUp_.3s_ease] overflow-y-auto rounded-2xl border bg-[#0b1a2a] p-5 shadow-2xl shadow-black/60 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[400px]"
            style={{ borderColor: `${kind.color}88` }}
            aria-live="polite"
        >
            <button type="button" onClick={onClose} className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close details">
                <Icon name="close" size={18} />
            </button>
            <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                Step {node.step} · {kind.label}
            </p>
            <h3 className="mt-1 pr-8 text-lg font-bold" style={{ color: kind.color }}>
                {node.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
                <StatusPill status={node.status} />
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-200">{node.detail}</p>
            {node.tat && (
                <p className="mt-3 rounded-lg bg-white/5 px-3 py-2 font-mono text-[11px] text-slate-200 ring-1 ring-white/10">⏱ {node.tat}</p>
            )}
            <Link
                to={`/products/${product.slug}`}
                className="mt-4 flex items-center gap-2.5 rounded-lg border border-white/10 px-3 py-2 transition hover:border-white/30 hover:bg-white/5"
            >
                <span className="grid h-8 w-8 place-items-center rounded-md bg-white">
                    <Icon name={product.icon} size={20} />
                </span>
                <span className="min-w-0 flex-1">
                    <span className="block text-[10px] text-slate-400">Runs on</span>
                    <span className="block text-sm font-semibold text-white">{product.name}</span>
                </span>
                <Icon name="arrow" size={14} className="text-slate-400" />
            </Link>
        </aside>
    );
};

const Chip = ({ active, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium whitespace-nowrap transition ${
            active ? 'border-white/40 bg-white/10 text-white' : 'border-transparent text-slate-400 hover:border-white/15 hover:text-slate-200'
        }`}
    >
        {children}
    </button>
);

const ArchitecturePage = () => {
    usePageTitle('Architecture');
    const [kindFilter, setKindFilter] = useState(null);
    const [statusFilter, setStatusFilter] = useState(null);
    const [selected, setSelected] = useState(null);

    const isDim = useMemo(
        () => (n) => (kindFilter && n.kind !== kindFilter) || (statusFilter && n.status !== statusFilter),
        [kindFilter, statusFilter],
    );
    const clear = () => {
        setKindFilter(null);
        setStatusFilter(null);
        setSelected(null);
    };

    return (
        <div className="bg-[#040810] text-slate-200">
            {/* Header */}
            <header className="border-b border-white/10 bg-gradient-to-b from-sky-500/10 to-transparent px-4 pt-10 pb-7 text-center">
                <p className="text-[10px] font-bold tracking-[0.25em] text-sky-400 uppercase">
                    <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 align-middle shadow-[0_0_10px] shadow-emerald-400" />
                    iBima Assist · VroomSync Expertise Pvt Ltd
                </p>
                <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                    iBima Assist <span className="text-sky-400">Digital Motor Claims</span> Architecture
                </h1>
                <p className="mx-auto mt-3 max-w-3xl text-[13px] leading-relaxed text-slate-400">
                    App-based motor own-damage claims, end to end — insurer intimation, live digital inspection, AI assessment,
                    human validation, approval and settlement, with records, security and governance across every stage.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono text-[10px] text-slate-300">
                    <span className="rounded-full border border-white/15 px-2.5 py-1">{ALL_NODES.length} steps · {STAGES.length} stages</span>
                    <span className="rounded-full border border-emerald-400/30 px-2.5 py-1 text-emerald-300">{COUNTS.live} live</span>
                    <span className="rounded-full border border-sky-400/30 px-2.5 py-1 text-sky-300">{COUNTS.config} configurable</span>
                    <span className="rounded-full border border-amber-400/30 px-2.5 py-1 text-amber-300">{COUNTS.planned} planned</span>
                    <span className="rounded-full border border-white/15 px-2.5 py-1">Version 2.1 · 31 October 2026</span>
                </div>
            </header>

            {/* Toolbar */}
            <nav className="sticky top-16 z-30 border-b border-white/10 bg-[#06101c]/95 backdrop-blur md:top-[6.25rem]" aria-label="Diagram filters">
                <div className="container-x flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
                    {Object.entries(KINDS).map(([key, k]) => (
                        <Chip key={key} active={kindFilter === key} onClick={() => setKindFilter(kindFilter === key ? null : key)}>
                            <span className="h-[3px] w-4 rounded" style={{ background: k.color }} /> {k.label}
                        </Chip>
                    ))}
                    <span className="mx-1 h-4 w-px shrink-0 bg-white/15" />
                    {Object.entries(STATUS).map(([key, s]) => (
                        <Chip key={key} active={statusFilter === key} onClick={() => setStatusFilter(statusFilter === key ? null : key)}>
                            {s.label}
                        </Chip>
                    ))}
                    <button type="button" onClick={clear} className="ml-auto shrink-0 rounded-md border border-white/15 px-2.5 py-1 text-[11px] text-slate-300 hover:border-sky-400 hover:text-white">
                        Clear
                    </button>
                </div>
            </nav>

            <div className="container-x py-8">
                <p className="rounded-lg border border-amber-500/40 border-l-4 border-l-amber-400 bg-amber-950/30 px-4 py-3 text-[12px] leading-relaxed text-amber-100">
                    <b>Implementation status:</b> every step is marked <b>Live</b> (running in iBima today), <b>Configurable</b> (built; the
                    value is set per insurer) or <b>Planned</b> (roadmap). Planned items are shown for completeness and must not be
                    presented as live. Click any step for details.
                </p>

                {/* Diagram */}
                <div className="mt-8 [background-image:linear-gradient(rgb(0_210_255/.03)_1px,transparent_1px),linear-gradient(90deg,rgb(0_210_255/.03)_1px,transparent_1px)] [background-size:32px_32px]">
                    {STAGES.map((stage, i) => {
                        const lead = KINDS[stage.nodes[0].kind].color;
                        const next = STAGES[i + 1];
                        return (
                            <React.Fragment key={stage.id}>
                                <section
                                    className={`relative rounded-2xl border px-3 pt-7 pb-4 sm:px-5 ${stage.crossCutting ? 'border-dashed' : ''}`}
                                    style={{ borderColor: `${lead}55`, background: `${lead}08` }}
                                    aria-labelledby={`stage-${stage.id}`}
                                >
                                    <h2
                                        id={`stage-${stage.id}`}
                                        className="absolute -top-3 left-4 max-w-[calc(100%-2rem)] truncate rounded-md border bg-[#040810] px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase"
                                        style={{ color: lead, borderColor: `${lead}88` }}
                                    >
                                        {stage.id} · {stage.title}
                                    </h2>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                                        {stage.nodes.map((n) => (
                                            <NodeCard key={n.step} node={n} dim={isDim(n)} selected={selected?.step === n.step} onSelect={setSelected} />
                                        ))}
                                    </div>
                                    {stage.crossCutting && (
                                        <p className="mt-3 text-center font-mono text-[10px] text-slate-500">Applies to every stage above and below — not a sequential step.</p>
                                    )}
                                </section>
                                {next && <Connector color={KINDS[next.nodes[0].kind].color} />}
                            </React.Fragment>
                        );
                    })}
                </div>

                <ul className="mt-8 space-y-1.5 text-[12px] text-slate-400">
                    {ARCH_NOTES.map((n) => (
                        <li key={n} className="flex gap-2">
                            <span className="text-sky-400">•</span> {n}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white pt-10 sm:pt-14">
                <CTABand title="Walk through this architecture with us" body="A live demo of each stage on the iBima apps — and an honest view of what is live, configurable and planned." />
            </div>

            <DetailPanel node={selected} onClose={() => setSelected(null)} />
        </div>
    );
};

export default ArchitecturePage;
