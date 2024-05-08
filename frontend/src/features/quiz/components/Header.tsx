import { ReactNode } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 0rem;
`;

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
