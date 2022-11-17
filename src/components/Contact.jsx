import { useTranslation } from "react-i18next"
import ContactForm from "../elements/ContactForm"
import H3 from "../elements/H3"

const { VITE_MAILER_URL } = import.meta.env

export default ({ setIsModalSubmitting, setModalVisibility, setMessageSentSuccessfully }) => {
    const { t } = useTranslation('global')
    const sendEmail = async (values) => {
        return await fetch(VITE_MAILER_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: values
        })
    }

    const handleFormSubmit = async (values, resetForm, setSubmitting) => {
        setIsModalSubmitting(true)
        setModalVisibility(true)
        const stringifyValues = JSON.stringify(values)
        const res = await sendEmail(stringifyValues)
        if (res.status != 200) {
            setSubmitting(false)
            setIsModalSubmitting(false)
            setMessageSentSuccessfully(false)
            setModalVisibility(false)

            return
        }

        resetForm()
        setSubmitting(false)
        setIsModalSubmitting(false)
        setMessageSentSuccessfully(true)

        setTimeout(() => {
            setModalVisibility(false)
            setMessageSentSuccessfully(null)
        }, 2500);
    }

    const handleValidation = values => {
        const errors = {};
        const isValidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

        if (!values.email) errors.email = 'Required';
        if (!values.name) errors.name = 'Required';
        if (!values.message) errors.message = 'Required';

        if (isValidEmail) errors.email = 'Invalid email address';

        return errors;
    }

    return (
        <section className="p-8" id="contact">
            <H3 title={t('contact.sectionTitle')} />
            <div className="relative flex justify-center my-8">
                <ContactForm
                    handleFormSubmit={handleFormSubmit}
                    handleValidation={handleValidation}
                />
            </div>
        </section>
    )
}