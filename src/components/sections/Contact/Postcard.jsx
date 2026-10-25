import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import Button from '../../common/Button.jsx';
import CardShell from '../../common/CardShell.jsx';
import Sticker from '../../common/Sticker.jsx';
import LineField from './LineField.jsx';
import Postmark from './Postmark.jsx';
import Stamp from './Stamp.jsx';

const BUTTON_LABEL = {
    idle: 'Send postcard ✉',
    sending: 'Sending…',
    sent: 'Sent! ✿',
    error: 'Send postcard ✉',
};

export default function Postcard({ contact, resume }) {
    const form = useRef(null);
    const [status, setStatus] = useState('idle');
    const stickers = [...contact.links, { label: resume.label, url: resume.url }];

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                import.meta.env.EMAILJS_SERVICE_ID,
                import.meta.env.EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus('sent');
                    form.current.reset();
                },
                (error) => {
                    console.error('Email failed', error?.text ?? error);
                    setStatus('error');
                }
            );
    };

    return (
        <CardShell
            hoverStraighten={false}
            className="postcard-frame mx-auto grid p-6 shadow-sticker-lift tab:-rotate-[0.6deg] tab:grid-cols-[1.25fr_1fr] tab:p-8"
        >
            <form
                ref={form}
                onSubmit={sendEmail}
                className="relative grid content-start gap-[18px] border-b-2 border-dashed border-doodle pb-6 tab:border-b-0 tab:border-r-2 tab:pb-0 tab:pr-8"
            >
                <p className="m-0 text-[20px] font-bold leading-7 text-brand-text">Hi My,</p>
                <LineField id="message" name="message" label="Message" placeholder="I’d love to chat about…" multiline required />
                <LineField id="user_name" name="user_name" label="From" placeholder="Your name" autoComplete="name" required />
                <LineField id="user_email" name="user_email" type="email" label="Your email" placeholder="you@email.com" autoComplete="email" required />
                <div>
                    <Button type="submit" disabled={status === 'sending'}>{BUTTON_LABEL[status]}</Button>
                </div>
                <p aria-live="polite" className="m-0 min-h-[22px] text-[13px] text-ink-muted">
                    {status === 'error' && <>That didn’t go through. You can email me at {contact.email} instead.</>}
                </p>
            </form>

            <div className="relative grid content-start gap-6 pt-6 tab:pl-8 tab:pt-0">
                <div className="flex items-center gap-3 justify-self-start tab:justify-self-end">
                    <Postmark>{contact.postmark}</Postmark>
                    <Stamp />
                </div>

                <div className="grid">
                    <p className="m-0 border-b-2 border-sticker-peach text-[14px] leading-[34px] text-ink">
                        <span className="mr-2 text-[12px] text-ink-subtle">To</span>{contact.name}
                    </p>
                    <p className="m-0 border-b-2 border-sticker-peach text-[14px] leading-[34px] text-ink">
                        <span className="mr-2 text-[12px] text-ink-subtle">Email</span>
                        <a href={`mailto:${contact.email}`} className="break-all text-ink no-underline hover:text-brand-text hover:underline">
                            {contact.email}
                        </a>
                    </p>
                    <p className="m-0 border-b-2 border-sticker-peach text-[14px] leading-[34px] text-ink">
                        <span className="mr-2 text-[12px] text-ink-subtle">Based in</span>{contact.location}
                    </p>
                </div>

                <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                    {stickers.map((link, i) => (
                        <li key={link.label}>
                            <Sticker href={link.url} external color="auto" index={i}>{link.label}</Sticker>
                        </li>
                    ))}
                </ul>
            </div>
        </CardShell>
    );
}
