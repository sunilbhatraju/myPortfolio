import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Details</h1>
          <h3>Mobile Number</h3>
          <p>+91-9949959657</p>
          <h3>Email</h3>
          <p>sunil.bhatraju@gmail.com</p>
        </div>
        <div>
        <button className="button">
          <a
            className="button"
            href="../resume/Resume_SunilAbhishek.pdf"
            download="Resume_SunilAbhishek.pdf"
          >
            Download Resume
          </a>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Contact;
