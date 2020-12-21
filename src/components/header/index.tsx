import React, { FC } from "react";
import { Logo } from "./Logo";
import { QuestionButton } from "./QuestionButton";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <Wrapper>
      <Logo />
      <QuestionButton />
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
