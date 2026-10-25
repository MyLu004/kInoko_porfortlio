import SectionHeading from '../../layout/SectionHeading.jsx';
import StickerBoard from './StickerBoard.jsx';

export default function SkillsStickers({ skills }) {
    return (
        <>
            <SectionHeading title="My Skills" lede="My sticker collection of languages and tools." />
            <div className="grid gap-10 pt-4 tab:grid-cols-2 tab:gap-8">
                {skills.map((board) => (
                    <StickerBoard key={board.group} title={board.group} items={board.items} />
                ))}
            </div>
        </>
    );
}
