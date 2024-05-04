import styled from "styled-components";
import Logo from "../ui/Logo";
import Nav from "./Nav";

const StyledAside = styled.aside`
  background-color: var(--bg-layer-1);
  padding: 1.2rem;
  grid-row: 1/-1;
`;

function Aside() {
  return (
    <StyledAside>
      <Logo />
      <Nav />
    </StyledAside>
  );
}

export default Aside;
