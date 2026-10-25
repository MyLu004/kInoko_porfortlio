import { MASCOT_SRC } from './assets.js';
import { tiltStyle } from './colors.js';

// framed = peach disc + dashed ring (hero). `children` replaces the image (the hero puts the 3D mushroom there)
export default function Mascot({ size = 44, tilt = -8, framed = false, alt = '', className = '', children }) {
    if (framed) {
        return (
            <div className={`relative grid aspect-square place-items-center ${className}`}>
                <div
                    aria-hidden="true"
                    className="absolute inset-[10%] rounded-full bg-brand-soft outline-dashed outline-[3px] outline-offset-[12px] outline-doodle"
                />
                <div style={tiltStyle(tilt)} className="relative h-full w-full rotate-[var(--tilt)]">
                    {children ?? <img src={MASCOT_SRC} alt={alt} className="mx-auto h-full w-[64%] object-contain" />}
                </div>
            </div>
        );
    }

    return (
        <img
            src={MASCOT_SRC}
            alt={alt}
            aria-hidden={alt ? undefined : 'true'}
            width={size}
            height={size}
            style={{ width: size, height: size, ...tiltStyle(tilt) }}
            className={`shrink-0 rotate-[var(--tilt)] object-contain ${className}`}
        />
    );
}
