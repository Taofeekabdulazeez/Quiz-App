import {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOustideClick } from "../hooks/useOutsideClick";
import { MdClose } from "react-icons/md";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-50);
  border-radius: 11px;
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  --backdrop-color: rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: #00000027;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-gray-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-gray-500);
  }
`;

interface ModalContextInterface {
  openName: string;
  open: (arg: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextInterface>(
  {} as ModalContextInterface
);

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpensProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactNode | any;
  opens: string;
};

function Open({ children, opens: opensWindowName }: OpensProp) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

type WindowProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactNode | any;
  name: string;
};

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOustideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <MdClose size={20} color="var(--color-gray-900)" />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
