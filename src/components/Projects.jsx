import { useContext } from "react"
import { GeneralContext } from "../App"
import Card from "../elements/Card"
import H3 from "../elements/H3"

export default () => {
    const { projects } = useContext(GeneralContext)
    const publicProjects = projects()

    return (
        <section className="min-h-screen p-8">
            <H3 title={'Projects'}/>
            {publicProjects.map((project, idx) => {
                return <Card project={project} idx={idx} key={idx}/>
            })}
        </section>
    )
}