
class HtmlTemplates {

    default(formValues) {
        let template = ''

        Object.keys(formValues).forEach(key => template = template.concat(`<p>${key}: ${formValues[key]}</p>`))

        return template
    }
}

export default HtmlTemplates