import { FC } from "react";
import styled from "styled-components";
import { redGradient } from "../GlobalStyle";

interface MainButtonProps {
  title: string;
  onClick(): void;
}

export const MainButton: FC<MainButtonProps> = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

const Button = styled.button`
  width: 160px;
  height: 36px;
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

  @media (min-width: 600px) {
    width: calc(1.5 * 160px);
    height: calc(1.5 * 36px);
    font-size: 23px;
  }
`;
