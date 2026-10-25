import Button from '../../common/Button.jsx';
import Mascot from '../../common/Mascot.jsx';
import Sparkle from '../../common/Sparkle.jsx';
import StatusPill from '../../common/StatusPill.jsx';
import Sticker from '../../common/Sticker.jsx';
import useTypewriter from '../../../hooks/typewriter.js';

// Typed in order, then loops. The headline reserves 3 lines, so keep each under ~50 characters.
const TYPED_LINES = [
    'Welcome to my portfolio',
    'I am a Full Stack Software Engineer',
    'Passionate about building applications',
    'Interesting in MedTech, AI, and Web Development',
    'Feel free to connect with me for a coffee chat',
];

const FLOATING = [
    { label: 'AI/ML', color: 'peach', tilt: -3, position: 'left-0 top-[30%]', delay: '0s' },
    { label: 'Software Engineering', color: 'mint', tilt: 3, position: 'right-0 bottom-[2%] sm:-right-[2%] sm:bottom-[22%]', delay: '1.2s' },
    { label: 'Fullstack', color: 'butter', tilt: -2, position: 'left-[2%] bottom-[14%] sm:left-[10%] sm:bottom-[6%]', delay: '2.4s' },
];

export default function Hero({ contact, resume }) {
    const typed = useTypewriter(TYPED_LINES, { typeMs: 55, deleteMs: 25, holdMs: 1800 });
    const socials = [{ label: 'Email', url: `mailto:${contact.email}` }, ...contact.links];

    return (
        <div className="grid items-center gap-12 tab:grid-cols-[1.15fr_.85fr]">
            <div>
                <div className="mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-4">
                    <p className="m-0 inline-flex -rotate-2 items-center gap-2 rounded-full border-[3px] border-card bg-card px-[18px] py-2 font-sans text-[16px] leading-[26px] text-ink shadow-sticker outline outline-1 outline-line sm:text-[18px]">
                        <span aria-hidden="true">👋</span> Hi, I am {contact.name} <span aria-hidden="true">🌷</span>
                    </p>
                    <div className="max-sm:basis-full">
                        <StatusPill tone="mint">Open to Software Opportunities</StatusPill>
                    </div>
                </div>

                {/* min-h reserves 3 lines so the page doesn't jump while lines type and delete */}
                <h1 className="max-w-[13ch] m-0 min-h-[3.75em] font-sans text-[34px] font-bold leading-[1.25] tracking-[-0.02em] text-brand-heading sm:text-[44px]">
                    <span className="sr-only">Welcome to my portfolio</span>
                    <span aria-hidden="true">
                        <span className="underline decoration-doodle decoration-wavy decoration-[3px] underline-offset-[10px]">
                            {typed}
                        </span>
                        <span className="ml-1.5 inline-block h-[.9em] w-1 bg-brand align-[-0.08em] motion-safe:animate-blink" />
                    </span>
                </h1>

                <p className="my-8 max-w-[46ch] text-ink-muted">
                    Frontend developer building accessible, human-centered web and health-tech apps with React and Tailwind.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Button href="#contact" size="lg">Let’s Connect</Button>
                    <Button href={resume.url} variant="ghost" size="lg" external>See my Resume</Button>
                </div>

                <ul className="m-0 mt-8 flex list-none flex-wrap gap-3 p-0">
                    {socials.map((link, i) => (
                        <li key={link.label}>
                            <Sticker href={link.url} external color="auto" index={i} size="sm">
                                {link.label}
                            </Sticker>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Art: above the text under 860px. Bubble, stickers and sparkles stay siblings of the photo so they sit on top. */}
            <div className="relative mx-auto w-full max-w-[340px] order-first tab:order-none tab:max-w-none">
                <Mascot framed tilt={0}>
                    {/* Fills the disc (inset 10%); object position keeps the face centred in the circle */}
                    <img
                        src="/assets/headshot-web.jpg"
                        alt={`Photo of ${contact.name}`}
                        width={900}
                        height={1200}
                        fetchPriority="high"
                        className="absolute inset-[10%] h-[80%] w-[80%] rounded-full border-4 border-card object-cover object-[50%_25%] shadow-sticker"
                    />
                </Mascot>

                <span className="absolute -right-[4%] top-[6%] z-[2] rotate-[4deg] rounded-[18px_18px_18px_6px] bg-card px-4 py-2.5 text-[14px] font-bold leading-5 text-ink shadow-sticker-card tab:right-[2%]">
                    Hi there! <b className="text-brand-text" aria-hidden="true">✿</b>
                </span>

                {FLOATING.map((item) => (
                    <span
                        key={item.label}
                        style={{ animationDelay: item.delay }}
                        className={`absolute z-[2] motion-safe:animate-float ${item.position}`}
                    >
                        <Sticker color={item.color} tilt={item.tilt} size="xs">{item.label}</Sticker>
                    </span>
                ))}

                <Sparkle size={22} className="left-[14%] top-[10%]" />
                <Sparkle size={16} className="right-[12%] top-[46%]" />
                <Sparkle size={18} className="bottom-0 left-[46%]" />
            </div>
        </div>
    );
}
