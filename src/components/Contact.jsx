import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import ContactForm from "./ContactForm"
import H3 from "../elements/H3"

export default (props) => {
    const { t } = useTranslation('global')
    const {
        setActiveRef,
        ...restOfProps
    } = props

    const handleChange = (inView, entry) => {
        if(inView) setActiveRef(entry.target.id)
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.7,
        onChange: (inView, entry) => handleChange(inView, entry)
    })

    return (
        <section className="p-8" id="contact" ref={ref}>
            <H3 title={t('contact.sectionTitle')} />
            <div className="relative flex justify-center my-8">
                <ContactForm {...restOfProps} />
            </div>
        </section>
    )
}