import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.disabled ? "#ccc" : props.backgroundColor || "#6200ea")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Button = ({
  label = "Click me",
  backgroundColor,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
