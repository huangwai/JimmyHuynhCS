import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "../Components/Components.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15qvc26",
        "template_h8azk7t",
        form.current,
        "iuzNDtNBVCkuhUrfg"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
          // alert("Message Sent!!!");
          // console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="contact"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
        color: "#FFFFFF",
      }}
    >
      <StyledContactForm>
        <h1>Contact</h1>
        <br></br>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default ContactForm;
// Styles
const StyledContactForm = styled.div`
  width: auto;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: auto;
    font-size: 16px;
    color: #fff;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #fff;
      &:focus {
        border: 3px solid goldenrod;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #fff;
      &:focus {
        border: 2px solid goldenrod;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #fff;
      color: black;
      border: none;
    }
  }
`;
