export default ({ project, idx }) => {
    const isOdd = idx % 2 != 0

    return (
        <div className={`max-w-sm w-full my-8 mx-auto rounded-lg shadow-md lg:max-w-fit lg:flex ${isOdd ? 'lg:flex-row-reverse': null}`}>
            <div 
                className={`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-lg lg:rounded-t-none lg:rounded-${!isOdd ? 'l':'r'}-lg overflow-hidden`} 
                style={{backgroundImage: `url(${ project.imageUrl })`}} 
            />
            <div className="rounded-b-lg bg-white p-4 flex flex-col justify-between lg:rounded-r-lg dark:bg-gray-300">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{ project.title }</div>
                    <p className="text-gray-700">{ project.description }</p>
                </div>
                <div className={`flex flex-wrap items-center lg:justify-${isOdd ? 'start' : 'end'}`}>
                    {project.tech.map((techIcon, idx) => (
                        <img 
                            className="w-10 h-10 mr-4" 
                            src={techIcon} 
                            alt={project.title} 
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}