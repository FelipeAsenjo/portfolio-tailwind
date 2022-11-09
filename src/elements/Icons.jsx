import { useContext } from "react"
import { GeneralContext } from "../App"

const showIcons = (icons, h, w) => {
    return Object.keys(icons).map((iconName, idx) => (
            <img 
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