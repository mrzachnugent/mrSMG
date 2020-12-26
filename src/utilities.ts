export interface GetFormulaKeysProps {
  formula: number[];
  start: string;
}

const pianoKeys = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const getFormulaKeys = (formula: number[], start: string) => {
  const selectedKeys = formula.map((num) => {
    let startIndex = pianoKeys.indexOf(start);
    return pianoKeys[startIndex + num - 1];
  });
  return selectedKeys;
};

export const numberShortner = (num: number) => {
  if (num < 1000) {
    return num;
  } else if (num < 10000) {
    return `${String(num)[0]}K`;
  } else if (num < 100000) {
    return `${String(num)[0]}${String(num)[1]}K`;
  } else if (num < 1000000) {
    return `${String(num)[0]}${String(num)[1]}${String(num)[2]}K`;
  } else if (num < 10000000) {
    return `${String(num)[0]}M`;
  } else if (num < 100000000) {
    return `${String(num)[0]}${String(num)[1]}M`;
  } else if (num < 1000000000) {
    return `${String(num)[0]}${String(num)[1]}${String(num)[2]}M`;
  }
};
