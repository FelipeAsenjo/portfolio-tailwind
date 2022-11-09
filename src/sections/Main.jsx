import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

export default () => {
    return (
        <main className='px-4 bg-gray-100 lg:px-20'>
            <Projects />
            <About />
            <Contact />
        </main>
    )
}