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
        <LeftContainer>
          <TextContainer>
            <Title>
              <span>S</span>MG
            </Title>
            <LongText>
              <span>S</span>ong <span>M</span>apping <span>G</span>enerator
            </LongText>

            <Inspired>
              <RedDice
                src={dice}
                alt="A dice with question marks instead of numbers."
              />
              <p>Get inspired</p>
            </Inspired>
          </TextContainer>
          <Button>Launch</Button>
        </LeftContainer>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-height: 780px) {
    justify-content: center;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
  }
`;

const SpinBall = styled.img`
  width: 225px;
  filter: drop-shadow(0px 30px 10px rgba(0, 0, 0, 0.35));

  @media (min-width: 330px) {
    width: 280px;
  }
  @media (min-width: 365px) {
    width: 330px;
  }
  @media (min-width: 1000px) {
    width: 450px;
  }
  @media (min-width: 1300px) {
    width: 550px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    align-items: flex-start;
  }
  @media (min-width: 1300px) {
    padding-left: 100px;
  }
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
  @media (min-width: 600px) {
    display: none;
  }
`;

const LongText = styled(Title)`
  display: none;
  @media (min-width: 600px) {
    display: block;
    max-width: 600px;
    text-align: center;
    padding-bottom: 50px;
  }
  @media (min-width: 1000px) {
    text-align: left;
    max-width: 400px;
    padding-bottom: 15px;
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
  @media (min-width: 1000px) {
    margin-bottom: 50px;
  }
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

  @media (min-width: 600px) {
    width: calc(1.5 * 160px);
    height: calc(1.5 * 36px);
    font-size: 23px;
  }
`;

export default Homepage;
