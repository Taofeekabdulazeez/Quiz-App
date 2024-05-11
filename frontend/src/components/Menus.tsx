import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import styled from "styled-components";
import { useOustideClick } from "../hooks/useOutsideClick";

const Ul = styled.ul<{ $position: Position }>`
  position: fixed;
  right: ${(props) => `${props.$position.x}px`};
  top: ${(props) => `${props.$position.y}px`};
  list-style-type: none;
  background-color: var(--bg-layer-2);
  /* padding: 1rem; */
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 7px;
`;

const Button = styled.button`
  border: 0;
  background: none;
  padding: 0.4rem;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: var(--bg-base);
  }
`;

interface MenuInterface {
  open: (id: string) => void;
  openId: string;
  close: () => void;
  setPosition: (postion: Position) => void;
  position: Position;
}

const MenuContext = createContext({} as MenuInterface);

interface MenuProps {
  children: ReactNode;
}

type Position = {
  x?: number;
  y?: number;
};

function Menus({ children }: MenuProps) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({} as Position);
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

type ToggleProps = {
  id: string;
};

function Toggle({ id }: ToggleProps) {
  const { openId, open, close, setPosition } = useContext(MenuContext);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const rect = event.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height,
    });

    if (openId === "" || openId !== id) open(id);
    else close();
  };

  return (
    <Button onClick={handleClick}>
      <HiOutlineDotsVertical color="var(--color-gray-700)" size={20} />
    </Button>
  );
}

type ListProps = {
  id: string;
  children: ReactNode;
};

function List({ id, children }: ListProps) {
  const { openId, position, close } = useContext(MenuContext);
  const ref = useOustideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <Ul ref={ref} $position={position}>
      {children}
    </Ul>,
    document.body
  );
}

Menus.Toggle = Toggle;
Menus.List = List;

export default Menus;
