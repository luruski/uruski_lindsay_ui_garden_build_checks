import React from "react";
import styled from "styled-components";

interface LabelProps {
  text?: string;
  color?: string;
  disabled?: boolean;
}

interface StyledLabelProps {
  color?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${(props) => (props.disabled ? "#aaa" : props.color || "#333")};
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Label = ({ text = "Label", color, disabled = false }: LabelProps) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
