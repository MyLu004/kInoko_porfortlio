import CardShell from '../../common/CardShell.jsx';
import { bgClass, colorAt } from '../../common/colors.js';

// A lanyard ID badge: coloured band with a slot, picture, role tag
export default function ClubBadgeCard({ club, index }) {
    return (
        <CardShell
            as="article"
            radius="rounded-xl"
            hoverStraighten={false}
            className="overflow-hidden motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-[0.5deg]"
        >
            {/* Band colour rotates peach → butter → pink → mint (STICKER_COLORS in colors.js) */}
            <div className={`grid h-[46px] place-items-center ${bgClass[colorAt(index)]}`}>
                <span aria-hidden="true" className="h-3 w-14 rounded-full bg-cream shadow-slot" />
            </div>

            <div className="mx-6 mt-4 grid aspect-[16/7] place-items-center overflow-hidden rounded-md bg-sticker-butter">
                {club.image ? (
                    <img src={club.image} alt={`${club.club} website`} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                    <span className="font-sans text-[40px] font-bold leading-none text-brand-heading">{club.initials}</span>
                )}
            </div>

            <div className="grid justify-items-start gap-2 px-6 pb-6 pt-4">
                <span className="-rotate-2 rounded-full bg-brand px-3.5 py-[5px] text-[13px] font-bold leading-[18px] text-brand-ink shadow-sticker">
                    {club.role}
                </span>
                <h4 className="m-0 mt-1 text-[17px] font-bold leading-6 text-ink">{club.club}</h4>
                <p className="m-0 text-[12px] font-medium leading-[18px] text-ink-subtle">{club.dates}</p>
                <p className="m-0 text-ink-muted">{club.description}</p>
                {club.url && (
                    <a
                        href={club.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium leading-[18px] text-brand-text no-underline hover:underline hover:underline-offset-[3px]"
                    >
                        Visit website <span aria-hidden="true">↗</span>
                    </a>
                )}
            </div>
        </CardShell>
    );
}
