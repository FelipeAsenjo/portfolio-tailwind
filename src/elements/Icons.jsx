const showIcons = (icons, h, w) => {
    return Object.keys(icons).map((iconName, idx) => (
            <div className="relative group" key={idx}>
                <img 
                    className="hover:scale-90 hover:animate-pulse mx-0.5"
                    src={icons[iconName]} 
                    height={h} 
                    width={w} 
                    alt={iconName} 
                /> 
                <span 
                    className="absolute z-30 w-auto p-2 m-1.5 
                        min-w-max rounded-md shadow-md 
                        text-white bg-black opacity-80 text-xs font-bold
                        transition-all duration-100 scale-0 origin-top
                        group-hover:scale-100"
                >
                    { `${iconName[0].toUpperCase()}${iconName.substring(1)}` }
                </span>
            </div>
        )
    )
}

export default ({ techIconsUrl }) => {
    return (
        <>
            {showIcons(techIconsUrl, 48, 48)}
        </>
    )
}