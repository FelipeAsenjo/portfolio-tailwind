export const colors = {
    primary: '#931323',
    secondary: '#333',
}

export const techIconsUrl = {
    react: "/assets/tech/react-96.png",
    reactNative: "/assets/tech/reactNative-96.png",
    vueJs: "/assets/tech/vueJs-96.png",
    nodeJs: "/assets/tech/nodeJs-96.png",
    javascript: "/assets/tech/javascript-96.png",
    jest: "/assets/tech/jest-96.png",
    bootstrap: "/assets/tech/bootstrap-96.png",
    tailwindCss: "/assets/tech/tailwindCss-96.png",
    materialUi: "/assets/tech/materialUi-96.png",
    css3: "/assets/tech/css3-96.png",
    sass: "/assets/tech/sass-96.png",
    html5: "/assets/tech/html5-96.png",
    console: "/assets/tech/console-96.png",
    docker: "/assets/tech/docker-96.png",
    nginx: "/assets/tech/nginx-96.png",
    python: "/assets/tech/python-96.png",
    webpack: "/assets/tech/webpack-96.png",
    git: "/assets/tech/git-96.png",
    postgresql: "/assets/tech/postgresql-96.png",
    mongodb: "/assets/tech/mongodb-96.png",
    firebase: "/assets/tech/firebase-96.png",
}

export const contactIconsUrl = {
    github: {
        imageUrl: '/assets/social-media/github-96.png',
        linkUrl: 'https://github.com/FelipeAsenjo',
    },
    linkedin: {
        imageUrl: '/assets/social-media/linkedin-96.png',
        linkUrl: 'https://www.linkedin.com/in/felipe-asenjo-aa0800202/'
    },
    twitter: {
        imageUrl: '/assets/social-media/twitter-96.png',
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
            imageUrl: '/assets/projects/project_scrapper.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, console, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/cleevy-scrapper'
        },
        {
            title: 'Personal Assistant',
            imageUrl: '/assets/projects/project_personal-assistant.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, docker, git, postgresql, nginx},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/personal_assistant'
        },
        {
            title: 'Calendar',
            imageUrl: '/assets/projects/project_calendar.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {react, reactNative, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/calendar-module'
        },
    ]
}