export const colors = {
    primary: '#931323',
    secondary: '#333',
}

export const techIconsUrl = {
    react: "/assets/tech/react-96.webp",
    reactNative: "/assets/tech/reactNative-96.webp",
    vueJs: "/assets/tech/vue-js-96.webp",
    nodeJs: "/assets/tech/node-js-96.webp",
    javascript: "/assets/tech/javascript-96.webp",
    jest: "/assets/tech/jest-96.webp",
    bootstrap: "/assets/tech/bootstrap-96.webp",
    tailwindCss: "/assets/tech/tailwind-css-96.webp",
    materialUi: "/assets/tech/material-ui-96.webp",
    css3: "/assets/tech/css3-96.webp",
    sass: "/assets/tech/sass-96.webp",
    html5: "/assets/tech/html-5-96.webp",
    console: "/assets/tech/console-96.webp",
    docker: "/assets/tech/docker-96.webp",
    nginx: "/assets/tech/nginx-96.webp",
    python: "/assets/tech/python-96.webp",
    webpack: "/assets/tech/webpack-96.webp",
    git: "/assets/tech/git-96.webp",
    postgresql: "/assets/tech/postgresql-96.webp",
    mongodb: "/assets/tech/mongodb-96.webp",
    firebase: "/assets/tech/firebase-96.webp",
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
            imageUrl: '/assets/projects/project_scrapper.webp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, console, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/cleevy-scrapper'
        },
        {
            title: 'Personal Assistant',
            imageUrl: '/assets/projects/project_personal-assistant_light.webp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, docker, git, postgresql, nginx},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/personal_assistant'
        },
        {
            title: 'Calendar',
            imageUrl: '/assets/projects/project_calendar.webp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {react, reactNative, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/calendar-module'
        },
    ]
}