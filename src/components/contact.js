import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_video from './video/bg_video.mp4';
// import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            Name: name,
            Email: email,
            Tel: tel,
            Message: message
        }
        // axios.post('the api key goes here', data).then((response)=>{
        //     setName('');
        //     setEmail('');
        //     setTel('');
        //     setMessage('');
        // })
    }
    return (
        <div className='main'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' required className='space-below' onChange={(e)=>setName(e.target.value)}/><br></br>
                <input type="email" placeholder='Email' required className='space-below' onChange={(e)=>setEmail(e.target.value)}/><br></br>
                <input type="tel" placeholder='Phone Number' required className='space-below' onChange={(e)=>setTel(e.target.value)}/><br></br>
                <input type="text" placeholder='Message' required className='space-below' onChange={(e)=>setMessage(e.target.value)}/><br></br>
            </form>
            <button type="submit" className='mainButton'>Send Message</button>
        </div>
    )
}

export default Contact