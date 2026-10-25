// Hand-drawn wave: under section titles, and (stretched) under "my portfolio"
export default function WavyUnderline({ width = 150, stretch = false, strokeWidth = 4, className = '' }) {
    const waves = Math.max(1, Math.round((width - 4) / 16));
    const viewWidth = waves * 16 + 4;
    const d = `M 2 6 ${'q 4 -5 8 0 t 8 0 '.repeat(waves)}`;

    return (
        <svg
            aria-hidden="true"
            width={stretch ? '100%' : viewWidth}
            height="12"
            viewBox={`0 0 ${viewWidth} 12`}
            preserveAspectRatio="none"
            fill="none"
            className={`overflow-visible stroke-doodle ${className}`}
        >
            <path d={d} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
    );
}
