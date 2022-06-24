import Image from 'next/image';
import style from './Works.module.css'
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
                                src={`https://storage.googleapis.com/portofolio-img/works/${el.image}`}
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
                                   {el.description} 
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
