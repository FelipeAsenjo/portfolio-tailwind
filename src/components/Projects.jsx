import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { GeneralContext } from "../App"
import Card from "../elements/Card"
import H3 from "../elements/H3"

export default ({ setActiveRef }) => {
    const { t } = useTranslation('global')
    const { projects } = useContext(GeneralContext)

    const publicProjects = projects()

    const handleChange = (inView, entry) => {
        if(inView) setActiveRef(entry.target.id)
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.4,
        onChange: (inView, entry) => handleChange(inView, entry)
    })

    return (
        <section className="min-h-screen p-8" id="projects" ref={ref}>
            <H3 title={t('projects.sectionTitle')}/>
            {publicProjects.map((project, idx) => {
                return <Card project={project} idx={idx} key={idx}/>
            })}
        </section>
    )
}