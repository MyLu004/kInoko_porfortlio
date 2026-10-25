export default function Footer({ contact }) {
    return (
        <footer className="border-t border-line bg-card px-4 py-6 text-center text-[12px] leading-[18px] text-ink-subtle sm:px-6">
            © {new Date().getFullYear()} Portfolio made by {contact.name}
            <span aria-hidden="true" className="mx-2 text-brand-text">✿</span>
            {contact.location}
        </footer>
    );
}
