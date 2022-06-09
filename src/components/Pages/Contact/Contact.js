
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vs42f2v', 'template_vg5dyih', form.current, '2---X-G8_ycDjswbq')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
          
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="text-center mb-20">
      <h2 className="text-3xl mb-20 mt-10">Contact me </h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label><br/>
      <input className="mb-3 p-5 w-2/4 text-black" type="text" name="user_name" /><br/>
      <label>Email:</label><br/>
      <input className="mb-3 p-5 w-2/4 text-black" type="email" name="user_email" /><br/>
      <label>Message:</label><br/>
      <textarea className="mb-3 p-5 w-2/4 text-black" name="message" /><br/>
      <input className="btn btn-primary w-2/4 mb-20" type="submit" value="Send" />
    </form>
    </section>
              
  );
};

export default Contact;