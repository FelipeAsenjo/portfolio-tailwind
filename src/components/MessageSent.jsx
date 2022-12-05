import CustomLoader from '../elements/CustomLoader'

export default ({isModalSubmitting, messageSentSuccessfully}) => {
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
        <figure className='m-40'>
            <CustomLoader 
                isModalSubmitting={isModalSubmitting}
            />
            { renderResult() }       
        </figure>
    )
}