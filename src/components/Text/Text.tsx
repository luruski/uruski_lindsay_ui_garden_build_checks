import React from "react";
import styled from "styled-components";

interface TextProps {
  content?: string;
  color?: string;
  disabled?: boolean;
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? "#aaa" : props.color || "#333")};
  font-size: 14px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const Text = ({
  content = "Some text",
  color,
  disabled = false,
}: TextProps) => {
  return (
    <StyledText color={color} disabled={disabled}>
      {content}
    </StyledText>
  );
};

export default Text;
