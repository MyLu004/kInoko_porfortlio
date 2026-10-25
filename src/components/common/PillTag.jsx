import { colorAt, fillClass } from './colors.js';

export function PillTag({ color = 'peach', children }) {
    return (
        <span className={`inline-block rounded-full px-3 py-[5px] text-[12px] font-medium leading-4 ${fillClass[color]}`}>
            {children}
        </span>
    );
}

// Colors rotate peach → butter → pink → mint by index
export function TagList({ items, className = '' }) {
    return (
        <ul className={`flex flex-wrap gap-1.5 ${className}`}>
            {items.map((item, i) => (
                <li key={item}>
                    <PillTag color={colorAt(i)}>{item}</PillTag>
                </li>
            ))}
        </ul>
    );
}
