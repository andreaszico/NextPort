import Image from 'next/image'
import style from './About.module.css'
import profile_img from '../../public/profile.jpeg';
import { useEffect, useRef } from 'react';

function About() {
    const ref = useRef();
    useEffect(() => {
        
    }, [])
    return (
        <div className={style.about} id='about' ref={ref}>
            <div className={style.box_image}>
                <Image src={profile_img} className={style.image} width={100} height={100} />
            </div>
            <div className={style.about_desc}>
                <p className={style.title_about}>About Me</p>
                <p className={style.desc_about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className={style.contact}>
                    <div>
                        <p className={style.title_about}>Contact Details</p>
                        <p className={style.desc_about}>Zico Andreas Aritonang
                            Gotong Royong Street <br />
                            Parapat Indonesia, - <br />
                            +62 821 6792 2417 <br />
                            zicoaritonang@gmail.com</p>
                    </div>
                </div>
                <button className={style.button}>Download Resume</button>
            </div>
        </div>
    )
}

export default About
