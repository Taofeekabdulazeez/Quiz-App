import styled, { keyframes } from "styled-components";

const rotation = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const ButtonLoader = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  border: 0.2rem dotted var(--color-gray-100);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

export default ButtonLoader;
