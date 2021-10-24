import React from "react";
import { TypoFive, TypoFour, TypoOne, TypoSix, TypoThree, TypoTwo } from "./styles";

const Text = (props) => {
  const { variant, weight, component, children, align , right , center , left , fluid } = props;
  return (
    <>
      {component == "h1" && (
        <TypoOne
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoOne>
      )}
      {component == "h2" && (
        <TypoTwo
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoTwo>
      )}
      {component == "h3" && (
        <TypoThree
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoThree>
      )}
      {component == "h4" && (
        <TypoFour
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoFour>
      )}
      {component == "h5" && (
        <TypoFive
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoFive>
      )}
      {component == "h6" && (
        <TypoSix
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoSix>
      )}
      {component == undefined && (
        <TypoSix
          variant={variant}
          weight={weight}
          align={align}
          right={right}
          center={center}
          left={left}
          fluid={fluid}
        >
          {children}
        </TypoSix>
      )}
    </>
  );
};

export default Text;
