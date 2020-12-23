import { FC, useEffect, useState } from "react";
import {
  PageWrapper,
  blueLinGradient,
  reverseBlueLinGradient,
} from "../../GlobalStyle";
import { FiMapPin, FiKey } from "react-icons/fi";
import { GiMetronome, GiScales } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa";
import styled from "styled-components";
import { Loader } from "../Loader";
import { Piano } from "./Piano";

interface Scale {
  name: string;
  formula: number[];
}

interface SongInterface {
  structure: string[];
  bars: number[];
  totalBars: number;
  bpm: number;
  length: string;
  key: string;
  scale: Scale;
  instrument: string;
  lowEnd: string;
  challenge: string;
}

export const ResultsPage: FC = () => {
  const [songInfo, setSongInfo] = useState<SongInterface | null>(null);
  const [toggleTryAgain, setIsToggleTryAgain] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTryAgain = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsToggleTryAgain((prevValue) => !prevValue);
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 2100);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/generate-song-map", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          purple: "abc123",
        },
      });
      const json = await res.json();
      setSongInfo(json.data);
    };

    getData();
    console.log("done");
  }, [toggleTryAgain]);
  return (
    <Wrapper>
      {isLoading && <Loader />}
      {songInfo && (
        <Main>
          <PageTitle>
            Song Map{" "}
            <span>
              <FiMapPin />
            </span>
          </PageTitle>
          <TitleContainer style={{ paddingTop: "30px" }}>
            <SectionTitle>
              Snapshot <span>info</span>
            </SectionTitle>
          </TitleContainer>
          <SnapWrapper>
            <Snapshot>
              <IconWrapper>
                <GiMetronome />
              </IconWrapper>
              <ResultTitle>Bpm:</ResultTitle>
              <ResultText>{songInfo.bpm}</ResultText>
            </Snapshot>
            <ReverseSnapshot>
              <IconWrapper>
                <FiKey />
              </IconWrapper>
              <ResultTitle>Key:</ResultTitle>
              <ResultText>{songInfo.key}</ResultText>
            </ReverseSnapshot>
            <Snapshot>
              <IconWrapper>
                <FaRulerVertical />
              </IconWrapper>
              <ResultTitle>Length:</ResultTitle>
              <ResultText>{songInfo.length}</ResultText>
            </Snapshot>
            <ReverseSnapshot>
              <IconWrapper>
                <GiScales />
              </IconWrapper>
              <ResultTitle>Scale:</ResultTitle>
              <ResultText style={{ fontSize: "16px" }}>
                {songInfo.scale?.name}
              </ResultText>
            </ReverseSnapshot>
          </SnapWrapper>
          <TitleContainer style={{ paddingTop: "60px" }}>
            <SectionTitle>
              Scale <span>formula</span>
            </SectionTitle>
          </TitleContainer>
          <p style={{ paddingTop: "15px", textAlign: "center" }}>
            {songInfo.scale.formula.join(" - ")}
          </p>
          <PianoWrapper>
            <Piano formula={songInfo.scale.formula} start={songInfo.key} />
          </PianoWrapper>
          <div>Structure Structure image Structure Description</div>
          <div>Additional Info: Low end challenge</div>
          <div>Save button</div>
          <GenerateButton onClick={handleTryAgain}>
            Generate New Map
          </GenerateButton>
        </Main>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(PageWrapper)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled.h1`
  margin: 0 auto;
  span {
    color: #ff0000;
  }
`;

const SnapWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 900px) {
    justify-content: space-between;
  }
`;

const Snapshot = styled.div`
  background: ${blueLinGradient};
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.26),
    3px 0px 13px -7px rgba(0, 0, 0, 0.05);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const TitleContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 900px) {
    margin: 0;
  }
`;

const SectionTitle = styled.p`
  font-weight: 600;
  padding-top: 30px;
  font-size: 18px;
  position: relative;
  display: inline;

  &::after {
    position: absolute;
    content: "";
    height: 2px;
    bottom: -4px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 50%;
    background: #00a2ff;
    transition: 0.5s;
    @media (min-width: 900px) {
      margin: 0;
    }
  }

  &:hover::after {
    width: 80%;
    background: red;
  }
`;

const ReverseSnapshot = styled(Snapshot)`
  background: ${reverseBlueLinGradient};
`;

const IconWrapper = styled.div`
  font-size: 32px;
  color: #dddddd;
`;

const ResultTitle = styled.p`
  font-size: 14px;
  color: #ececec;
`;

const ResultText = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

const GenerateButton = styled.button`
  &:focus {
    outline-color: #ff4848;
  }
`;

const PianoWrapper = styled.div`
  padding: 30px 0;
  margin: 0 auto;
`;
