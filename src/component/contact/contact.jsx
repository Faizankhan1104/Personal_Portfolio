import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

function Contact() {  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_q55md6i', 'template_zox9clp', form.current, '0lcjt3YjT9mIPJvv4')
      e.target.reset();
     
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact-option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>erfaizankhan53@gmail.com</h5>
            <a href='mailto:erfaizankhan53@gmail.com'>Send a message</a>
          </article>
          <article className='contact-option'>
            <RiLinkedinBoxLine className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>Mohd Faizan</h5>
            <a href='https://www.linkedin.com/in/ermohdfaizan'>Connect With Me</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917248257296</h5>
            <a href='https://api.whatsapp.com/send?phone=917248257296'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
