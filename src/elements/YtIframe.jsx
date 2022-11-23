export default () => {
    const ytURL = "https://www.youtube.com/embed/6y0U8Dy65A8"

    return (
         <iframe 
            className="rounded-lg aspect-video w-full md:3/4 lg:max-w-5xl"
            src={ytURL} 
            title="Felipe Asenjo intro"
            loading="lazy" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
        />       
    )
}