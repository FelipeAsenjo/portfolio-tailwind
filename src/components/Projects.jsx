import { useContext } from "react"
import { GeneralContext } from "../App"
import Card from "../elements/Card"

export default () => {
    const { projects } = useContext(GeneralContext)
    const publicProjects = projects()

    return (
        <section className="min-h-screen p-8">
            <h3 className="text-center text-2xl md:text-4xl">Projects</h3>
            <hr className="border-primary border-t-2 my-2 md:my-8 max-w-sm md:max-w-md lg:max-w-4xl mx-auto"/>
            {publicProjects.map((project, idx) => {
                return <Card project={project} idx={idx} key={idx}/>
            })}
        </section>
    )
}