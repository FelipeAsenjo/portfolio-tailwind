import { createContext, useState } from "react"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Modal from '../elements/Modal'

export const ModalContext = createContext()

export default ({ setActiveRef }) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [isModalSubmitting, setIsModalSubmitting] = useState(false)
    const [messageSentSuccessfully, setMessageSentSuccessfully] = useState(null)

    return (
        <>
            <main className='relative px-4 bg-gray-100 lg:px-20'>
                <Projects setActiveRef={setActiveRef} />
                <About setActiveRef={setActiveRef} />
                <Contact 
                    setModalVisibility={setModalVisibility}
                    setIsModalSubmitting={setIsModalSubmitting}
                    setMessageSentSuccessfully={setMessageSentSuccessfully}
                    setActiveRef={setActiveRef}
                />
            </main>       
            <Modal 
                modalVisibility={modalVisibility} 
                isModalSubmitting={isModalSubmitting}
                messageSentSuccessfully={messageSentSuccessfully}
            />
        </>

    )
}