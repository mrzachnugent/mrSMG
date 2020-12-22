import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mrLogo from "../../assets/main-logo-mr.svg";

export const Logo: FC = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <StyledLink to="/">
        <Image src={mrLogo} alt="Mix References Logo" />
        <p style={isMouseOver ? { color: "rgba(0, 0, 0, 0)" } : {}}>
          MIX<span>REFERENCES</span>
        </p>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 176px;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #e6e6e6;

  p {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    background: linear-gradient(to right, #630000, #a70000, #051630);
    background-size: 200% 200%;
    animation: rainbow 2.5s ease-in-out infinite;
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(255, 255, 255, 1);
    display: block;
    text-align: center;
    transition: color 0.6s ease-in-out;
    span {
      font-weight: 800;
    }

    @keyframes rainbow {
      0% {
        background-position: left;
      }
      50% {
        background-position: right;
      }
      100% {
        background-position: left;
      }
    }
  }
`;

const Image = styled.img`
  width: 40px;
  margin-right: 6px;
`;
