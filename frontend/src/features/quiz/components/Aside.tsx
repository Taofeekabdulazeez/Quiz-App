import { ReactNode } from "react";
import styled from "styled-components";

const StyledAside = styled.div`
  background-color: var(--color-bg-700);
  padding: 1.2rem;
  @media (max-width: 35em) {
    order: -1;
    display: none;
  }
`;

interface AsideProps {
  children: ReactNode;
}

function Aside({ children }: AsideProps) {
  return <StyledAside>{children}</StyledAside>;
}

export default Aside;
