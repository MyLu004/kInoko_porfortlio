// A label over a borderless field on a peach line (ruled lines for multiline)
export default function LineField({ id, label, multiline = false, ...rest }) {
    const shared = 'w-full rounded-none border-0 bg-transparent px-0.5 font-mono text-[15px] leading-8 text-ink placeholder:text-ink-subtle focus:border-brand';
    return (
        <div className="grid gap-0.5">
            <label htmlFor={id} className="text-[12px] font-medium leading-4 text-ink-subtle">
                {label}
            </label>
            {multiline ? (
                <textarea id={id} rows={4} className={`${shared} bg-lines min-h-32 resize-y`} {...rest} />
            ) : (
                <input id={id} className={`${shared} border-b-2 border-sticker-peach`} {...rest} />
            )}
        </div>
    );
}
