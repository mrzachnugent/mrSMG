import React, { FC, useState } from "react";
import { Logo } from "./Logo";
import { QuestionButton } from "./QuestionButton";
import styled from "styled-components";
import { Contact } from "../Footer";

const Header: FC<Contact> = ({ setIsContactOpen }) => {
  return (
    <Wrapper>
      <Logo />
      <QuestionButton setIsContactOpen={setIsContactOpen} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
  height: 70px;
`;

export default Header;
