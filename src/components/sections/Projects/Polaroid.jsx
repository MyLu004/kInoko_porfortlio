import Button from '../../common/Button.jsx';
import CardShell from '../../common/CardShell.jsx';
import StatusPill from '../../common/StatusPill.jsx';
import Tape from '../../common/Tape.jsx';
import { TagList } from '../../common/PillTag.jsx';
import NumberStamp from './NumberStamp.jsx';
import PhotoFrame from './PhotoFrame.jsx';

// .ml-polaroid:nth-child(4n+…) tilts
const TILTS = [-1.5, 1.5, 1, -1];

export default function Polaroid({ project, index }) {
    return (
        <CardShell
            as="article"
            tilt={TILTS[index % TILTS.length]}
            radius="rounded-md"
            lift="motion-safe:hover:-translate-y-1.5"
            className="px-3.5 pb-6 pt-3.5"
        >
            <Tape tilt={index % 2 ? 5 : -4} />
            <PhotoFrame
                image={project.image}
                imageFit={project.imageFit}
                backdrop={project.backdrop}
                initials={project.initials}
                alt={`Screenshot of ${project.title}`}
            />
            <div className="grid gap-2.5 px-1.5 pt-[18px]">
                <div className="flex items-center justify-between gap-3">
                    <NumberStamp no={project.no} />
                    {project.featured && <StatusPill tone="brand" icon="★">Featured</StatusPill>}
                </div>
                <h3 className="m-0 text-[18px] font-bold leading-[26px] text-brand-text">{project.title}</h3>
                <p className="m-0 text-ink-muted">{project.description}</p>
                <TagList items={project.tags} />
                <div className="flex flex-wrap gap-3 pt-1">
                    {project.liveUrl && <Button href={project.liveUrl} size="sm" external>Live site</Button>}
                    {project.githubUrl && <Button href={project.githubUrl} variant="ghost" size="sm" external>GitHub</Button>}
                </div>
            </div>
        </CardShell>
    );
}
