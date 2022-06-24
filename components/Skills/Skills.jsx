import style from './Skill.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Skills({ data }) {
    // const [data, setData] = useState([1, 2,3,4,5,6]);
    useEffect(() => {
       
    }, [])

    return (
        <div className={style.skills}>
            <p className={style.title}>SKILLS</p>
            <div className={style.skills_child}>
                {data.map((el, index) => (
                    <div className={style.lang_skills} key={index}>
                        <Image src={`https://storage.googleapis.com/portofolio-img/skill_icon/${el.image}`} quality={90} width={100} height={100} className={style.image} alt="icon" />
                        <p>{el.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
  
export default Skills
