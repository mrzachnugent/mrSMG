import { FC, useState } from "react";
import { PageWrapper, redGradient } from "../../GlobalStyle";
import styled from "styled-components";
import stillSphere from "../../assets/gifs/spin-ball-still-comp.gif";
import bounceSphere from "../../assets/gifs/spin-ball-bounce-comp.gif";
import dice from "../../assets/dice-active.svg";
import { Loader } from "../Loader";
import { useHistory } from "react-router-dom";
import { MainButton } from "../MainButton";

import { motion } from "framer-motion";

const Homepage: FC = () => {
  const history = useHistory();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleLaunch = () => {
    setIsClicked(true);
    setTimeout(() => {
      history.push("/results");
    }, 2100);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const ballVariants = {
    start: { opacity: 0, y: 150 },
    end: { opacity: 1, y: 0 },
  };

  return (
    <Wrapper>
      {isClicked && <Loader />}
      <Main>
        {!isClicked ? (
          <SpinBall
            src={stillSphere}
            alt="Spinning sphere"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            variants={ballVariants}
            initial="start"
            animate="end"
            transition={{
              y: { type: "spring", stiffness: 100 },
            }}
          />
        ) : (
          <SpinBall src={bounceSphere} alt="Spinning sphere that bounces" />
        )}
        <LeftContainer
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1.2 },
          }}
        >
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

          <MainButton title="Launch" onClick={handleLaunch} />
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

const SpinBall = styled(motion.img)`
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
const LeftContainer = styled(motion.div)`
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
  z-index: -1;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.35));
`;

export default Homepage;
