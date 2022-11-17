import { useTranslation } from "react-i18next"
import H3 from "../elements/H3"

export default () => {
    const { t, i18n } = useTranslation('global')

    return (
        <section className="min-h-1/2 p-8" id="about">
            <H3 title={t('about.sectionTitle')}/> 
            <div className="flex flex-col justify-center items-center my-8 text-red-700 text-center">
                { i18n.language === 'es' && <h4 className="text-lg md:text-2xl my-3">{t('about.message')}</h4> }
                <iframe 
                    className="rounded-lg aspect-video w-full md:3/4 lg:max-w-5xl"
                    src="https://www.youtube.com/embed/UN74axQXaGo" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
            </div>
        </section>
    )
}