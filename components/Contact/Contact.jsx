import { useRef } from 'react';
import style from './Contact.module.css';

function Contact() {
    const inputRef = useRef([]);

    const createInputRefs = (e, index) => {
        inputRef.current[index] = e;
    }

    const handleSubmit = async () => {
        const data = {};
        inputRef.current.map((el) => {
            data[el.name] = el.value
        })
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            // console.log(res);
        })
    }

    return (
        <div className={style.about} id='contact'>
            <div className={style.about_container}>
                <p className={style.title}>Contact</p>
                <div className='flex flex-wrap'>
                    <div className={style.form_controls}>
                        <div className={style.form_input}>
                            <label htmlFor="text" className="label-input font-medium text-xs">Name</label>
                            <input type="text"
                                className={style.input} name='name' ref={(e) => createInputRefs(e, 1)} />
                        </div>
                        <div className={style.form_input}>
                            <label htmlFor="text" className="label-input font-medium text-xs">Email</label>
                            <input type="text"
                                className={style.input} name='email' ref={(e) => createInputRefs(e, 2)} />
                        </div>
                        <div className={style.form_input}>
                            <label htmlFor="text" className="label-input font-medium text-xs">Subject</label>
                            <input type="text"
                                className={style.input} name='subject' ref={(e) => createInputRefs(e, 3)} />
                        </div>
                        <div className={style.form_input}>
                            <label htmlFor="text" className="label-input font-medium text-xs">Message</label>
                            <textarea type="text"
                                className={style.input} name='message' ref={(e) => createInputRefs(e, 4)} />
                        </div>
                        <button className={style.button} onClick={() => handleSubmit()}>Submit</button>
                    </div>
                    <div className={style.contact}>
                        <p className={style.contact_detail}>Zico Andreas Aritonang<br />
                            Gotong Royong Street <br />
                            Parapat Indonesia, - <br />
                            +62 821 6792 2417 <br />
                            zicoaritonang@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
