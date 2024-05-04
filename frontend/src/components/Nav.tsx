import { FiUsers } from "react-icons/fi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuBarChart2, LuUpload } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  font-size: var(--font-size-xs);
  text-decoration: none;
  padding: 1.2rem 3.2rem;
  border-radius: 13px;
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

function Nav() {
  return (
    <StyledNav>
      <StyleLinks>
        <li>
          <StyleLink to="dashboard">
            <IoHomeOutline size={20} />
            Home
          </StyleLink>
        </li>
        <li>
          <StyleLink to="users">
            <FiUsers size={20} />
            Students
          </StyleLink>
        </li>

        <li>
          <StyleLink to="results">
            <LuBarChart2 size={20} />
            Results
          </StyleLink>
        </li>
        <li>
          <StyleLink to="uploads">
            <LuUpload size={20} />
            Uploads
          </StyleLink>
        </li>
        <li>
          <StyleLink to="settings">
            <IoSettingsOutline size={20} />
            Settings
          </StyleLink>
        </li>
      </StyleLinks>
    </StyledNav>
  );
}

export default Nav;
