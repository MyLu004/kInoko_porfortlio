const variants = {
    primary: 'bg-brand text-brand-ink shadow-sticker hover:shadow-lift motion-safe:hover:-translate-y-px',
    ghost: 'bg-card text-brand-text hover:bg-brand-soft',
};

const sizes = {
    lg: 'px-7 py-3.5 text-[15px] font-bold leading-5',
    md: 'px-5 py-3 text-[13px] font-medium leading-[18px]',
    sm: 'px-3 py-1.5 text-[12px] font-medium leading-[18px]',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    type = 'button',
    className = '',
    children,
    ...rest
}) {
    const classes = `inline-flex items-center gap-2 rounded-md border-[1.5px] border-brand no-underline transition duration-150 disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;
    const content = (
        <>
            {children}
            {external && <span aria-hidden="true">↗</span>}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...rest}
            >
                {content}
            </a>
        );
    }

    return (
        <button type={type} className={classes} {...rest}>
            {content}
        </button>
    );
}
