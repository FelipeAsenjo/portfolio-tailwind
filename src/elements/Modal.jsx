import CustomLoader from './CustomLoader'

export default ({modalVisibility, isModalSubmitting, messageSentSuccessfully}) => {
    const renderResult = () => {
        if(messageSentSuccessfully && !isModalSubmitting) {
            return (
                <div className='flex flex-wrap flex-col justify-center items-center p-2 text-center text-green-500'>
                    <img className='w-3/4' src='/assets/symbols/ok-96.webp'/>
                    <h3>Message sent successfully!</h3>
                </div>
            )
        }
        if(!messageSentSuccessfully && !isModalSubmitting) {
            return (
                <div className='flex flex-wrap flex-col justify-center items-center p-2 text-center text-red-700'>
                    <img className='w-3/4' src='/assets/symbols/cancel-96.webp'/>
                    <h3 className='text-red'>Error, please try again later!</h3>
                </div>
            )
        }

        return
    }

    return (
        <div className="fixed z-10 h-screen w-full bottom-0" hidden={!modalVisibility} >
            <div className="relative h-full w-full">
                <div className="absolute h-full w-full bg-black opacity-60"></div>
                <div className="absolute z-20 h-full w-full">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="flex justify-center bg-white h-1/2 w-1/2 rounded-lg">
                            <CustomLoader />
                            { renderResult() }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}