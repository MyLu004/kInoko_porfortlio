export default function Sparkle({ size = 22, className = '' }) {
    return (
        <span
            aria-hidden="true"
            style={{ fontSize: size }}
            className={`absolute z-[1] font-sans font-bold leading-none text-doodle ${className}`}
        >
            ✦
        </span>
    );
}
