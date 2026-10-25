import { bgClass } from '../../common/colors.js';

// Pastel backdrop; screenshots fill it (cover), device renders float (contain), or initials when there's no image
export default function PhotoFrame({ image, imageFit = 'cover', backdrop = 'peach', initials, alt }) {
    return (
        <div className={`grid aspect-[4/3] place-items-center overflow-hidden rounded-[10px] ${bgClass[backdrop]}`}>
            {image ? (
                <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className={`h-full w-full ${imageFit === 'contain' ? 'object-contain p-[8%]' : 'object-cover'}`}
                />
            ) : (
                <span className="font-sans text-[40px] font-bold leading-none text-brand-heading">{initials}</span>
            )}
        </div>
    );
}
