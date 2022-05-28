import React , { useState } from 'react'
import axios from 'axios';

function Contact() {
    const [full_name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(full_name, email, phone, message);
        const data={
            Name: full_name,
            Email: email,
            Phone: phone,
            Message: message
        }
        axios.post('https://sheet.best/api/sheets/6490fc47-a3db-4cc7-8508-16c178b0b032', data).then((response)=> {
            console.log(response);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        })
    }

  return (
   <div className='contact-sec'>
       <h1 className='centered'>Have Questions? Send Us A Message!</h1>
       <form className='contact-form' onSubmit={handleSubmit}>
           <input type='text' className='contact-box' placeholder='Full Name' onChange={(e)=>setName(e.target.value)} value={full_name}/><br></br>
           <input type='email' className='contact-box' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/><br></br>
           <input type='tel' className='contact-box' placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)} value={phone}/><br></br>
           <input type='text' className='contact-box bigger' placeholder='Your Message' onChange={(e)=>setMessage(e.target.value)} value={message}/><br></br>
           <button className='sec-btn' id="submit-btn">Send Message</button>
       </form>
   </div>
  )
}

export default Contact