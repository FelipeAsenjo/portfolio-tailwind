import { useTranslation } from "react-i18next"
export default () => {
    const { t } = useTranslation('global')
    const currentDate = new Date()

    return (
        <footer className="bg-secondary text-white text-center py-4 xl:py-8">
            <small>
                {t('footer.footer_1')}{currentDate.getFullYear()}. 
                {t('footer.footer_2')}
            </small>
        </footer>
    )
}