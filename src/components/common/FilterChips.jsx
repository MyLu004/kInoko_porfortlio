// .ml-chip--cute
export default function FilterChips({ options, value, onChange, label = 'Filter', className = '' }) {
    return (
        <div role="group" aria-label={label} className={`flex flex-wrap justify-center gap-2 ${className}`}>
            {options.map((option) => {
                const active = option === value;
                return (
                    <button
                        key={option}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onChange(option)}
                        className={`rounded-full border-2 px-4 py-[7px] text-[13px] font-medium leading-[18px] shadow-sticker transition-colors duration-150 ${
                            active
                                ? 'border-brand bg-brand text-brand-ink'
                                : 'border-doodle bg-card text-ink-muted hover:text-brand-text'
                        }`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}
