// Full class strings live here so Tailwind can see them (no string building)
export const STICKER_COLORS = ['peach', 'butter', 'pink', 'mint'];

export const fillClass = {
    peach: 'bg-sticker-peach text-sticker-peach-ink',
    butter: 'bg-sticker-butter text-sticker-butter-ink',
    pink: 'bg-sticker-pink text-sticker-pink-ink',
    mint: 'bg-sticker-mint text-sticker-mint-ink',
    white: 'bg-card text-ink',
};

export const dotClass = {
    peach: 'bg-sticker-peach-ink',
    butter: 'bg-sticker-butter-ink',
    pink: 'bg-sticker-pink-ink',
    mint: 'bg-sticker-mint-ink',
    white: 'bg-brand',
};

export const bgClass = {
    peach: 'bg-sticker-peach',
    butter: 'bg-sticker-butter',
    pink: 'bg-sticker-pink',
    mint: 'bg-sticker-mint',
};

// .ml-sticker:nth-child(4n+…) tilts, paired with the colour order
const TILTS = [-3, 2, -1, 3];

export const colorAt = (index) => STICKER_COLORS[index % STICKER_COLORS.length];
export const tiltAt = (index) => TILTS[index % TILTS.length];

// Sets --tilt, which `rotate-[var(--tilt)]` reads so `hover:rotate-0` can still override it
export const tiltStyle = (deg = 0) => ({ '--tilt': `${deg}deg` });
