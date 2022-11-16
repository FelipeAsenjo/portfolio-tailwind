export const colors = {
    primary: '#931323',
    secondary: '#333',
}

export const techIconsUrl = {
    react: "/src/assets/tech/react-96.png",
    reactNative: "/src/assets/tech/reactNative-96.png",
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

export const contactIconsUrl = {
    github: {
        imageUrl: '/src/assets/social-media/github-96.png',
        linkUrl: 'https://github.com/FelipeAsenjo',
    },
    linkedin: {
        imageUrl: '/src/assets/social-media/linkedin-96.png',
        linkUrl: 'https://www.linkedin.com/in/felipe-asenjo-aa0800202/'
    },
    twitter: {
        imageUrl: '/src/assets/social-media/twitter-96.png',
        linkUrl: 'https://twitter.com/Sir_Asenjo'
    },
}

export const projects = () => {
    const { 
        nodeJs, 
        console, 
        postgresql, 
        docker, 
        nginx, 
        react, 
        reactNative, 
        git 
    } = techIconsUrl

    return [
        {
            title: 'Scrapper',
            imageUrl: '/src/assets/placeholder.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, console, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/cleevy-scrapper'
        },
        {
            title: 'Personal Assistant',
            imageUrl: '/src/assets/placeholder.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, docker, git, postgresql, nginx},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/eva'
        },
        {
            title: 'Calendar',
            imageUrl: '/src/assets/placeholder.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {react, reactNative, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/calendar-module'
        },
    ]
}