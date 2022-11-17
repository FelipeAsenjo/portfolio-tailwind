import H3 from "../elements/H3"

export default () => {
    return (
        <section className="min-h-1/2 p-8">
            <H3 title={'About me'}/> 
            <div className="flex justify-center my-8">
                <iframe 
                    className="rounded-lg aspect-video w-full md:3/4 lg:max-w-5xl"
                    src="https://www.youtube.com/embed/UN74axQXaGo" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
            </div>
        </section>
    )
}