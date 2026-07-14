import React from "react";
import styled from "styled-components";

interface RadioButtonProps {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}

const StyledWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  color: ${(props) => (props.disabled ? "#aaa" : "#333")};
`;

const StyledInput = styled.input`
  cursor: inherit;
  accent-color: ${(props) => (props.disabled ? "#aaa" : "#6200ea")};
`;

const RadioButton = ({
  label = "Option",
  disabled = false,
  checked = false,
  onChange,
}: RadioButtonProps) => {
  return (
    <StyledWrapper disabled={disabled}>
      <StyledInput
        type="radio"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </StyledWrapper>
  );
};

export default RadioButton;
