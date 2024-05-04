import { useDarkMode } from "../contexts/AppThemeContext";
import styled from "styled-components";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Button = styled.button`
  display: inline-block;
  background: none;
  border: 0;
  cursor: pointer;
`;

function Theme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <MdOutlineLightMode size={30} color="var(--color-blue-900)" />
      ) : (
        <MdOutlineDarkMode size={30} color="var(--color-blue-900)" />
      )}
    </Button>
  );
}

export default Theme;
