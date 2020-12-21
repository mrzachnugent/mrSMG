import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mrLogo from "../../assets/main-logo-mr.svg";

export const Logo: FC = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Image src={mrLogo} alt="Mix References Logo" />
        <p>
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

    span {
      font-weight: 800;
    }
  }
`;

const Image = styled.img`
  width: 40px;
  margin-right: 6px;
`;
