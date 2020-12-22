import React, { FC } from "react";
import styled from "styled-components";

interface TypingProps {
  text: string;
}

export const Typing: FC<TypingProps> = ({ text }) => {
  return <TypingText>{text}</TypingText>;
};

const TypingText = styled.h3`
  font-family: monospace, sans-serif;
  max-width: 260px;
  opacity: 0;
  font-weight: 500;
  position: fixed;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 33px;
  overflow: hidden;
  border-right: 0.15em solid red;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 1.1s steps(40, end) forwards,
    blink-caret 0.75s step-end infinite;
  animation-delay: 0.9s;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @keyframes typing {
    0% {
      opacity: 0;
      width: 0;
    }
    50% {
      opacity: 1;
      width: 130px;
    }
    100% {
      opacity: 1;
      width: 260px;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: red;
    }
  }
`;
