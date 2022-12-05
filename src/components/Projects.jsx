import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { GeneralContext } from "../App"
import Card from "../components/Card"
import H3 from "../elements/H3"

export default ({ setActiveRef, ...restOfProps }) => {
    const { t } = useTranslation('global')
    const { projects } = useContext(GeneralContext)

    const publicProjects = projects()
    const translatedProjects = t('projects.projects', { returnObjects: true })

    const handleChange = (inView, entry) => {
        if(inView) setActiveRef(entry.target.id)
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.3,
        onChange: (inView, entry) => handleChange(inView, entry)
    })

    return (
        <section className="min-h-screen p-8" id="projects" ref={ref}>
            <H3 title={t('projects.sectionTitle')}/>
            {publicProjects.map((project, idx) => {
                const joinedProjects = {...project, ...translatedProjects[idx]}
                return <Card 
                    {...restOfProps}
                    project={joinedProjects} 
                    idx={idx} 
                    key={idx}
                />
            })}
        </section>
    )
}