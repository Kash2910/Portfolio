import React from 'react'
import './contacts.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k21tg8s', 'template_8aq38hi', form.current, '5SzJoWUkRHKf1tpY1')
    setMsg("Mensagem Enviada! Obrigado.")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5 className='text-light'>Get in Touch</h5>
      <h2 className='text-light'>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>kashif.sid2910@gmail.com</h5>
            <a href="mailto:kashif.sid2910@gmail.com" >Sent an Email</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>Click Me!</h5>
            <a href="https://api.whatsapp.com/send?phone=918601948773" target="_blank">Send a Message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your e-mail" required />
            <textarea name="message" rows="7" required placeholder="Your message please :)"></textarea>
            <button type="submit" className="btn btn-primary">SEND</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact