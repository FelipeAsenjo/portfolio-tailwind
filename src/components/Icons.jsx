const techIconsUrl = {
    react: "/src/assets/tech/react-96.png",
    vueJs: "/src/assets/tech/vueJs-96.png",
    nodeJs: "/src/assets/tech/nodeJs-96.png",
    javascript: "/src/assets/tech/javascript-96.png",
    jest: "/src/assets/tech/jest-96.png",
    bootstrap: "/src/assets/tech/bootstrap-96.png",
    tailwindCss: "/src/assets/tech/tailwindCss-96.png",
    materialUi: "/src/assets/tech/materialUi-96.png",
    css3: "/src/assets/tech/css3-96.png",
    sass: "/src/assets/tech/sass-96.png",
    html5: "/src/assets/tech/html5-96.png",
    console: "/src/assets/tech/console-96.png",
    docker: "/src/assets/tech/docker-96.png",
    nginx: "/src/assets/tech/nginx-96.png",
    python: "/src/assets/tech/python-96.png",
    webpack: "/src/assets/tech/webpack-96.png",
    git: "/src/assets/tech/git-96.png",
    postgresql: "/src/assets/tech/postgresql-96.png",
    mongodb: "/src/assets/tech/mongodb-96.png",
    firebase: "/src/assets/tech/firebase-96.png",
}

const showIcons = (icons, h, w) => {
    return Object.keys(icons).map((iconName, idx) => (
            <img src={icons[iconName]} height={h} width={w} alt={iconName} key={idx}/> 
        )
    )
}

export default () => {
    return (
        <>
            {showIcons(techIconsUrl, 48, 48)}
        </>
    )
}