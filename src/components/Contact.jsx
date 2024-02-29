import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({})

  const form = useRef();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = values;
    let validationError = {}
    if (!name.trim()) {
      validationError.name= "Name should not be Empty!!"
    }

    if (!email.trim()) {
      validationError.email= "Email should not be Empty!!"
    }

    if (!message.trim()) {
      validationError.message= "Message should not be Empty!!"
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    } else {
      setError({})
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
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="h2 section-title">Contact Now</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label className="input-label">Name</label>
          <input
            className="input-control"
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>
        <div className="input-group">
          <label className="input-label">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="input-control"
            placeholder="Enter your Email"
          />
          {error.email && <p className="error">{error.email}</p>}
        </div>
        <div className="input-group">
          <label className="input-label">Message</label>
          <textarea name="message" value={values.message} onChange={handleChange} className="input-control" placeholder="Drop a message"/>
          {error.message && <p className="error">{error.message}</p>}
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
