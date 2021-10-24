const { default: styled } = require("styled-components");

export const Container = styled.div`
  width: ${(props) =>
    (props.fluid && "100%") || (props.semiFluid && "95%") || "90%"};
  margin: 1rem auto;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0rem;
    padding: 1rem;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: ${(props) => `${props.gap}px` || "0px"};
  justify-content: ${(props) =>
    (props.jCenter && "center") || (props.jEnd && "flex-end") || "flex-start"};

  align-items: ${(props) =>
    (props.aCenter && "center") || (props.aEnd && "flex-end") || "flex-start"};

  @media screen and (max-width: 768px) {
    ${(props) => props.colMb && `flex-direction :  column`};
  }
`;

export const GridItem = styled.div`
  ${(props) => props.lg && `width : ${(100 / 12) * props.lg}%`};
  text-align: ${(props) => props.align || "left"};
  @media screen and (max-width: 1024px) {
    ${(props) => props.md && `width : ${(100 / 12) * props.md}%`};
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.sm && `width : ${(100 / 12) * props.sm}%`};
  }
`;

export const FillItem = styled.div`
  flex: 1;
`;
