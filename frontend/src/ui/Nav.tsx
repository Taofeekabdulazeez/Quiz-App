import { FiUsers } from "react-icons/fi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuBarChart2, LuUpload } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navLinks = [
  { label: "Home", to: "dashboard", Icon: IoHomeOutline },
  { label: "Students", to: "users", Icon: FiUsers },
  { label: "Results", to: "results", Icon: LuBarChart2 },
  { label: "Uploads", to: "uploads", Icon: LuUpload },
  { label: "Settings", to: "settings", Icon: IoSettingsOutline },
];

export default function Nav() {
  return (
    <StyledNav>
      <StyleLinks>
        {navLinks.map(({ label, to, Icon }) => (
          <li key={label}>
            <StyleLink to={to}>
              <Icon size={20} />
              {label}
            </StyleLink>
          </li>
        ))}
      </StyleLinks>
    </StyledNav>
  );
}

const StyledNav = styled.nav``;

const StyleLinks = styled.ul`
  display: grid;
  /* align-items: center; */
  list-style: none;
  gap: 1rem;
`;

const StyleLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-gray-700);
  font-weight: 500;
  font-size: var(--font-size-xxs);
  text-decoration: none;
  padding: 1.2rem 3.2rem;
  border-radius: 9px;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: var(--bg-base);
  }

  &::before {
    content: "";
    display: none;
    background-color: var(--color-blue-900);
    height: 100%;
    width: 0.4rem;
    position: absolute;
    left: 0;
  }

  &.active {
    background-color: var(--color-blue-50);

    color: var(--color-blue-900);
  }

  &.active::before {
    display: block;
  }
`;
