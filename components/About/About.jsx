import Image from 'next/image'
import style from './About.module.css'
import profile_img from '../../public/profile.jpeg';
import { useRef } from 'react';

function About({ about }) {
    const ref = useRef();
    return (
        <div className={style.about} id='about' ref={ref}>
            <div className={style.box_image}>
                <Image src={profile_img} className={style.image} width={100} height={100} alt="About Image"/>
            </div>
            <div className={style.about_desc}>
                <p className={style.title_about}>About Me</p>
                <p className={style.desc_about}>
                    {about}
                </p>
                <div className={style.contact}>
                    <div>
                        <p className={style.title_about}>Contact Details</p>
                        <p className={style.desc_about}>Zico Andreas Aritonang <br />
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
