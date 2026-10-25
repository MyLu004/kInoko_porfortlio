import { tiltStyle } from './colors.js';

// Shared base for Polaroid, Notebook, Trail card, Club badge and Postcard.
// `radius` takes a full rounded-* class so odd shapes (the notebook's) work too.
export default function CardShell({
    as = 'div',
    tilt = 0,
    radius = 'rounded-lg',
    lift = 'motion-safe:hover:-translate-y-1',
    hoverStraighten = true,
    className = '',
    children,
    ...rest
}) {
    const Tag = as;
    return (
        <Tag
            style={tiltStyle(tilt)}
            className={`relative bg-card shadow-sticker-card rotate-[var(--tilt)] transition duration-[250ms] ${radius} ${
                hoverStraighten ? `hover:rotate-0 hover:shadow-sticker-lift ${lift}` : ''
            } ${className}`}
            {...rest}
        >
            {children}
        </Tag>
    );
}
