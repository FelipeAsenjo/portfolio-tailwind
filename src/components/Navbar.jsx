import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"

export default ({ activeRef }) => {
    const { t, i18n } = useTranslation('global')
    const [menuVisibility, setMenuVisibility] = useState(true)

    const homeRef = useRef()
    const projectsRef = useRef()
    const aboutRef = useRef()
    const contactRef = useRef()

    useEffect(() => {
        const refs = [homeRef, projectsRef, aboutRef, contactRef]

        refs.forEach(ref => {
            const hash = ref.current.hash.substring(1)
            const classList = ref.current.classList

            if(activeRef === hash) {
                classList.remove('text-secondary', 'md:hover:text-primary')
                classList.add('bg-primary', 'text-white', 'leading-6')

                return
            }
            classList.remove('bg-primary', 'text-white')
            classList.add('text-secondary')
        })
    }, [activeRef])
    
    const changeLanguage = () => {
        if(i18n.language === 'es') return i18n.changeLanguage('en')
        return i18n.changeLanguage('es')
    }

    const toggleMenuVisibility = () => setMenuVisibility(!menuVisibility)

    const handleAnchorClick = () => toggleMenuVisibility() 

    return (
        <nav className="sticky z-20 top-0 w-full bg-primary px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#home" className="flex items-center rounded-lg bg-gray-100 px-2">
                    <img src="/logo_felipe_no-bg.png" className="h-9 mr-3 sm:h-12" alt="felipe logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-secondary rounded p-2">Felipe</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button 
                        type="button" 
                        className="inline-flex items-center justify-center p-3 text-sm text-gray-900 rounded cursor-pointer hover:text-white bg-gray-100 hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={changeLanguage}
                    >
                        {i18n.language === 'es' ? '🇪🇸 Español' : '🇺🇲 English'}
                    </button>
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none ring-2 ring-gray-200"
                        onClick={toggleMenuVisibility}
                    >
                        <span className="sr-only">Open main menu</span>
                        <img src="/src/assets/symbols/menu-white-96.png" className="w-6 h-6" alt="open main menu" aria-hidden='true'/>
                    </button>
                </div>
                <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" hidden={menuVisibility} >
                    <ul className="flex flex-col p-4 mt-4 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a 
                                href="#home" 
                                className="block py-2 pl-3 pr-4 text-secondary md:hover:text-primary rounded md:p-0" 
                                onClick={handleAnchorClick}
                                ref={homeRef}
                            >
                                {t('navbar.home')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                className="block py-2 pl-3 pr-4 text-secondary rounded md:hover:text-primary md:p-0" 
                                onClick={handleAnchorClick}
                                ref={projectsRef}
                            >
                                {t('navbar.projects')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="block py-2 pl-3 pr-4 text-secondary rounded md:hover:text-primary md:p-0" 
                                onClick={handleAnchorClick}
                                ref={aboutRef}
                            >
                                {t('navbar.about')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="block py-2 pl-3 pr-4 text-secondary rounded md:hover:text-primary md:p-0" 
                                onClick={handleAnchorClick}
                                ref={contactRef}
                            >
                                {t('navbar.contact')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}