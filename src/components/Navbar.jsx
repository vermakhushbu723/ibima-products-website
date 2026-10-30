import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import { CONTACT, NAV_LINKS, PORTAL_LINKS } from '../data/site';
import { PRODUCTS } from '../data/products';
import { StatusBadge } from './ui';

// Desktop link: dark, semibold, with an underline that grows in when
// hovered and stays put on the active page.
const deskCls = ({ isActive }) =>
    `relative px-3 py-2 text-[14px] font-semibold transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:rounded-full after:bg-brand-600 after:transition-transform after:duration-300 ${
        isActive ? 'text-brand-700 after:scale-x-100' : 'text-slate-800 after:scale-x-0 hover:text-brand-700 hover:after:scale-x-100'
    }`;

const mobileCls = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-[15px] font-semibold ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-800 hover:bg-slate-50'}`;

// Hover / focus mega-menu listing every product.
const ProductsMenu = ({ label, to }) => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => setOpen(false), [pathname]);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
        >
            <NavLink to={to} className={deskCls} aria-haspopup="true" aria-expanded={open}>
                <span className="inline-flex items-center gap-1">
                    {label} <Icon name="chevron" size={14} className={`transition duration-300 ${open ? 'rotate-180' : ''}`} />
                </span>
            </NavLink>
            <div
                className={`absolute top-full left-1/2 w-[40rem] -translate-x-1/2 pt-3 transition duration-200 ${
                    open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                }`}
            >
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                    <div className="grid grid-cols-2 gap-0.5">
                        {PRODUCTS.map((p) => (
                            <Link key={p.slug} to={`/products/${p.slug}`} className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-brand-50/60">
                                <Icon name={p.icon} size={30} className="mt-0.5 shrink-0 transition group-hover:scale-110" />
                                <span className="min-w-0">
                                    <span className="flex items-center gap-2 text-sm font-bold text-ink">
                                        {p.name}
                                        {p.status !== 'Live' && <StatusBadge status={p.status} />}
                                    </span>
                                    <span className="line-clamp-1 block text-xs text-slate-600">{p.tagline}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/products"
                        className="mt-1 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-[13px] font-semibold text-brand-700 hover:bg-brand-50"
                    >
                        Compare all {PRODUCTS.length} products <Icon name="arrow" size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock page scroll behind the open mobile menu.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50">
            {/* Top strip — contact + portal login, desktop only */}
            <div className="hidden bg-ink text-[12px] text-slate-300 md:block">
                <div className="container-x flex h-9 items-center justify-between">
                    <div className="flex items-center gap-5">
                        <a href={CONTACT.phones[0].href} className="inline-flex items-center gap-1.5 hover:text-white">
                            <Icon name="call" size={13} /> {CONTACT.phones[0].label}
                        </a>
                        <a href={CONTACT.emailHref} className="inline-flex items-center gap-1.5 hover:text-white">
                            <Icon name="email" size={13} /> {CONTACT.email}
                        </a>
                        <span className="hidden items-center gap-1.5 lg:inline-flex">
                            <Icon name="time" size={13} /> Mon – Sat, 9 AM – 6 PM
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="mr-1 text-slate-400">Login:</span>
                        {PORTAL_LINKS.map((p) => (
                            <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className="rounded px-2 py-0.5 font-medium hover:bg-white/10 hover:text-white">
                                {p.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main bar */}
            <div className={`border-b bg-white transition-shadow duration-300 ${scrolled ? 'border-slate-200 shadow-md shadow-slate-900/5' : 'border-slate-100'}`}>
                <div className="container-x flex h-16 items-center justify-between gap-4">
                    <Logo />

                    <nav className="hidden items-center lg:flex" aria-label="Main">
                        {NAV_LINKS.map((l) =>
                            l.to === '/products' ? (
                                <ProductsMenu key={l.to} {...l} />
                            ) : (
                                <NavLink key={l.to} to={l.to} end={l.to === '/'} className={deskCls}>
                                    {l.label}
                                </NavLink>
                            ),
                        )}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link to="/contact" className="btn-primary hidden sm:inline-flex">
                            Book a demo
                        </Link>
                        <button
                            type="button"
                            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-slate-100 lg:hidden"
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                        >
                            <Icon name={open ? 'close' : 'menu'} size={22} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-b border-slate-200 bg-white lg:hidden">
                    <nav className="container-x flex flex-col gap-0.5 py-4" aria-label="Mobile">
                        {NAV_LINKS.map((l) => (
                            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={mobileCls}>
                                {l.label}
                            </NavLink>
                        ))}
                        <p className="eyebrow mt-5 mb-1 px-3">Products</p>
                        <div className="grid grid-cols-2 gap-1">
                            {PRODUCTS.map((p) => (
                                <Link key={p.slug} to={`/products/${p.slug}`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-800 hover:bg-slate-50">
                                    <Icon name={p.icon} size={20} /> {p.name.replace('iBima ', '')}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-5 grid gap-2 border-t border-slate-100 pt-5">
                            <Link to="/contact" className="btn-primary">Book a demo</Link>
                            <a href={CONTACT.phones[0].href} className="btn-outline">
                                <Icon name="call" size={14} /> {CONTACT.phones[0].label}
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
