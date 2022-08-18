import Tooltip from './tooltip'
import {
    AiOutlineFolder
} from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { FcSettings } from 'react-icons/fc'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'


function scrollTo(id) {
    const element = document.getElementById(id)
    element.scrollIntoView({
        behavior: 'smooth',
    })
}


const Navbar = ({ show }) => {
    const [active, setActive] = useState("about");
    const [showNav, setShowNav] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setShowNav(show);
    }, [show]);

    return (
        <Transition
            show={showNav}
            className="fixed top-1/3 bottom-1/2 right-3 z-20"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-x-5"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-5"
        >
            <nav className="h-[280px] w-10 bg-black text-white fixed top-1/3 bottom-1/2 right-1 rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-80 sm:right-3">
                <div className="mt-6 flex flex-col items-center">
                    <div>
                        <Tooltip message="About">
                            <button onClick={() => { scrollTo('about'); setActive("about") }} className={`${active === "about" ? "bg-yellow-500" : "bg-transparent"} p-2 rounded-md`}>
                                <SiAboutdotme />
                            </button>
                        </Tooltip>
                    </div>
                    <div className="mt-8">
                        <Tooltip message="Language & Skills">
                            <button onClick={() => { scrollTo('lang'); setActive("lang") }} className={`${active === "lang" ? "bg-yellow-500" : "bg-transparent"} p-2 rounded-md`}>
                                <FcSettings />
                            </button>
                        </Tooltip>
                    </div>

                    <div className="mt-8">
                        <Tooltip message="Projects">
                            <button onClick={() => { scrollTo('projects'); setActive("projects") }} className={`${active === "projects" ? "bg-yellow-500" : "bg-transparent"} p-2 rounded-md`}>
                                <AiOutlineFolder />
                            </button>
                        </Tooltip>
                    </div>
                    <div className="mt-8">
                        <button onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }} className="p-2 rounded-md">
                            {theme === 'dark' ? <FiMoon /> : <FiSun />}
                        </button>
                    </div>
                </div>
            </nav>
        </Transition >
    )
}

export default Navbar