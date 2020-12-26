import React, { FC } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Contact } from "./Footer";
import { motion } from "framer-motion";
import { redGradient } from "../GlobalStyle";

export const ContactModal: FC<Contact> = ({ setIsContactOpen }) => {
  const handleCloseForm = (e: any) => {
    e.stopPropagation();
    setIsContactOpen(false);
  };
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1kqnz7",
        "template_9air66p",
        e.target,
        "user_hcIYTzdhLgnC4QJc5ljSD"
      )
      .catch((error) => console.log(error.text));

    setIsContactOpen(false);
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const formVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <Background
      tabIndex={0}
      aria-label="close contact form"
      onClick={handleCloseForm}
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper
        tabIndex={0}
        aria-label="Contact form"
        onClick={(e: any) => e.stopPropagation()}
        variants={formVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <h1>What's up?</h1>
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          I'll get back to you as soon as possible.
        </p>
        <form onSubmit={sendEmail} autoComplete="off">
          <InputWrapper>
            <label htmlFor="subject">Subject :</label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email :</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="message">Message :</label>
            <Textarea name="message" id="message" required />
          </InputWrapper>
          <SendButton type="submit" value="Send" />
        </form>
      </Wrapper>
    </Background>
  );
};

const Background = styled(motion.div)`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  padding: 11px;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #03142e;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
    inset 2px 4px 8px rgba(255, 255, 255, 0.05),
    5px 7px 15px 7px rgba(0, 0, 0, 0.26), 3px 0px 13px -7px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 7px;
`;

const Input = styled.input`
  border-radius: 7px;
  font-size: 16px;
  width: 180px;
  margin-left: 7px;
  padding: 5px;

  &:focus {
    outline-color: #ff4848;
  }
`;
const Textarea = styled.textarea`
  border-radius: 7px;
  font-size: 16px;
  width: 180px;
  margin: 7px 0 7px 7px;
  resize: none;
  padding: 5px;

  &:focus {
    outline-color: #ff4848;
  }
`;

const SendButton = styled.input`
  width: 100%;
  height: 45px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  background: ${redGradient};
  border: none;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #fff;

  &:focus {
    outline-color: #ff4848;
  }

  &:active {
    transform: scale(0.98);
  }
`;
