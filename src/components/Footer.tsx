import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface Contact {
  setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactOpen?: boolean;
}

export const Footer: FC<Contact> = ({ setIsContactOpen }) => {
  return (
    <Wrapper>
      <StyledLink
        href="https://github.com/mrzachnugent/ourLife"
        target="_blank"
      >
        How S.M.G. works
      </StyledLink>
      <Button onClick={() => setIsContactOpen(true)}>Contact</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 11px;
  height: 40px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #ffffff80;
  font-size: 13px;

  &:focus {
    outline-color: #ff4848;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  text-decoration: none;
  color: #ffffff80;
  font-size: 13px;

  &:focus {
    outline-color: #ff4848;
  }
`;
