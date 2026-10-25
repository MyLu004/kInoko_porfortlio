import SectionHeading from '../../layout/SectionHeading.jsx';
import Postcard from './Postcard.jsx';

export default function ContactSection({ contact, resume }) {
    return (
        <>
            <SectionHeading
                title="Get in Touch"
                lede="Open to fullstack and health-tech roles. Drop me a postcard and I’ll write back!"
                mascot="after"
            />
            <Postcard contact={contact} resume={resume} />
        </>
    );
}
