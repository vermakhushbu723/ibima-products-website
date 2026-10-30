import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} | iBima` : 'iBima | Insurance Claim Products for Motor & Non-Motor';
    }, [title]);
};

// One shared scroll watcher for every <Reveal>. Anything whose top has
// come within the viewport — or been scrolled past, e.g. after an anchor
// jump — is revealed. A plain position check on each animation frame
// can't "miss" an element the way IntersectionObserver occasionally
// does on very fast scrolls.
const pending = new Set();
let frame = 0;
const check = () => {
    frame = 0;
    const line = window.innerHeight - 40;
    pending.forEach((el) => {
        if (el.getBoundingClientRect().top < line) {
            el.classList.add('is-in');
            pending.delete(el);
        }
    });
};
const schedule = () => {
    if (!frame) frame = requestAnimationFrame(check);
};
if (typeof window !== 'undefined') {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
}

// Fades + lifts its children in the first time they scroll into view.
// `delay` (ms) staggers items in a grid: pass index * 70 or so.
export const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        pending.add(el);
        schedule();
        return () => pending.delete(el);
    }, []);
    return (
        <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
            {children}
        </Tag>
    );
};

// Inner-page header: dark navy over a photograph, with breadcrumbs.
export const PageHero = ({ eyebrow, title, children, crumbs, image }) => (
    <section className="relative overflow-hidden bg-ink text-white">
        {image && (
            <img src={image.src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" fetchPriority="high" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" aria-hidden="true" />
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-12 sm:py-16">
            {crumbs && (
                <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-300" aria-label="Breadcrumb">
                    <Link to="/" className="hover:text-white">Home</Link>
                    {crumbs.map((c) => (
                        <React.Fragment key={c.label}>
                            <span className="text-slate-500">/</span>
                            {c.to ? (
                                <Link to={c.to} className="hover:text-white">{c.label}</Link>
                            ) : (
                                <span className="font-medium text-white">{c.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            )}
            {eyebrow && <p className="mb-2 text-xs font-bold tracking-[0.16em] text-logo-teal uppercase">{eyebrow}</p>}
            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-[2.75rem] sm:leading-tight">{title}</h1>
            {children && <div className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">{children}</div>}
        </div>
    </section>
);

export const SectionHeading = ({ eyebrow, title, children, center = false }) => (
    <Reveal className={`mb-8 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-[2rem] sm:leading-tight">{title}</h2>
        {children && <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{children}</p>}
    </Reveal>
);

export const StatusBadge = ({ status }) => {
    const live = status === 'Live';
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                live ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'
            }`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${live ? 'animate-pulse bg-emerald-500' : 'bg-amber-500'}`} />
            {status}
        </span>
    );
};

// A colour icon on a soft white tile. Grows slightly when its card is hovered.
export const IconTile = ({ name, size = 'md', className = '' }) => {
    const box = { sm: 'h-9 w-9 rounded-lg', md: 'h-12 w-12 rounded-xl', lg: 'h-16 w-16 rounded-2xl' }[size];
    const px = { sm: 22, md: 28, lg: 38 }[size];
    return (
        <span
            className={`grid shrink-0 place-items-center bg-gradient-to-br from-white to-slate-50 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:scale-110 group-hover:shadow-md ${box} ${className}`}
        >
            <Icon name={name} size={px} />
        </span>
    );
};

export const ProductIcon = ({ product, size = 'md' }) => <IconTile name={product.icon} size={size} />;

export const ProductCard = ({ product: p, delay = 0 }) => (
    <Reveal delay={delay} className="h-full">
        <Link to={`/products/${p.slug}`} className="card card-hover group relative flex h-full flex-col overflow-hidden">
            <span className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${p.color} transition duration-500 group-hover:scale-x-100`} aria-hidden="true" />
            <div className="flex items-start justify-between gap-3">
                <ProductIcon product={p} />
                <StatusBadge status={p.status} />
            </div>
            <p className="mt-4 text-[11px] font-bold tracking-wider text-slate-500 uppercase">{p.category}</p>
            <h3 className="mt-0.5 text-[17px] font-bold">{p.name}</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-700">{p.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-700">
                Explore product <Icon name="arrow" size={14} className="transition group-hover:translate-x-1" />
            </span>
        </Link>
    </Reveal>
);

// Icon + title + body card used for features, values, reasons.
export const FeatureCard = ({ icon, title, body, delay = 0 }) => (
    <Reveal delay={delay} className="h-full">
        <div className="card card-hover group h-full">
            <IconTile name={icon} />
            <h3 className="mt-3.5 font-bold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{body}</p>
        </div>
    </Reveal>
);

export const CTABand = ({
    title = 'See iBima on your own claims',
    body = 'Book a 30-minute walkthrough. We will show the products that fit your lines and volumes — as SaaS or fully managed.',
}) => (
    <section className="container-x pb-12 sm:pb-14">
        <Reveal className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-logo-navy px-6 py-9 text-white sm:px-10">
            <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                    <h2 className="text-xl font-extrabold text-white sm:text-2xl">{title}</h2>
                    <p className="mt-2 text-sm text-brand-100">{body}</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                    <Link to="/contact" className="btn-primary">Book a demo <Icon name="arrow" size={14} /></Link>
                    <Link to="/products" className="btn-ghost">All products</Link>
                </div>
            </div>
        </Reveal>
    </section>
);

export const CheckList = ({ items, className = '' }) => (
    <ul className={`space-y-2.5 ${className}`}>
        {items.map((it) => (
            <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-slate-800">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <Icon name="tick" size={12} strokeWidth={3} />
                </span>
                {it}
            </li>
        ))}
    </ul>
);
