import { useMemo, useState } from 'react';
import useActiveSection from '../../hooks/activeSection.js';

const linkBase = 'font-sans text-[14px] leading-5 no-underline transition-colors';

export default function Nav({ links, resume }) {
    const [open, setOpen] = useState(false);
    // 'home' is watched too, so no link lights up while the hero is in view
    const ids = useMemo(() => ['home', ...links.map((link) => link.id)], [links]);
    const activeId = useActiveSection(ids);

    const renderLinks = (onClick) => (
        <>
            {links.map((link) => {
                const active = link.id === activeId;
                return (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            onClick={onClick}
                            aria-current={active ? 'true' : undefined}
                            className={`${linkBase} border-b-2 py-1 ${
                                active ? 'border-brand text-brand-text' : 'border-transparent text-ink-muted hover:text-ink'
                            }`}
                        >
                            {link.label}
                        </a>
                    </li>
                );
            })}
            <li>
                <a
                    href={resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} inline-block rounded-full border-[1.5px] border-brand px-3.5 py-1.5 text-brand-text hover:bg-brand-soft`}
                >
                    {resume.label} <span aria-hidden="true">↗</span>
                </a>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-card pt-[env(safe-area-inset-top,0px)]">
            <nav aria-label="Main" className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
                <a href="#home" className="text-[20px] font-bold leading-7 text-logo no-underline">
                    My Lu
                </a>

                <ul className="m-0 hidden list-none items-center gap-[22px] p-0 tab:flex">{renderLinks()}</ul>

                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="rounded-sm border border-line px-2.5 py-1.5 text-[13px] font-medium text-ink tab:hidden"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </nav>

            {open && (
                <ul id="mobile-menu" className="m-0 flex list-none flex-col items-start gap-4 border-t border-line px-4 py-5 sm:px-6 tab:hidden">
                    {renderLinks(() => setOpen(false))}
                </ul>
            )}
        </header>
    );
}
