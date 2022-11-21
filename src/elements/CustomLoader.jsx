import { useContext } from "react"
import { GeneralContext } from "../App"
import { RotatingLines } from "react-loader-spinner"

export default ({isModalSubmitting}) => {
    const { colors } = useContext(GeneralContext)
    return (
        <RotatingLines
            strokeColor={ colors.primary }
            strokeWidth="5"
            animationDuration="0.75"
            width="120"
            visible={isModalSubmitting}
        />
    )
}