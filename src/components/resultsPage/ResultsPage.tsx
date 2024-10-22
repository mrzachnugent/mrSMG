import { FC, useEffect, useState } from "react";
import {
  PageWrapper,
  blueLinGradient,
  blueGradient,
  reverseBlueLinGradient,
} from "../../GlobalStyle";
import { FiMapPin, FiKey } from "react-icons/fi";
import { GiMetronome, GiScales } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa";
import styled from "styled-components";
import { Loader } from "../Loader";
import { Piano } from "./Piano";
import { Structure } from "./Structure";
import { jsPDF } from "jspdf";
import { MainButton } from "../MainButton";
import { FirstTimeLoader } from "../FirstTimeLoader";

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
      const res = await fetch(
        "https://mr-smg-app.herokuapp.com/generate-song-map",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const json = await res.json();
      setSongInfo(json.data);
    };

    getData();
  }, [toggleTryAgain]);

  const handlePrint = () => {
    const printMaterial = `
      MixReferences
      Song Mapping Generator:

      Bpm: ${songInfo?.bpm},
      Key: ${songInfo?.key},
      Length: ${songInfo?.length},
      Scale: ${songInfo?.scale.name},
      Scale formula: ${songInfo?.scale.formula},
      Structure: ${songInfo?.structure},
      Bars per section: ${songInfo?.bars},
      Low-end: ${songInfo?.lowEnd},
      Instrument: ${songInfo?.instrument},
      Challenge: ${songInfo?.challenge}
    `;
    const doc = new jsPDF("landscape");
    doc.text(printMaterial, 10, 10);
    doc.save("mr-smg.pdf");
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {songInfo ? (
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
          <PianoSection>
            <TitleContainer>
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
          </PianoSection>
          <StructureSection>
            <TitleContainer>
              <SectionTitle>Structure</SectionTitle>
            </TitleContainer>
            <Structure
              structure={songInfo.structure}
              bars={songInfo.bars}
              totalBars={songInfo.totalBars}
            />
          </StructureSection>
          <ChallengedSection>
            <TitleContainer>
              <SectionTitle>Challenges</SectionTitle>
            </TitleContainer>
            <div style={{ width: "100%", padding: "11px" }}>
              <SingleChallenge>
                Low end: <br />
                <span>{songInfo.lowEnd}</span>
              </SingleChallenge>
              <SingleChallenge>
                Use this instrument: <br />
                <span>{songInfo.instrument}</span>
              </SingleChallenge>
              <SingleChallenge>
                Extra challenge: <br />
                <span>{songInfo.challenge}</span>
              </SingleChallenge>
            </div>
          </ChallengedSection>
          <ButtonsWrapper>
            <MainButton title="Save as PDF" onClick={handlePrint} />
            <GenerateButton onClick={handleTryAgain}>
              Generate New Map
            </GenerateButton>
          </ButtonsWrapper>
        </Main>
      ) : (
        <FirstTimeLoader />
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
  border: 1px solid #ffffff20;
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
  font-size: 23px;
  position: relative;
  display: inline;

  &::after {
    position: absolute;
    content: "";
    height: 3px;
    border-radius: 3px;
    bottom: -6px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 50%;
    background: #ffffff;
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
  width: 160px;
  height: 36px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  background: radial-gradient(50% 50% at 50% 50%, #27354b 0%, #1c232e 100%);
  border: none;
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #fff;

  &:focus {
    outline-color: #ff4848;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 600px) {
    width: calc(1.5 * 160px);
    height: calc(1.5 * 36px);
    font-size: 18px;
  }
`;

const PianoWrapper = styled.div`
  padding: 30px 0;
  margin: 0 auto;
`;

const PianoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  border-radius: 15px;
  padding-top: 30px;
  box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.26),
    3px 0px 13px -7px rgba(0, 0, 0, 0.05);
`;
const StructureSection = styled(PianoSection)`
  background: ${reverseBlueLinGradient};
`;

const SingleChallenge = styled.p`
  padding: 15px;
  position: relative;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 21px;

  span {
    font-weight: 500;
    font-size: 16px;
  }

  &::after {
    position: absolute;
    content: "";
    height: 22px;
    border-radius: 3px;
    left: 3px;
    top: 20px;
    width: 3px;
    background: #ff0000;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  margin-bottom: 50px;

  @media (min-width: 600px) {
    height: 150px;
  }
`;

const ChallengedSection = styled(PianoSection)`
  @media (min-width: 600px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
