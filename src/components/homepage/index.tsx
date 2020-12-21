import { FC } from "react";
import { PageWrapper, redGradient } from "../../GlobalStyle";
import styled from "styled-components";
import stillSphere from "../../assets/gifs/spin-ball-still-comp.gif";
import dice from "../../assets/dice-active.svg";

const Homepage: FC = () => {
  return (
    <Wrapper>
      <Main>
        <SpinBall src={stillSphere} alt="Spinning sphere" />
        <Title>
          <span>S</span>MG
        </Title>
        <Inspired>
          <RedDice
            src={dice}
            alt="A dice with question marks instead of numbers."
          />
          <p>Get inspired</p>
        </Inspired>
        <Button>Launch</Button>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinBall = styled.img`
  width: 225px;
  filter: drop-shadow(0px 30px 10px rgba(0, 0, 0, 0.35));
`;

const Title = styled.h1`
  font-size: 62px;
  letter-spacing: 5px;
  font-weight: 500;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.35);
  span {
    font-weight: 700;
    background: -webkit-linear-gradient(#db0000 0%, #cf0101 75%, #321212 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Inspired = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 36px;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.35);
  font-weight: 400;
`;

const RedDice = styled.img`
  margin-right: 11px;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.35));
`;

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
  color: rgba(255, 255, 255, 0.85);
`;

export default Homepage;
