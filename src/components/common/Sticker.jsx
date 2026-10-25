import { colorAt, fillClass, tiltAt, tiltStyle } from './colors.js';

const sizes = {
    xs: 'px-3 py-1.5 text-[12px] leading-4',
    sm: 'px-3.5 py-[7px] text-[13px] leading-[18px]',
    md: 'px-[18px] py-2.5 text-[14px] leading-5',
};

export default function Sticker({
    as,
    color = 'peach',
    index = 0,
    tilt,
    dot = true,
    size = 'md',
    href,
    external = false,
    className = '',
    children,
    ...rest
}) {
    const Tag = as ?? (href ? 'a' : 'span');
    const tone = color === 'auto' ? colorAt(index) : color;
    const angle = tilt ?? (color === 'auto' ? tiltAt(index) : 0);
    const linkProps = Tag === 'a'
        ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
        : {};

    return (
        <Tag
            {...linkProps}
            {...rest}
            style={tiltStyle(angle)}
            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[3px] border-card font-bold no-underline shadow-sticker outline outline-1 outline-line rotate-[var(--tilt)] transition-transform duration-200 hover:rotate-0 motion-safe:hover:scale-[1.08] ${sizes[size]} ${fillClass[tone]} ${className}`}
        >
            {dot && <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-current opacity-55" />}
            {children}
            {external && <span aria-hidden="true">↗</span>}
        </Tag>
    );
}
