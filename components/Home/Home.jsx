import Image from 'next/image';
import style from './Home.module.css';
import facebookIcon from '../../public/brandico_facebook.svg';
import instagramIcon from '../../public/ant-design_instagram-filled.svg';
import githubIcon from '../../public/akar-icons_github-fill.svg';
import { useEffect, useRef } from 'react';

function Home({ name, developer, color }) {
    const ref = useRef();

    useEffect(() => {

    }, [])

    return (
        <div className={style.home} id='home' ref={ref}>
            <div className={style.bio}>
                <p className={style.name}>Im {name}</p>
                <p className={style.dev}>{developer}</p>
                <div className={style.social_media}>
                    <div className={style.icon}>
                        <a href="https://www.facebook.com/zicoandreas.aritonang.9">
                            <Image src={facebookIcon} height={30} width={30} alt="facebook" />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="https://www.instagram.com/zicoandreasaritonang/">
                            <Image src={instagramIcon} height={35} width={35} alt="Instagram" />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="https://github.com/andreaszico">
                            <Image src={githubIcon} height={30} width={30} alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
