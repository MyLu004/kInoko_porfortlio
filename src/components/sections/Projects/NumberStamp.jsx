export default function NumberStamp({ no }) {
    return (
        <span className="shrink-0 rounded-full border-2 border-dashed border-doodle px-2.5 py-1.5 text-[11px] font-bold leading-none text-brand-text">
            No. {String(no).padStart(2, '0')}
        </span>
    );
}
