const tones = {
    start: 'bg-brand text-brand-ink -rotate-[4deg]',
    end: 'bg-sticker-mint text-sticker-mint-ink rotate-[3deg]',
};

// "You are here" / "Where to next?" signs at either end of the trail
export default function TrailCap({ tone = 'start', children }) {
    return (
        <li
            aria-hidden="true"
            className={`relative z-[1] grid grid-cols-[48px_1fr] sm:grid-cols-[160px_56px_1fr] ${tone === 'start' ? 'mb-[18px]' : 'mt-1.5'}`}
        >
            <span
                className={`col-start-1 justify-self-start whitespace-nowrap rounded-full border-[3px] border-card px-3 py-[5px] text-[12px] font-bold leading-4 shadow-sticker sm:col-start-2 sm:justify-self-center ${tones[tone]}`}
            >
                {children}
            </span>
        </li>
    );
}
