import { FC } from "react";
import styled from "styled-components";

interface ColoredBarProps {
  bg: string;
  bar: number;
  totalBars: number;
}

export const ColoredBar: FC<ColoredBarProps> = ({ bg, bar, totalBars }) => {
  return (
    <Bar style={{ background: bg, width: `${(bar / totalBars) * 100}%` }} />
  );
};

const Bar = styled.div`
  height: 100%;
`;
