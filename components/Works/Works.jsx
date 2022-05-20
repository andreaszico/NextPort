import Image from 'next/image';
import style from './Works.module.css'
import works_img from '../../public/works.jpg'
import link_icon from '../../public/link_icon.png'
import { useRef } from 'react';

function Works({ works }) {
    const ref = useRef();

    return (
        <div className={style.works_box} id='works' ref={ref}>
            <p className={style.title}>CHECK OUT SOME OF MY WORKS.</p>
            <div className={style.works}>
                {works.map((el, index) => (
                    <a key={index}>
                        <div className={style.works_child + ' group'} >
                            <Image
                                src={works_img}
                                alt="Works Image"
                                height={100}
                                width={150}
                                quality="85"
                                layout="responsive"
                                loading='lazy'
                            />
                            <div className={style.desc}>
                                <div className={style.link_icon}>
                                    <Image
                                        src={link_icon}
                                        width={17.5}
                                        height={17.5}
                                        alt="skills"
                                    />
                                </div>
                                <p className={style.desc_title}>{el.title}</p>
                                <p className={style.desc_content}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Works
