import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      emailjs
        .sendForm(
          "service_ujg9ene",
          "template_i2hexrg",
          form.current,
          "x98v2CDYHOQyl7lzI"
        )
        .then(
          (result) => {
            setSuccessMessage("Your message has been sent successfully!");
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Error:", errorMessage);
    }
  
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact-me">
      <h1 className="pageTitle">Contact me</h1>
      <div className="form-container">
      
      <form id="contact-form" ref={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            rows="5"
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div>
            <p className="success-text">{successMessage}</p>
          </div>
        )}
        <button type="submit" onBlur={handleSubmit}>
          Submit
        </button>
      </form>
      </div>
    </section>
  );
}

export default ContactForm;
