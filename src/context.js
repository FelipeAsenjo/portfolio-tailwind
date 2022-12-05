export const colors = {
    primary: '#931323',
    secondary: '#333',
}

export const techIconsUrl = {
    react: "/assets/tech/react-60.webp",
    reactNative: "/assets/tech/reactNative-60.webp",
    vueJs: "/assets/tech/vue-js-60.webp",
    nodeJs: "/assets/tech/node-js-60.webp",
    javascript: "/assets/tech/javascript-60.webp",
    jest: "/assets/tech/jest-60.webp",
    bootstrap: "/assets/tech/bootstrap-60.webp",
    tailwindCss: "/assets/tech/tailwind-css-60.webp",
    materialUi: "/assets/tech/material-ui-60.webp",
    css3: "/assets/tech/css3-60.webp",
    sass: "/assets/tech/sass-60.webp",
    html5: "/assets/tech/html-5-60.webp",
    console: "/assets/tech/console-60.webp",
    docker: "/assets/tech/docker-60.webp",
    nginx: "/assets/tech/nginx-60.webp",
    python: "/assets/tech/python-60.webp",
    webpack: "/assets/tech/webpack-60.webp",
    git: "/assets/tech/git-60.webp",
    postgresql: "/assets/tech/postgresql-60.webp",
    mongodb: "/assets/tech/mongodb-60.webp",
    firebase: "/assets/tech/firebase-60.webp",
}

export const contactIconsUrl = {
    github: {
        imageUrl: '/assets/social-media/github-60.webp',
        linkUrl: 'https://github.com/FelipeAsenjo',
    },
    linkedin: {
        imageUrl: '/assets/social-media/linkedin-60.webp',
        linkUrl: 'https://www.linkedin.com/in/asenjo-felipe/'
    },
    twitter: {
        imageUrl: '/assets/social-media/twitter-60.webp',
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
            title: 'Scraper',
            imageUrl: '/assets/projects/project_scrapper.webp',
            detailsImageUrl: '/assets/projects/scraper_blured&faster_tinify_480p.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, console, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/cleevy-scrapper'
        },
        {
            title: 'Personal Assistant',
            imageUrl: '/assets/projects/project_personal-assistant_light.webp',
            detailsImageUrl: '/assets/projects/project_personal-assistant_light.webp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {nodeJs, docker, git, postgresql, nginx},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/personal_assistant'
        },
        {
            title: 'Calendar',
            imageUrl: '/assets/projects/project_calendar.webp',
            detailsImageUrl: '/assets/projects/project_calendar_faster&tinify.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tech: {react, reactNative, git},
            githubRepoUrl: 'https://github.com/FelipeAsenjo/calendar-module'
        },
    ]
}