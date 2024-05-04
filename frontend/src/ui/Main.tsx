import { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 3.2rem;
`;

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
