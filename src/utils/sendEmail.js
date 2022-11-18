const { VITE_MAILER_URL } = import.meta.env

const sendEmail = async (values) => {
    return await fetch(VITE_MAILER_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: values
    })
}

export default sendEmail