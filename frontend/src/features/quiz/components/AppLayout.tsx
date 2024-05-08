import styled from "styled-components";
import { ReactNode } from "react";

const AppContainer = styled.div`
  /* padding: 1.6rem; */

  @media (max-width: 35em) {
    padding: 0;
  }
`;

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return <AppContainer>{children}</AppContainer>;
}

export default AppLayout;
