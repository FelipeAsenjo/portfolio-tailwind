import { createContext } from 'react'
import * as context from './context'

import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

export const GeneralContext = createContext()

function App() {
  return (
    <>
      <GeneralContext.Provider value={context}>
        <Header/>
        <Main />
        <Footer />
      </GeneralContext.Provider>
    </>
  )
}

export default App
