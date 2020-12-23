import { FC } from "react";
import styled from "styled-components";
import { getFormulaKeys, GetFormulaKeysProps } from "../../utilities";

export const Piano: FC<GetFormulaKeysProps> = ({ formula, start }) => {
  const keysFormula = getFormulaKeys(formula, start);
  const cNote = new Audio("./notec.mp3");
  const cSharpNote = new Audio("./note-Csharp.mp3");
  const dNote = new Audio("./note-D.mp3");
  const dSharpNote = new Audio("./note-Dsharp.mp3");
  const eNote = new Audio("./note-E.mp3");
  const fNote = new Audio("./note-F.mp3");
  const fSharpNote = new Audio("./note-Fsharp.mp3");
  const gNote = new Audio("./note-G.mp3");
  const gSharpNote = new Audio("./note-Gsharp.mp3");
  const aNote = new Audio("./note-A.mp3");
  const aSharpNote = new Audio("./note-Asharp.mp3");
  const bNote = new Audio("./note-B.mp3");

  const handlePlay = (sound: HTMLAudioElement) => {
    if (sound.paused === true) {
      sound.play();
    } else if (sound.paused === false) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  return (
    <Wrapper>
      <WhiteKeys
        onClick={() => handlePlay(cNote)}
        style={{ borderRadius: "10px 2px 2px 10px" }}
        disabled={keysFormula.indexOf("C") === -1}
      >
        <NoteLetters>C</NoteLetters>
      </WhiteKeys>
      <WhiteKeys
        disabled={keysFormula.indexOf("D") === -1}
        onClick={() => handlePlay(dNote)}
      >
        <NoteLetters>D</NoteLetters>
      </WhiteKeys>
      <WhiteKeys
        disabled={keysFormula.indexOf("E") === -1}
        onClick={() => handlePlay(eNote)}
      >
        <NoteLetters>E</NoteLetters>
      </WhiteKeys>
      <WhiteKeys
        disabled={keysFormula.indexOf("F") === -1}
        onClick={() => handlePlay(fNote)}
      >
        <NoteLetters>F</NoteLetters>
      </WhiteKeys>
      <WhiteKeys
        disabled={keysFormula.indexOf("G") === -1}
        onClick={() => handlePlay(gNote)}
      >
        <NoteLetters>G</NoteLetters>
      </WhiteKeys>
      <WhiteKeys
        disabled={keysFormula.indexOf("A") === -1}
        onClick={() => handlePlay(aNote)}
      >
        <NoteLetters>A</NoteLetters>
      </WhiteKeys>
      <WhiteKeys
        style={{ borderRadius: "2px 10px 10px 2px" }}
        disabled={keysFormula.indexOf("B") === -1}
        onClick={() => handlePlay(bNote)}
      >
        <NoteLetters>B</NoteLetters>
      </WhiteKeys>
      <BlackKeys
        style={{ left: "24px" }}
        disabled={keysFormula.indexOf("C#") === -1}
        onClick={() => handlePlay(cSharpNote)}
      >
        <WhiteLetter>C#</WhiteLetter>
      </BlackKeys>
      <BlackKeys
        style={{ left: "65px" }}
        disabled={keysFormula.indexOf("D#") === -1}
        onClick={() => handlePlay(dSharpNote)}
      >
        <WhiteLetter>D#</WhiteLetter>
      </BlackKeys>
      <BlackKeys
        style={{ right: "106px" }}
        disabled={keysFormula.indexOf("F#") === -1}
        onClick={() => handlePlay(fSharpNote)}
      >
        <WhiteLetter>F#</WhiteLetter>
      </BlackKeys>
      <BlackKeys
        style={{ right: "65px" }}
        disabled={keysFormula.indexOf("G#") === -1}
        onClick={() => handlePlay(gSharpNote)}
      >
        <WhiteLetter>G#</WhiteLetter>
      </BlackKeys>
      <BlackKeys
        style={{ right: "24px" }}
        disabled={keysFormula.indexOf("A#") === -1}
        onClick={() => handlePlay(aSharpNote)}
      >
        <WhiteLetter>A#</WhiteLetter>
      </BlackKeys>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 286px;
  height: 150px;
  background: transparent;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
  position: relative;
  display: flex;
  border-radius: 10px;
`;
const WhiteKeys = styled.button`
  height: 100%;
  width: 41px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  cursor: pointer;

  &:focus {
    outline-color: #ff4848;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:disabled:active {
    transform: scale(1);
  }
`;

const BlackKeys = styled.button`
  position: absolute;
  height: 96px;
  width: 35px;
  background: #111;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  border: none;
  box-shadow: inset -2px -2px 7px rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:focus {
    outline-color: #ff4848;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #1b1b1b;
    cursor: default;

    p {
      color: #333;
    }
  }
  &:disabled:active {
    transform: scale(1);
  }
`;

const NoteLetters = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

const WhiteLetter = styled(NoteLetters)`
  font-size: 17px;
  color: #fff;
`;
