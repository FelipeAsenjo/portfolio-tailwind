import Http from "../utils/http"
import HtmlTemplates from "./emailTemplates"

class EmailService {

    constructor() {
        this.http = new Http() 
        this.emailTemplates = new HtmlTemplates()
    }

    async sendEmail(address, subject, formValues) {
        const apiBaseUrl = import.meta.env.VITE_EMAIL_API_URL
        const mappedValues = {
            address,
            subject,
            htmlTemplate: this.emailTemplates.default(formValues)
        }
        const res = await this.http.usePOST(`${apiBaseUrl}/admin-services/api/v1/emails/send`, JSON.stringify(mappedValues), true)

        console.log('res', res)
    }
}

export default EmailService 