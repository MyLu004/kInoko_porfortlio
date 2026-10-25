import { tiltStyle } from './colors.js';

// `raised` = the trail's date sticker; flat = the notebook's date tag
export default function DatePill({ tilt = 0, raised = false, className = '', children }) {
    return (
        <span
            style={tiltStyle(tilt)}
            className={`inline-block whitespace-nowrap rounded-full bg-sticker-butter text-[12px] font-medium leading-4 text-sticker-butter-ink rotate-[var(--tilt)] ${
                raised ? 'px-3 py-1.5 shadow-sticker' : 'px-2.5 py-1'
            } ${className}`}
        >
            {children}
        </span>
    );
}
