import { createContext, useState } from "react"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Modal from '../elements/Modal'
import MessageSent from "../components/MessageSent"
import ProjectDetails from "../components/ProjectDetails"

export const ModalContext = createContext()

export default ({ setActiveRef }) => {
    const [messageModalVisibility, setMessageModalVisibility] = useState(false)
    const [detailsModalVisibility, setDetailsModalVisibility] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalSubmitting, setIsModalSubmitting] = useState(false)
    const [messageSentSuccessfully, setMessageSentSuccessfully] = useState(null)

    return (
        <>
            <main className='relative px-4 bg-gray-100 lg:px-20'>
                <Projects 
                    setModalVisibility={setDetailsModalVisibility}
                    setSelectedProject={setSelectedProject}
                    setActiveRef={setActiveRef} 
                />
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
            <Modal 
                modalVisibility={detailsModalVisibility}
                setModalVisibility={setDetailsModalVisibility}
            >
                <ProjectDetails 
                    setModalVisibility={setDetailsModalVisibility}
                    selectedProject={selectedProject}
                />
            </Modal>
        </>

    )
}