import { useContext } from "react"
import { GeneralContext } from "../App"

const showIcons = (icons, h, w) => {
    return Object.keys(icons).map((iconName, idx) => (
            <img 
                className="hover:scale-90 hover:animate-pulse mx-0.5"
                src={icons[iconName]} 
                height={h} 
                width={w} 
                alt={iconName} 
                key={idx}
            /> 
        )
    )
}

export default () => {
    const { techIconsUrl } = useContext(GeneralContext)

    return (
        <>
            {showIcons(techIconsUrl, 48, 48)}
        </>
    )
}