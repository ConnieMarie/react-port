import React from "react";

function Contact() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <input type="text" name="message" />
         </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Contact;