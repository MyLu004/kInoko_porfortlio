import CardShell from '../../common/CardShell.jsx';
import DatePill from '../../common/DatePill.jsx';
import Mascot from '../../common/Mascot.jsx';
import StatusPill from '../../common/StatusPill.jsx';
import { TagList } from '../../common/PillTag.jsx';

// One stop: date pill · node on the dashed trail · speech-bubble card
export default function TrailStop({ job, index }) {
    const nodeColor = job.current
        ? 'bg-sticker-peach outline-dashed outline-2 outline-offset-[3px] outline-brand'
        : index % 3 === 2
            ? 'bg-sticker-mint text-sticker-mint-ink'
            : 'bg-sticker-pink text-sticker-pink-ink';

    return (
        <li className="grid grid-cols-[48px_1fr] items-start gap-y-2.5 pb-[34px] sm:grid-cols-[160px_56px_1fr] sm:gap-y-0">
            <DatePill
                raised
                tilt={-2}
                className="col-start-2 row-start-1 ml-3 mt-2.5 justify-self-start sm:col-start-1 sm:ml-0 sm:mr-[18px] sm:mt-4 sm:justify-self-end"
            >
                {job.dates}
            </DatePill>

            <div
                className={`relative z-[1] col-start-1 row-span-2 row-start-1 grid h-[46px] w-[46px] place-items-center rounded-full border-[3px] border-card text-[13px] font-bold leading-none shadow-sticker sm:col-start-2 sm:row-span-1 sm:h-14 sm:w-14 sm:text-[15px] ${nodeColor}`}
            >
                {job.current
                    ? <Mascot size={32} tilt={0} />
                    : <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
            </div>

            <CardShell
                tilt={index % 2 ? 0.6 : -0.6}
                radius="rounded-[22px]"
                className="col-start-2 ml-3 px-[18px] pb-5 pt-[18px] sm:col-start-3 sm:row-start-1 sm:ml-5 sm:px-6 sm:pb-[22px] sm:pt-5"
            >
                <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-[22px] hidden h-[18px] w-[18px] rotate-45 rounded-[3px] bg-card sm:block"
                />
                <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="m-0 text-[18px] font-bold leading-[26px] text-brand-text">{job.role}</h3>
                    {job.current && <StatusPill tone="mint">Current</StatusPill>}
                </div>
                <p className="m-0 mt-1 text-[14px] font-medium leading-5 text-ink">
                    <span aria-hidden="true" className="text-brand-text">@ </span>
                    {job.company}
                </p>
                <p className="m-0 mt-2.5 text-ink-muted">{job.description}</p>
                <TagList items={job.tags} className="mt-3.5" />
            </CardShell>
        </li>
    );
}
