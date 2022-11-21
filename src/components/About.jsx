import React, { Suspense } from "react"
import CustomLoader from "../elements/CustomLoader"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import H3 from "../elements/H3"

export default ({ setActiveRef }) => {
    const { t, i18n } = useTranslation('global')

    const handleChange = (inView, entry) => {
        if(inView) setActiveRef(entry.target.id)
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.6,
        onChange: (inView, entry) => handleChange(inView, entry)
    });

    const LazyIFrame = React.lazy(() => import('../elements/YtIframe'))

    return (
        <section className="min-h-1/2 p-8" id="about" ref={ref}>
            <H3 title={t('about.sectionTitle')}/> 
            <div className="flex flex-col justify-center items-center my-8 text-red-700 text-center">
                { i18n.language === 'es' && <h4 className="text-lg md:text-2xl my-3">{t('about.message')}</h4> }

                <Suspense fallback={<CustomLoader />} >
                        <LazyIFrame />
                </Suspense>

            </div>
        </section>
    )
}