import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { redGradient } from "../../GlobalStyle";
import { numberShortner } from "../../utilities";
import { Contact } from "../Footer";
import { motion } from "framer-motion";

export const QuestionButton: FC<Contact> = ({ setIsContactOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://mr-smg-app.herokuapp.com/generate-song-map/count",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const json = await res.json();
      setCount(json.data);
    };

    getData();
  }, [isMenuOpen]);

  const handleOnContact = () => {
    setIsContactOpen(true);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: { right: -400 },
    visible: { right: 11 },
  };

  return (
    <>
      <Button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        // onMouseEnter={() => setIsMenuOpen(true)}
      >
        {!isMenuOpen ? <ButtonText>?</ButtonText> : <ButtonText>✕</ButtonText>}
      </Button>
      <Background>
        {isMenuOpen && (
          <Dropdown
            onMouseLeave={() => setIsMenuOpen(false)}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            <StyledLink
              onClick={() => setIsMenuOpen(false)}
              style={{ borderRadius: "8px 8px 0 0" }}
              to="/"
            >
              Homepage
            </StyledLink>
            <StyledA
              onClick={() => setIsMenuOpen(false)}
              href="https://github.com/mrzachnugent/mrSMG"
              target="_blank"
            >
              How it works
            </StyledA>
            <ContactButton onClick={handleOnContact}>Contact</ContactButton>
            <BottomMenu>
              <CounterContainer>
                <CounterBackground>
                  <CounterNumber>{numberShortner(count)}</CounterNumber>
                </CounterBackground>
                <p>Generated today</p>
              </CounterContainer>
              <div>
                <Possibilities>Over 1.6 billion unique outcomes</Possibilities>
              </div>
            </BottomMenu>
          </Dropdown>
        )}
      </Background>
    </>
  );
};

const Button = styled.button`
  z-index: 99999999;
  position: absolute;
  right: 11px;
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

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 130px;
  background: rgba(0, 0, 0, 0);
`;

const Dropdown = styled(motion.div)`
  z-index: 999999999;
  position: absolute;
  right: 11px;
  top: 60px;
  width: 300px;
  height: 372px;
  background: #03142e;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
    inset 2px 4px 8px rgba(255, 255, 255, 0.05),
    5px 7px 15px 7px rgba(0, 0, 0, 0.26), 3px 0px 13px -7px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
const StyledA = styled.a`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ContactButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 16px;
  background: transparent;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const BottomMenu = styled.div`
  width: 100%;
  height: 147px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 4px -4px 10px rgba(255, 255, 255, 0.03);
  border-radius: 0px 0px 8px 8px;
`;

const CounterContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00050d;
  border-radius: 7px;
  width: 92px;
  height: 46px;
  margin-right: 20px;
`;

const CounterNumber = styled.p`
  font-size: 28px;
  font-family: monospace, sans-serif;
`;

const Possibilities = styled.p`
  text-align: center;
  font-size: 14px;
  color: #deebff;
`;

const ButtonText = styled.p`
  animation: fadeIn 0.7s ease-in-out;
  opacity: 1;
  transform: rotate(0deg);

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: rotate(45deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
`;
