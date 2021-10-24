import styled, { css } from "styled-components";

const TextStyles = css`
  font-weight: ${(props) => props.wt || "normal"};
  text-align: ${(props) =>
    (props.right && "right") ||
    (props.center && "center") ||
    (props.left && "left") ||
    "left"};
  ${(props) => (props.fluid ? `width:100%` : `width:fit-content`)}

  ${(props) =>
    (props.variant == 1 || props.variant == "1") &&
    `
    font-size : 3rem ; 
    `};
  ${(props) =>
    (props.variant == 2 || props.variant == "2") &&
    `
    font-size : 2.7rem ; 
    `};
  ${(props) =>
    (props.variant == 3 || props.variant == "3") &&
    `
    font-size : 2.4rem ; 
    `};
  ${(props) =>
    (props.variant == 4 || props.variant == "4") &&
    `
    font-size : 2.1rem ; 
    `};
  ${(props) =>
    (props.variant == 5 || props.variant == "5") &&
    `
    font-size : 1.8rem ; 
    `};
  ${(props) =>
    (props.variant == 6 || props.variant == "6") &&
    `
    font-size : 1.5rem ; 
    `};
  ${(props) =>
    (props.variant == 7 || props.variant == "7") &&
    `
    font-size : 1.2rem ; 
    `};
  ${(props) =>
    (props.variant == 8 || props.variant == "8") &&
    `
    font-size : 0.9rem ; 
    `};
  ${(props) =>
    (props.variant == 9 || props.variant == "9") &&
    `
    font-size : 0.6rem ; 
    `};
  ${(props) =>
    (props.variant == 10 || props.variant == "10") &&
    `
    font-size : 0.3rem ; 
    `};

  @media screen and (max-width: 768px) {
    ${(props) =>
      (props.variant == 1 || props.variant == "1") &&
      `
    font-size : 2rem ; 
    `};
    ${(props) =>
      (props.variant == 2 || props.variant == "2") &&
      `
    font-size : 1.8rem ; 
    `};
    ${(props) =>
      (props.variant == 3 || props.variant == "3") &&
      `
    font-size : 1.6rem ; 
    `};
    ${(props) =>
      (props.variant == 4 || props.variant == "4") &&
      `
    font-size : 1.4rem ; 
    `};
    ${(props) =>
      (props.variant == 5 || props.variant == "5") &&
      `
    font-size : 1.2rem ; 
    `};
    ${(props) =>
      (props.variant == 6 || props.variant == "6") &&
      `
    font-size : 1rem ; 
    `};
    ${(props) =>
      (props.variant == 7 || props.variant == "7") &&
      `
    font-size : 0.8rem ; 
    `};
    ${(props) =>
      (props.variant == 8 || props.variant == "8") &&
      `
    font-size : 0.6rem ; 
    `};
    ${(props) =>
      (props.variant == 9 || props.variant == "9") &&
      `
    font-size : 0.4rem ; 
    `};
    ${(props) =>
      (props.variant == 10 || props.variant == "10") &&
      `
    font-size : 0.2rem ; 
    `};
  }
`;

export const TypoOne = styled.h1`
  ${TextStyles};
`;
export const TypoTwo = styled.h2`
  ${TextStyles};
`;
export const TypoThree = styled.h3`
  ${TextStyles};
`;
export const TypoFour = styled.h4`
  ${TextStyles};
`;
export const TypoFive = styled.h5`
  ${TextStyles};
`;
export const TypoSix = styled.h6`
  ${TextStyles};
`;
