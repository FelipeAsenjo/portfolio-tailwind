export default ({modalVisibility, setModalVisibility, children}) => {

    const handleClick = () => setModalVisibility(false)

    return (
        <div className="fixed z-30 h-screen w-full bottom-0" hidden={!modalVisibility} >
            <div className="relative h-full w-full">
                <div className="absolute h-full w-full bg-black opacity-70" />
                <div className="absolute z-20 h-full w-full">
                    <button 
                        className="absolute right-10 top-10 text-6xl text-gray-300"
                        onClick={handleClick}
                    >
                        X
                    </button>
                    <div className="flex justify-center items-center p-10 h-full w-full">
                        <div className="flex justify-center bg-white max-h-full w-auto max-w-screen-lg rounded-lg overflow-y-auto">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}