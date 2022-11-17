import { useContext } from "react"
import { useTranslation } from "react-i18next"
// import { InView } from 'react-intersection-observer'
import { GeneralContext } from "../App"
import Card from "../elements/Card"
import H3 from "../elements/H3"

export default () => {
    const { t } = useTranslation('global')
    const { projects } = useContext(GeneralContext)
    // const { ref, inView, entry } = useInView({threshold: 0})

    const publicProjects = projects()

    return (
        <section className="min-h-screen p-8" id="projects">
            <H3 title={t('projects.sectionTitle')}/>
            {publicProjects.map((project, idx) => {
                return <Card project={project} idx={idx} key={idx}/>
            })}
        </section>
    )
}