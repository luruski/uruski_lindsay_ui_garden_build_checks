import styled from "styled-components";

interface ImgProps {
  src?: string;
  alt?: string;
  disabled?: boolean;
  backgroundColor?: string;
}

interface StyledImgProps {
  isDisabled?: boolean;
  backgroundColor?: string;
}

const StyledImg = styled.img<StyledImgProps>`
  background-color: ${(props) => (props.isDisabled ? "#eee" : props.backgroundColor || "transparent")};
  opacity: ${(props) => (props.isDisabled ? 0.4 : 1)};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "default")};
  max-width: 100%;
  border-radius: 4px;
`;

const Img = ({
  src = "https://via.placeholder.com/150",
  alt = "image",
  disabled = false,
  backgroundColor,
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      isDisabled={disabled}
      backgroundColor={backgroundColor}
    />
  );
};

export default Img;
