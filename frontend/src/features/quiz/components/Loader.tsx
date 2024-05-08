import styled, { keyframes } from "styled-components";

const prog = keyframes`
   to {
      width: 100%;
    }
`;

const StyledLoader = styled.h1`
  font-weight: 500;
  font-size: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 16rem;
`;

const Progress = styled.span`
  display: block;
  position: relative;
  height: 1.2rem;
  width: 30rem;
  border: 0.1rem solid #fff;
  border-radius: 1rem;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: var(--color-primary);
    animation: 0.3s ${prog} ease-in infinite;
  }
`;

interface LoaderProps {
  message?: string;
}

function Loader({ message = "Loading" }: LoaderProps) {
  return (
    <StyledLoader>
      <span>{message}</span>
      <Progress></Progress>
    </StyledLoader>
  );
}

export default Loader;
