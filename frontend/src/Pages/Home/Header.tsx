import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  /* background-color: $clr-neutral-100; */
  /* box-shadow: $custom-shadow; */
  --nav-gap: 20vw;
  height: 7.2rem;
  z-index: 99999999;
  width: 100%;
  padding-inline: 3.2rem;
  background-color: var(--bg-layer-1);
  display: grid;
  grid-template-columns: auto 1fr;
  align-content: center;
  /* justify-items: center; */
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
