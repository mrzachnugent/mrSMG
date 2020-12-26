import { FC } from "react";
import styled, { StyledFunction } from "styled-components";
import { colors } from "../../GlobalStyle";
import { ColoredBar } from "./ColoredBar";

interface StructureProps {
  structure: string[];
  bars: number[];
  totalBars: number;
}

export const Structure: FC<StructureProps> = ({
  structure,
  bars,
  totalBars,
}) => {
  return (
    <Wrapper>
      <VisualStructureWrapper>
        {structure.map((struc, i) => {
          switch (struc) {
            case "Intro":
              return (
                <ColoredBar
                  bg={colors.intro}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
            case "Verse":
              return (
                <ColoredBar
                  bg={colors.verse}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
            case "Pre-chorus":
              return (
                <ColoredBar
                  bg={colors.preChorus}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
            case "Chorus":
              return (
                <ColoredBar
                  bg={colors.chorus}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
            case "Bridge":
              return (
                <ColoredBar
                  bg={colors.bridge}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
            case "Outro":
              return (
                <ColoredBar
                  bg={colors.outro}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
            default:
              return (
                <ColoredBar
                  bg={"black"}
                  bar={bars[i]}
                  totalBars={totalBars}
                  key={`section-${i}`}
                />
              );
          }
        })}
      </VisualStructureWrapper>
      <Description>
        <div>
          <List>
            <NamedItems style={{ textDecoration: "underline" }}>
              Section
            </NamedItems>
            {structure.map((struc, i) => {
              return (
                <NamedItems key={`structure-section-${i}`}>
                  {struc} :
                </NamedItems>
              );
            })}
          </List>
        </div>
        <div>
          <List>
            <ListItems style={{ textDecoration: "underline" }}>Bars</ListItems>
            {bars.map((num, i) => {
              return (
                <ListItems key={`structure-section-bars-${i}`}>{num}</ListItems>
              );
            })}
          </List>
        </div>
        <List>
          <Square />

          {structure.map((struc, i) => {
            switch (struc) {
              case "Intro":
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: colors.intro }}
                  />
                );
              case "Verse":
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: colors.verse }}
                  />
                );
              case "Pre-chorus":
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: colors.preChorus }}
                  />
                );
              case "Chorus":
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: colors.chorus }}
                  />
                );
              case "Bridge":
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: colors.bridge }}
                  />
                );
              case "Outro":
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: colors.outro }}
                  />
                );
              default:
                return (
                  <Square
                    key={`section-color-${i}`}
                    style={{ background: "black" }}
                  />
                );
            }
          })}
        </List>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  padding: 0 11px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  margin: 15px 7px;
  min-width: 33px;
`;

const ListItems = styled.li`
  padding: 7px 0;
  text-align: center;
`;

const NamedItems = styled(ListItems)`
  font-weight: 600;
  text-align: right;
`;

const VisualStructureWrapper = styled.div`
  margin: 30px auto 0 auto;
  max-width: 500px;
  width: 100%;
  height: 75px;
  border-radius: 7px;
  display: flex;
  overflow: hidden;
  box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.26),
    3px 0px 13px -7px rgba(0, 0, 0, 0.05);
`;

const Square = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 3px;
  margin: 14px 0;
`;
