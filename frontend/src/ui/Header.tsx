import ThemeButton from "../components/ThemeButton";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 6rem;
  background-color: var(--bg-layer-2);
  font-size: var(--font-size-md);
  display: flex;
  justify-content: space-between;
  padding-inline: 3rem;
`;

function Header() {
  return (
    <StyledHeader>
      Header
      <ThemeButton />
    </StyledHeader>
  );
}

export default Header;
