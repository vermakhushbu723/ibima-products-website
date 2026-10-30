import React from 'react';
import { Link } from 'react-router-dom';

// The iBima "i" figure — orange head, teal shoulders and stem —
// drawn to match the iBima Assist wordmark artwork.
export const IMark = ({ className = '' }) => (
    <svg viewBox="0 0 55 136" className={className} aria-hidden="true" focusable="false">
        <circle cx="27.5" cy="16" r="16" fill="var(--color-logo-orange)" />
        <rect x="0" y="40" width="55" height="25" rx="12.5" fill="var(--color-logo-teal)" />
        <rect x="14.5" y="44" width="26" height="92" rx="13" fill="var(--color-logo-teal)" />
    </svg>
);

const Logo = ({ onDark = false }) => (
    <Link to="/" aria-label="iBima home" className="inline-flex items-baseline text-[1.5rem] leading-none tracking-tight">
        <IMark className="relative top-[0.08em] mr-[0.05em] h-[1.36em] w-auto self-baseline" />
        <span className="font-extrabold" style={{ color: onDark ? '#fff' : 'var(--color-logo-navy)' }}>
            Bima
        </span>
        <span className="ml-1.5 self-center rounded-md bg-logo-teal/15 px-1.5 py-0.5 text-[0.5em] font-bold tracking-wider text-logo-teal uppercase">
            Products
        </span>
    </Link>
);

export default Logo;
