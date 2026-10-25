import { useState } from 'react';
import SectionHeading from '../../layout/SectionHeading.jsx';
import FilterChips from '../../common/FilterChips.jsx';
import Polaroid from './Polaroid.jsx';

export default function ProjectsScrapbook({ projects, categories }) {
    const [filter, setFilter] = useState('All');
    const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

    return (
        <>
            <SectionHeading
                title="My Projects"
                lede="Little things I’ve built, from hackathon apps to health-tech dashboards."
                mascot
            >
                <FilterChips
                    options={categories}
                    value={filter}
                    onChange={setFilter}
                    label="Filter projects"
                    className="mt-6"
                />
            </SectionHeading>

            {shown.length > 0 ? (
                <div className="grid gap-10 px-2 pt-4 tab:grid-cols-2 tab:gap-x-10 tab:gap-y-11 tab:px-4 tab:pt-6">
                    {shown.map((project, i) => (
                        <Polaroid key={project.id} project={project} index={i} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-ink-muted">Nothing here yet. Check back soon ✿</p>
            )}
        </>
    );
}
