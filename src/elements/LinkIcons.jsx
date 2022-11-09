import { useContext } from "react"
import { GeneralContext } from "../App"

const showLinkIcons = (icons, h, w) => {
    return Object.keys(icons).map((iconName, idx) => (
            <a href={icons[iconName].linkUrl} target='_blank' key={idx}>
                <img 
                    className="hover:scale-110"
                    src={icons[iconName].imageUrl} 
                    height={h} 
                    width={w} 
                    alt={iconName} 
                /> 
            </a>
        )
    )
}

export default () => {
    const { contactIconsUrl } = useContext(GeneralContext)
    return (
        <>
            {showLinkIcons(contactIconsUrl, 42, 42)} 
        </>
    )
}