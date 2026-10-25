import { lazy, Suspense } from 'react';
import { MASCOT_SRC } from '../../common/assets.js';

// Lazy so three.js only downloads when the stamp renders, not with the first page load
const StampMushroom = lazy(() => import('./StampMushroom.jsx'));

// Perforated pink postage stamp with the 3D mushroom that follows the cursor.
// The flat mushroom shows while the 3D scene loads.
export default function Stamp() {
    return (
        <div aria-hidden="true" className="stamp-perf h-[108px] w-[92px] rotate-[4deg] p-1.5">
            <div className="relative h-full w-full overflow-hidden bg-sticker-pink">
                <Suspense fallback={<img src={MASCOT_SRC} alt="" className="h-full w-full object-contain p-1.5" />}>
                    <StampMushroom />
                </Suspense>
            </div>
        </div>
    );
}
