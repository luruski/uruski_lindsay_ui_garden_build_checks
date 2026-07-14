import React from "react";
import styled from "styled-components";

interface HeroImageProps {
  src?: string;
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledHero = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) => (props.disabled ? "#ccc" : props.backgroundColor || "#6200ea")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledHeroImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledOverlay = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 20px;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  margin: 0 0 10px 0;
`;

const StyledSubtitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

const HeroImage = ({
  src,
  title = "Hero Title",
  subtitle = "Hero subtitle text",
  disabled = false,
  backgroundColor,
}: HeroImageProps) => {
  return (
    <StyledHero disabled={disabled} backgroundColor={backgroundColor}>
      {src && <StyledHeroImg src={src} alt="hero" />}
      <StyledOverlay>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledOverlay>
    </StyledHero>
  );
};

export default HeroImage;
