import { useContext } from "react"
import { GeneralContext } from "../App"
import Icons from "../elements/Icons"

export default ({ project, idx, setModalVisibility, setSelectedProject }) => {
    const { contactIconsUrl } = useContext(GeneralContext)
    const isOdd = idx % 2 != 0

    const handleClick = () => {
        setSelectedProject(project)
        setModalVisibility(true)
    }

    return (
        <div 
            className={`max-w-sm w-full my-8 mx-auto rounded-lg shadow-md lg:max-w-fit lg:flex ${isOdd ? 'lg:flex-row-reverse': null}`}
        >
            <div 
                className={`h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t-lg lg:rounded-t-none ${isOdd ? 'lg:rounded-r-lg' : 'lg:rounded-l-lg'} overflow-hidden`} 
                style={{backgroundImage: `url(${ project.imageUrl })`}} 
            />
            <div className={`rounded-b-lg bg-white p-4 flex flex-col justify-between ${isOdd ? 'lg:rounded-l-lg' : 'lg:rounded-r-lg'}`}>
                <div className="mb-8">
                    <p>{ project.subtitle }</p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{ project.title }</div>
                    <p className="text-gray-700 min-w-full">{ project.description }</p>
                </div>
                <div className={`flex flex-wrap items-center lg:justify-${isOdd ? 'start' : 'end'}`}>
                    <Icons techIconsUrl={project.tech} />
                    <div className="ml-auto flex">
                        <button
                            className='mx-2 px-4 mt-1.5 text-2xl font-bold rounded-full hover:scale-90' 
                            onClick={handleClick}
                        >
                            <img 
                                src="/assets/symbols/eye-60.webp" 
                                height={42} 
                                width={42} 
                                alt="see project" 
                            />
                        </button>
                        <a 
                            href={project.githubRepoUrl} 
                            className='mr-3 mt-1.5' 
                            target='_blank'
                        >
                            <img 
                                className="hover:scale-90 bg-black rounded-full"
                                src={contactIconsUrl.github.imageUrl} 
                                height={48} 
                                width={48} 
                                alt='github link' 
                            /> 
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}