import LinkIcons from "../components/LinkIcons"
import Icons from "../components/Icons"

export default () => {
    return (
        <>
            <header className="relative h-screen bg-hero bg-center">
                <div className="absolute h-full w-full bg-black opacity-70"></div>
                <div className="absolute h-full w-full text-white flex flex-col items-center justify-center xl:flex-row xl:px-20">
                    <img className='z-10 h-1/4 rounded-full my-8 md:h-1/3 lg:h-96 xl:h-3/4' src="/src/assets/oficina_removebg_tinify.png" alt="felipe"/>
                    <div className="flex flex-col items-center space-y-8 ">
                        <div className="flex flex-col w-full items-center">
                            <div className="mb-2 text-center">
                                <h1 className="text-4xl xl:text-6xl">Felipe Asenjo</h1>
                                <h2 className="text-2xl my-2 xl:text-4xl">Desarrollador Full Stack</h2>
                            </div>
                            <div className="flex space-x-10">
                                <LinkIcons />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-3/4 sm:w-1/2 justify-center p-2 bg-white opacity-60 rounded-lg">
                            <Icons />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}