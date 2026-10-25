import { tiltStyle } from './colors.js';

export default function Tape({ tilt = -4 }) {
    return (
        <span
            aria-hidden="true"
            style={tiltStyle(tilt)}
            className="tape-edges absolute -top-3.5 left-1/2 z-10 h-[26px] w-24 -translate-x-1/2 rotate-[var(--tilt)] rounded-[3px] bg-doodle/75"
        />
    );
}
