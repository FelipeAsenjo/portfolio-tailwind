import { Formik } from 'formik'
import H3 from "../elements/H3"

const { VITE_MAILER_URL } = import.meta.env

export default () => {

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
        const stringifyValues = JSON.stringify(values)
        alert(JSON.stringify(values, null, 4))
        const res = await sendEmail(stringifyValues)
        console.log(res.status)

        resetForm()
        setSubmitting(false)
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
        <section className="p-8">
            <H3 title={'Contact'}/> 
            <div className="flex justify-center my-8">
                <Formik 
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }} 
                    validate={values => handleValidation(values)}
                    onSubmit={(values, { resetForm, setSubmitting }) => handleFormSubmit(values, resetForm, setSubmitting)}
                >
                    {({ values, handleSubmit, handleChange, isSubmitting, errors, touched }) => (
                        <form onSubmit={handleSubmit} className='w-3/4 flex flex-col lg:max-w-3xl'>
                            <div className="relative z-0 mb-6 w-full group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" 
                                    placeholder=" " 
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                <label 
                                    htmlFor="name" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Full name
                                </label>
                                <p className='text-primary'>{errors.name && touched.name && errors.name}</p>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" 
                                    placeholder=" " 
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                <label 
                                    htmlFor="email" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email address
                                </label>
                                <p className='text-primary'>{errors.email && touched.email && errors.email}</p>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <textarea 
                                    type="textarea" 
                                    name="message" 
                                    id="message" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" 
                                    rows='4'
                                    placeholder=" " 
                                    onChange={handleChange}
                                    value={values.message}
                                />
                                <label 
                                    htmlFor="message" 
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Message
                                </label>
                                <p className='text-primary'>{errors.message && touched.message && errors.message}</p>
                            </div>
                            <button 
                                type="submit" 
                                className="text-white text-center bg-primary hover:bg-secondary focus:ring-4 focus:ring-gray-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 self-end disabled:bg-opacity-10"
                                disabled={isSubmitting}
                            >
                                Enviar
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}