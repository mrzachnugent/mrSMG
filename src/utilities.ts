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

// export const percentageWidth = () => {
//   return `${Math.floor()}`

// }
