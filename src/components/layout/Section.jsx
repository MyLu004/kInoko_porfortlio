const dotClasses = {
    soft: 'bg-dots-soft',
    strong: 'bg-dots',
    none: 'bg-cream',
};

// `hero` swaps in the hero's tighter top padding
export default function Section({ id, dots = 'soft', hero = false, children }) {
    const padding = hero
        ? 'px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16'
        : 'px-4 py-16 sm:px-6 sm:py-24';

    return (
        <section id={id} className={`scroll-mt-16 ${padding} ${dotClasses[dots]}`}>
            <div className="mx-auto max-w-content">{children}</div>
        </section>
    );
}
