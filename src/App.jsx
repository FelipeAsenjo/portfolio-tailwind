import { createContext } from 'react'
import * as context from './context'
// import { useInView } from 'react-intersection-observer'

import Navbar from "./components/Navbar"
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'

export const GeneralContext = createContext()

const observerHandler = ob => {
  ob.forEach( el => {
    console.log(el)
    // el.target.style.opacity = ob[0].intersectionRatio
  })
}

const options = {
  root: document,
  rootMargin: '0px',
  threshold: 0
}

const observer = new IntersectionObserver(observerHandler, options)
const els = document.querySelectorAll('[data-observe]')

function App() {
  els.forEach( el => {
    observer.observe(el)
  })

  return (
    <>
      <GeneralContext.Provider value={context}>
        <Header/>
        <Navbar />
        <Main />
        <Footer />
      </GeneralContext.Provider>
    </>
  )
}

export default App
