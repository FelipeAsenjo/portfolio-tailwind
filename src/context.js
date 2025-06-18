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

export const recommendations = [
    {
        recommender: 'Matthew Varga',
        recommenderPosition: 'Senior Manager',
        relationship: 'Matthew managed Felipe directly',
        description: 'Felipe has shown a strong commitment to the tasks and projects he has been assigned to during my time working with him. He works hard to clearly communicate on expectations for his deliverables, delivers clean and well-built solutions, and is able to solve problems creatively. He brings a positive attitude and willingness to learn, and is a great team player.',
    },
    {
        recommender: 'Jordan Jimenez ACC, M.A.',
        recommenderPosition: 'Professional Coach & HR Manager at Tjene Corp',
        relationship: 'Jordan worked with Felipe but on different teams',
        description: `I had the pleasure of hiring Felipe to our Tjene team, I had the opportunity to get to know Felipe during his time here. I have heard positive feedback about both his work and his character. From everything I observed, Felipe brought a strong sense of professionalism, enthusiasm, and integrity to the workplace.

            Felipe approaches challenges with a positive attitude and a willingness to collaborate. Felipe is approachable, thoughtful, and committed to doing his best. While I wasn't part of his immediate team, it was clear through conversations and observations that Felipe made a meaningful impact. He is the kind of person any organization would be lucky to have: enthusiastic, always willing to learn, and a genuinely good teammate.

            I’m confident he will continue to bring great value wherever he goes. Felipe - it was a pleasure working with you, and I hope we cross paths again!
        `,
    },
    {
        recommender: 'Gabriel Chan',
        recommenderPosition: 'TRIRIGA Practice Lead at Tjene Corp | IBM Champion',
        relationship: 'Gabriel managed Felipe directly',
        description: 'I had the pleasure of working with Felipe on supporting our clients by resolving defects and implementing enhancements in Polymer and React applications. Felipe demonstrated a positive attitude and was always eager to take on new tickets, even when he had no prior experience with similar issues.',
    },
    {
        recommender: 'Ignacio Diaz Ruiz',
        recommenderPosition: 'Full Stack Developer | ReactJS & NodeJS',
        relationship: 'Ignacio worked with Felipe on the same team',
        description: `I had the pleasure of working with Felipe, a highly skilled React developer who consistently impressed me with his dedication, creativity, and clean, scalable code. From building intuitive UI components to optimizing performance, Felipe always brought his A-game and a collaborative spirit to every project.

            He has a deep understanding of React, hooks, state management, and is equally comfortable diving into IBM TRIRIGA when needed. Beyond the code, Felipe is a team player who takes initiative, communicates clearly, and is always open to feedback.
        `,
    },
]