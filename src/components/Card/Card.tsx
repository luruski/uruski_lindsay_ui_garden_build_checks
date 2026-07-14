import React from "react";
import styled from "styled-components";

interface CardProps {
  title?: string;
  description?: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) => (props.disabled ? "#eee" : props.backgroundColor || "#fff")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #222;
`;

const StyledDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Card = ({
  title = "Card Title",
  description = "Card description goes here.",
  disabled = false,
  backgroundColor,
}: CardProps) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledCard>
  );
};

export default Card;
