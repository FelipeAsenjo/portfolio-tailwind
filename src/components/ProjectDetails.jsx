export default ({selectedProject}) => {
    return (
        <>
            { selectedProject && 
                <img 
                    className="rounded-lg self-start" 
                    src={selectedProject.detailsImageUrl} 
                /> 
            }
        </>
    )
}