import React from "react";
import styled from "styled-components";

interface DropdownProps {
  options?: string[];
  disabled?: boolean;
  backgroundColor?: string;
}

interface StyledSelectProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  background-color: ${(props) => (props.disabled ? "#eee" : props.backgroundColor || "#fff")};
  color: ${(props) => (props.disabled ? "#aaa" : "#333")};
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Dropdown = ({
  options = ["Option 1", "Option 2", "Option 3"],
  disabled = false,
  backgroundColor,
}: DropdownProps) => {
  return (
    <StyledSelect disabled={disabled} backgroundColor={backgroundColor}>
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
