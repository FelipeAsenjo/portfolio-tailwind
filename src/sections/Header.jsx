const techIconsUrl = {
    react: "/src/assets/tech/react-96.png",
    bootstrap: "/src/assets/tech/bootstrap-96.png",
    console: "/src/assets/tech/console-96.png",
    css3: "/src/assets/tech/css3-96.png",
    docker: "/src/assets/tech/docker-96.png",
    git: "/src/assets/tech/git-96.png",
    html5: "/src/assets/tech/html5-96.png",
    javascript: "/src/assets/tech/javascript-96.png",
    jest: "/src/assets/tech/jest-96.png",
    materialUi: "/src/assets/tech/materialUi-96.png",
    nginx: "/src/assets/tech/nginx-96.png",
    nodeJs: "/src/assets/tech/nodeJs-96.png",
    python: "/src/assets/tech/python-96.png",
    sass: "/src/assets/tech/sass-96.png",
    tailwindCss: "/src/assets/tech/tailwindCss-96.png",
    vueJs: "/src/assets/tech/vueJs-96.png",
    webpack: "/src/assets/tech/webpack-96.png",
}

const showIcons = () => {
    return Object.keys(techIconsUrl).map(iconName => (
        <img src={techIconsUrl[iconName]} height={48} width={48} alt={iconName} /> )
    )
}

export default () => {
    return (
        <>
            <header className="relative h-screen bg-hero bg-center">
                <div className="absolute h-full w-full bg-black opacity-70"></div>
                <div className="absolute h-full w-full text-white flex flex-col items-center space-y-10">
                    <img className='z-10 h-1/4 rounded-full my-12 lg:h-2/3' src="/src/assets/oficina_removebg_tinify.png" alt="felipe"/>
                    <div>
                        <div>
                            <h1 className="text-4xl">Felipe Asenjo</h1>
                            <h2 className="text-2xl my-4">Desarrollador Full Stack</h2>
                        </div>
                        <div className="technologies">{showIcons()}</div>
                    </div>
                    <div className="contact-icons"></div>
                </div>
            </header>

        </>
    )
}
// lg:justify-start lg:mx-20 md:items-center