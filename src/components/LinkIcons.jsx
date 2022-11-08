const contactIconsUrl = {
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

const showLinkIcons = (icons, h, w) => {
    return Object.keys(icons).map((iconName, idx) => (
            <a href={icons[iconName].linkUrl} target='_blank' key={idx}>
                <img src={icons[iconName].imageUrl} height={h} width={w} alt={iconName} /> 
            </a>
        )
    )
}

export default () => {
    return (
        <>
            {showLinkIcons(contactIconsUrl, 42, 42)} 
        </>
    )
}