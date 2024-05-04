import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: end;
`;

const StyledLink = styled(NavLink)<{ $type?: string }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-gray-700);
  font-weight: 500;
  font-size: var(--font-size-xxs);
  text-decoration: none;
  padding: 0.8rem 2.4rem;
  border-radius: 19px;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: var(--bg-base);
  }

  &.active {
    background-color: var(--bg-base);
    color: var(--color-gray-700);
  }

  ${(props) =>
    props.$type === "signup" &&
    css`
      background-color: var(--bg-base);
      color: var(--color-blue-900);
      &::before {
        display: block;
        content: "";
        background-color: var(--color-blue-900);
        height: 100%;
        width: 0.6rem;
        position: absolute;
        left: 0;
      }
      &:hover {
        background-color: var(--color-blue-100);
      }
    `}

  ${(props) =>
    props.$type === "login" &&
    css`
      background-color: var(--color-blue-900);
      color: var(--color-blue-100);
      &:hover {
        background-color: var(--color-blue-1000);
      }
    `}
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  gap: 1.2rem;
`;

const FlexRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  /* gap: var(--nav-gap); */
  gap: 20rem;
`;

function Nav() {
  return (
    <StyledNav>
      <FlexRow>
        <NavLinks>
          <li>
            <StyledLink to="/home">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/cgpa">CGPA</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/faqs">FAQS</StyledLink>
          </li>
        </NavLinks>
        <NavLinks>
          <li>
            <StyledLink to="/signup" $type="signup">
              Sign up
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/login" $type="login">
              Login
            </StyledLink>
          </li>
        </NavLinks>
      </FlexRow>
    </StyledNav>
  );
}

export default Nav;
