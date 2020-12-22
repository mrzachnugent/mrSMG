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
        <main>
          <h1>
            Song Map <FiMapPin />
          </h1>
          <SectionTitle>
            Snapshot <span>info</span>
          </SectionTitle>
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
          <div>Piano</div>
          <div>Structure Structure image Structure Description</div>
          <div>Additional Info: Low end challenge</div>
          <div>Save button</div>
          <GenerateButton onClick={handleTryAgain}>
            Generate New Map
          </GenerateButton>
        </main>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(PageWrapper)`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SnapWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
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

const SectionTitle = styled.p`
  text-align: center;
  padding-top: 30px;
  font-size: 18px;
  span {
    color: #ff0000;
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
