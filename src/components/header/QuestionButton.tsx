import { FC } from "react";
import styled from "styled-components";
import { redGradient } from "../../GlobalStyle";

export const QuestionButton: FC = () => {
  return <Button>?</Button>;
};

const Button = styled.button`
  background: ${redGradient};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    outline-color: #ff4848;
  }
`;
