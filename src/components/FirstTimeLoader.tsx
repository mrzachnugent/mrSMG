import React, { FC } from "react";
import styled from "styled-components";
import { BiLoader } from "react-icons/bi";

export const FirstTimeLoader: FC = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled(BiLoader)`
  font-size: 33px;
  color: #fff;
  transform: rotateZ(0deg);
  animation: smallRotate 2.2s infinite linear;
  @keyframes smallRotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
