import CardShell from '../../common/CardShell.jsx';
import DatePill from '../../common/DatePill.jsx';
import Seal from '../../common/Seal.jsx';
import { TagList } from '../../common/PillTag.jsx';

// A notebook page: punched holes + pink margin line (the .notebook class), optional GPA seal
export default function NotebookCard({ degree, index }) {
    return (
        <CardShell
            as="article"
            tilt={index % 2 ? 1 : -1}
            radius="rounded-[12px_28px_28px_12px]"
            className="notebook py-6 pl-16 pr-6"
        >
            {degree.seal && <Seal value={degree.seal.value} label={degree.seal.label} className="absolute -top-[18px] right-5" />}
            <DatePill>{degree.dates}</DatePill>
            <h3 className={`m-0 mt-3 text-[18px] font-bold leading-[26px] text-brand-text ${degree.seal ? 'pr-16' : ''}`}>
                {degree.title}
            </h3>
            <p className="m-0 mt-0.5 font-medium text-ink">{degree.school}</p>
            <ul className="m-0 mt-3.5 grid list-none gap-1.5 p-0">
                {degree.honors.map((honor) => (
                    <li key={honor} className="relative pl-[22px] text-ink-muted">
                        <span aria-hidden="true" className="absolute left-0 top-0 text-[13px] text-brand">✿</span>
                        {honor}
                    </li>
                ))}
            </ul>
            <TagList items={degree.courses} className="mt-3.5" />
        </CardShell>
    );
}
