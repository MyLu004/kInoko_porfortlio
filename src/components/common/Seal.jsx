export default function Seal({ value, label, className = '' }) {
    return (
        <div
            className={`grid h-[76px] w-[76px] rotate-[10deg] place-items-center content-center rounded-full border-[3px] border-card bg-sticker-peach text-center text-[12px] font-bold leading-[14px] text-sticker-peach-ink shadow-sticker ${className}`}
        >
            <b className="block text-[18px] leading-5">{value}</b>
            {label}
        </div>
    );
}
