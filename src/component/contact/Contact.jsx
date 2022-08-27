import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {

const form=useRef()
  const sendEmail = (eve) => {
    eve.preventDefault();

    emailjs.sendForm('service_6m86fnp', 'template_yqt934m', form.current, 'uygqNEgS6UlBHzZ_G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


      eve.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>Bshaon19@gmail.com</h5>
            <a href="mailto : bshaon19@gmail.com"  >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>Shaon</h5>
            <a href="https://wa.me/9366311783" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
