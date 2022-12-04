import { createContext, useState } from "react"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Modal from '../elements/Modal'
import MessageSent from "../components/MessageSent"

export const ModalContext = createContext()

export default ({ setActiveRef }) => {
    const [messageModalVisibility, setMessageModalVisibility] = useState(false)
    const [isModalSubmitting, setIsModalSubmitting] = useState(false)
    const [messageSentSuccessfully, setMessageSentSuccessfully] = useState(null)

    return (
        <>
            <main className='relative px-4 bg-gray-100 lg:px-20'>
                <Projects setActiveRef={setActiveRef} />
                <About setActiveRef={setActiveRef} />
                <Contact 
                    setModalVisibility={setMessageModalVisibility}
                    setIsModalSubmitting={setIsModalSubmitting}
                    setMessageSentSuccessfully={setMessageSentSuccessfully}
                    setActiveRef={setActiveRef}
                />
            </main>       
            <Modal modalVisibility={messageModalVisibility}>
                <MessageSent 
                    isModalSubmitting={isModalSubmitting}
                    messageSentSuccessfully={messageSentSuccessfully}
                />
            </Modal>

        </>

    )
}