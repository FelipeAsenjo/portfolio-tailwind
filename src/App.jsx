import { createContext, useState } from 'react'
import * as context from './context'

import Navbar from "./components/Navbar"
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

export const GeneralContext = createContext()

function App() {
  const [activeRef, setActiveRef] = useState('home')

  return (
    <>
      <GeneralContext.Provider value={context}>
        <Header setActiveRef={setActiveRef} />
        <Navbar activeRef={activeRef} />
        <Main setActiveRef={setActiveRef} />
        <Footer />
      </GeneralContext.Provider>
    </>
  )
}

export default App
