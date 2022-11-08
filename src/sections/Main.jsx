import Projects from "../components/Projects"
import Tech from "../components/Tech"
import About from "../components/About"
import Contact from "../components/Contact"

export default () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline p-4">
                Hello Main!
            </h1>
            <Projects />
            <Tech />
            <About />
            <Contact />
        </>
    )
}