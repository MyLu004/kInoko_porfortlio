const tones = {
    // .ml-now
    mint: 'bg-sticker-mint text-sticker-mint-ink font-bold text-[12px] px-2.5 py-1',
    // .ml-star
    brand: 'bg-brand text-brand-ink font-medium text-[11px] px-2.5 py-[3px]',
};

// "Current", "Open to work", "★ Featured"
export default function StatusPill({ tone = 'mint', icon = '●', className = '', children }) {
    return (
        <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full leading-4 ${tones[tone]} ${className}`}>
            {icon && <span aria-hidden="true" className={tone === 'mint' ? 'text-[9px]' : ''}>{icon}</span>}
            {children}
        </span>
    );
}
