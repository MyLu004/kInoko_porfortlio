import SectionHeading from '../../layout/SectionHeading.jsx';
import TrailCap from './TrailCap.jsx';
import TrailStop from './TrailStop.jsx';

// The mushroom trail: newest first, a dashed path linking each stop
export default function ExperienceTimeline({ experiences }) {
    return (
        <>
            <SectionHeading title="Work Experience" lede="My little trail so far, newest first." />
            <ol className="relative mx-auto m-0 max-w-[940px] list-none p-0 before:absolute before:bottom-[34px] before:left-[22px] before:top-10 before:border-l-4 before:border-dashed before:border-doodle sm:before:left-[186px]">
                <TrailCap tone="start">You are here</TrailCap>
                {experiences.map((job, i) => (
                    <TrailStop key={job.id} job={job} index={i} />
                ))}
                <TrailCap tone="end">Where to next?</TrailCap>
            </ol>
        </>
    );
}
