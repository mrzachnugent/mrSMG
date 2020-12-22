import styled, { createGlobalStyle } from "styled-components";

export const PageWrapper = styled.div`
  min-height: calc(100vh - 110px);
  padding: 11px;
`;

export const blueGradient =
  "radial-gradient(50% 50% at 50% 50%, #0e3166 0%, #051630 100%)";
export const blueLinGradient =
  "linear-gradient(261.27deg, #0e3166 0%, #051630 100%)";
export const reverseBlueLinGradient =
  "linear-gradient(261.27deg, #051630 0%, #0e3166  100%)";
export const redGradient =
  "linear-gradient( 261.27deg, #db0000 -17.12%, #cf0101 60.94%, #321212 134.27%, #321212 134.27%)";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    
}

body {
    min-height: 100vh;
    background: radial-gradient(50% 50% at 50% 50%, #0e3166 0%, #051630 100%);
    color: #fff;
}

h1 {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.23)
}
`;
