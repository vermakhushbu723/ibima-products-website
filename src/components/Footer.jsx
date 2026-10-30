import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import { BRAND, CONTACT, LEGAL, NAV_LINKS, PORTAL_LINKS } from '../data/site';
import { PRODUCTS } from '../data/products';

const Col = ({ title, children }) => (
    <div>
        <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">{title}</h3>
        <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
);

const Footer = () => (
    <footer className="surface-deep text-slate-300">
        <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
            <div>
                <Logo onDark />
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                    {BRAND.tagline}. A product family of {BRAND.operator}, serving insurers, brokers, surveyors and
                    workshops since {BRAND.established}.
                </p>
                <p className="mt-5 mb-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">Portal login</p>
                <div className="flex flex-wrap gap-2">
                    {PORTAL_LINKS.map((p) => (
                        <a
                            key={p.href}
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 hover:border-white/40 hover:text-white"
                        >
                            {p.label} <Icon name="external" size={12} />
                        </a>
                    ))}
                </div>
            </div>

            <Col title="Products">
                {PRODUCTS.map((p) => (
                    <li key={p.slug}>
                        <Link to={`/products/${p.slug}`} className="hover:text-white">
                            {p.name}
                        </Link>
                    </li>
                ))}
            </Col>

            <Col title="Company">
                {NAV_LINKS.filter((l) => l.to !== '/').map((l) => (
                    <li key={l.to}>
                        <Link to={l.to} className="hover:text-white">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </Col>

            <Col title="Get in touch">
                <li className="flex gap-2">
                    <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-logo-teal" />
                    <span>{CONTACT.office.join(', ')}</span>
                </li>
                {CONTACT.phones.map((p) => (
                    <li key={p.href} className="flex gap-2">
                        <Icon name="call" size={16} className="mt-0.5 shrink-0 text-logo-teal" />
                        <a href={p.href} className="hover:text-white">
                            {p.label}
                        </a>
                    </li>
                ))}
                <li className="flex gap-2">
                    <Icon name="email" size={16} className="mt-0.5 shrink-0 text-logo-teal" />
                    <a href={CONTACT.emailHref} className="hover:text-white">
                        {CONTACT.email}
                    </a>
                </li>
            </Col>
        </div>

        <div className="border-t border-white/10">
            <div className="container-x space-y-3 py-6 text-xs leading-relaxed text-slate-500">
                <p>{LEGAL.disclaimer}</p>
                <p className="flex flex-wrap gap-x-4 gap-y-1">
                    <span>
                        © {new Date().getFullYear()} {BRAND.operator}. All rights reserved.
                    </span>
                    <span>{LEGAL.cin}</span>
                    <span>{LEGAL.gstin}</span>
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
