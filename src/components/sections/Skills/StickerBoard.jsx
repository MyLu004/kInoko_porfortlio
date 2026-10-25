import Sticker from '../../common/Sticker.jsx';

// Dashed board with an orange tab; sticker colours and tilts rotate automatically
export default function StickerBoard({ title, items }) {
    return (
        <div className="relative rounded-xl border-2 border-dashed border-doodle bg-card px-6 pb-8 pt-11">
            <h3 className="absolute -top-[18px] left-6 m-0 -rotate-2 rounded-full bg-brand px-[18px] py-2 text-[15px] font-bold leading-5 text-brand-ink shadow-sticker">
                {title}
            </h3>
            <ul className="m-0 flex list-none flex-wrap justify-center gap-x-3 gap-y-3.5 p-0">
                {items.map((item, i) => (
                    <li key={item}>
                        <Sticker color="auto" index={i}>{item}</Sticker>
                    </li>
                ))}
            </ul>
        </div>
    );
}
