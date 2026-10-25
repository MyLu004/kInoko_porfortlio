import SectionHeading from '../../layout/SectionHeading.jsx';
import ClubBadgeCard from './ClubBadgeCard.jsx';
import NotebookCard from './NotebookCard.jsx';

export default function EducationClubs({ education }) {
    return (
        <>
            <SectionHeading title="Education" />
            <div className="mb-[72px] grid gap-10 pt-4 tab:grid-cols-2 tab:gap-8">
                {education.degrees.map((degree, i) => (
                    <NotebookCard key={degree.id} degree={degree} index={i} />
                ))}
            </div>

            <SectionHeading title="Club Activities" level="h3" />
            <div className="grid gap-8 tab:grid-cols-3">
                {education.clubs.map((club, i) => (
                    <ClubBadgeCard key={club.id} club={club} index={i} />
                ))}
            </div>
        </>
    );
}
