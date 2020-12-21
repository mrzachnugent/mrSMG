import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer: FC = () => {
  return (
    <Wrapper>
      <StyledLink to="/">How S.M.G. works</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 11px;
  height: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff80;

  font-size: 13px;
`;
