import Image from 'next/image'
import headerImage from '../../public/ZC.png'
import { useEffect, useRef, useState } from 'react';
import style from './Header.module.css';

function Header({ gsap }) {
    const [nav, setNav] = useState(false);
    const header = useRef();

    useEffect(() => {
        window.addEventListener("scroll", function(){
            header.current.classList.toggle(style.active, window.scrollY > 0);
        })
        return () => {
            window.addEventListener("scroll", function(){
                header.current.classList.toggle(style.active, window.scrollY > 0);
            })
        }
    }, [])

    const scrollTo = (direction) => {
        setNav(false)
        var element = document.getElementById(direction);
        gsap.to(window, { scrollTo: {
            y: 1000
        }, duration: 2 })
    }

    return (
        <header className={style.header} ref={header}>
            <div className={style.header_container}>
                <div className={style.box_image}>
                        <Image src={headerImage} width={40} height={25} />
                </div>

                <label htmlFor="menu-toggle" className={style.menu_toggle}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                <button className={style.button} type="checkbox" id="menu-toggle" onClick={() => setNav(!nav)} />

                <div className={`${nav ? 'flex' : 'hidden'} lg:flex lg:items-center lg:w-auto lg:h-auto h-screen w-full font-roboto font-medium transition-all duration-500`} id="menu">
                    <nav className="">
                        <ul className="lg:flex items-center justify-between gap-5 text-base text-gray-700 pt-4 lg:pt-0">
                            <li><span className={style.nav_link} onClick={() => scrollTo('home')}>Home</span></li>
                            <li><span className={style.nav_link} onClick={() => scrollTo('about')}>About</span></li>
                            <li><span className={style.nav_link} onClick={() => scrollTo('works')}>Works </span></li>
                            <li><span className={style.nav_link} onClick={() => scrollTo('contact')}>Contact</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
