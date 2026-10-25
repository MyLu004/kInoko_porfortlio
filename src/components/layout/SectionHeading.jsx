import Mascot from '../common/Mascot.jsx';
import WavyUnderline from '../common/WavyUnderline.jsx';

const titleSizes = {
    h2: 'text-[28px] leading-[34px] sm:text-[34px] sm:leading-10',
    h3: 'text-[24px] leading-8 sm:text-[28px] sm:leading-[34px]',
};

// mascot: true (before the title) or 'after'
export default function SectionHeading({ title, lede, mascot = false, level = 'h2', className = '', children }) {
    const Title = level;

    return (
        <div className={`mb-8 text-center ${className}`}>
            <div className="inline-flex items-center gap-3">
                {mascot && mascot !== 'after' && <Mascot />}
                <Title className={`m-0 font-bold text-brand-heading ${titleSizes[level]}`}>{title}</Title>
                {mascot === 'after' && <Mascot tilt={8} />}
            </div>
            <WavyUnderline className="mx-auto mt-1.5 block" />
            {lede && <p className="mx-auto mt-3 max-w-[52ch] text-ink-muted">{lede}</p>}
            {children}
        </div>
    );
}
