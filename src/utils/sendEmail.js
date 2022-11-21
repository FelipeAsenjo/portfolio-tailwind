const sendEmail = async (values) => {
    return await fetch('https://admin-services-eqtsi7580-felipeasenjo.vercel.app/mailer', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: values
    })
}

export default sendEmail