export default function Postmark({ children }) {
    return (
        <div
            aria-hidden="true"
            className="grid h-[78px] w-[78px] -rotate-[14deg] place-items-center rounded-full border-2 border-dashed border-brand-text px-2 text-center text-[10px] font-bold uppercase leading-3 text-brand-text"
        >
            {children}
        </div>
    );
}
