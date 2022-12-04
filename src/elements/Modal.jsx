import CustomLoader from './CustomLoader'

export default ({modalVisibility, children}) => {
    return (
        <div className="fixed z-10 h-screen w-full bottom-0" hidden={!modalVisibility} >
            <div className="relative h-full w-full">
                <div className="absolute h-full w-full bg-black opacity-60"></div>
                <div className="absolute z-20 h-full w-full">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="flex justify-center bg-white h-1/2 w-3/4 lg:w-1/2 rounded-lg">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}