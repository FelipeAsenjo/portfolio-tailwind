import { useContext } from 'react'
import { RotatingLines } from  'react-loader-spinner'
import { GeneralContext } from '../App'

export default ({modalVisibility, isModalSubmitting, messageSentSuccessfully}) => {
    const { colors } = useContext(GeneralContext)

    return (
        <div className="fixed z-10 h-screen w-full bottom-0" hidden={!modalVisibility} >
            <div className="relative h-full w-full">
                <div className="absolute h-full w-full bg-black opacity-60"></div>
                <div className="absolute z-20 h-full w-full">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="flex justify-center bg-white h-1/2 w-1/2 rounded-lg">
                            <RotatingLines
                                strokeColor={ colors.primary }
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="120"
                                visible={isModalSubmitting}
                            />
                            {
                                messageSentSuccessfully && !isModalSubmitting ?
                                    'Success' :
                                    'Error'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}