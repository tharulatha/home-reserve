import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mhnxf0x", "template_evieyaf", form.current, {
        publicKey: "HFUY6TLccS8JB0dGf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sended Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 class="h2 section-title">Contact Now</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label className="input-label">Name</label>
          <input
            className="input-control"
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="input-control"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Message</label>
          <textarea name="message" value={values.message} onChange={handleChange} className="input-control" />
        </div>
        <div className="input-btn">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
