import { useEffect, useState } from 'react';

// Types each word, holds, deletes, moves on. A single word is typed once and stays.
// Runs for reduced-motion visitors too: changing text isn't motion (only the caret's blink is
// switched off, by the global reduced-motion CSS).
// Pass a stable array (defined outside the component).
export default function useTypewriter(words, { typeMs = 80, deleteMs = 45, holdMs = 1600 } = {}) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let delay;
        let next;

        if (!deleting && text.length < word.length) {
            delay = typeMs;
            next = () => setText(word.slice(0, text.length + 1));
        } else if (!deleting) {
            if (words.length === 1) return;
            delay = holdMs;
            next = () => setDeleting(true);
        } else if (text.length > 0) {
            delay = deleteMs;
            next = () => setText(word.slice(0, text.length - 1));
        } else {
            delay = typeMs;
            next = () => {
                setDeleting(false);
                setIndex((i) => i + 1);
            };
        }

        const timer = setTimeout(next, delay);
        return () => clearTimeout(timer);
    }, [words, index, text, deleting, typeMs, deleteMs, holdMs]);

    return text;
}
