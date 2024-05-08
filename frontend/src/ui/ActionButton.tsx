import styled, { css } from "styled-components";

const ActionButton = styled.button<{
  $backgroundColor?: string;
  $color?: string;
  $fontSize?: string;
  $type?: "edit" | "delete" | "view";
}>`
  border: 0;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: ${(props) => props.$fontSize || `var(--font-size-xxs)`};
  color: ${(props) => props.$color || `var(--color-gray-700)`};
  background-color: ${(props) => props.$backgroundColor || `var(--bg-layer-1)`};
  &:hover {
    background-color: var(--bg-base);
  }
  border-radius: 9px;
  outline-offset: 2px;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  /* 
  &:focus {
    outline: 0.3rem solid var(--color-gray-700);
  } */

  ${(props) =>
    props.$type === "view" &&
    css`
      background-color: var(--color-blue-900);
      color: var(--color-blue-100);
      &:hover {
        background-color: var(--color-blue-1000);
        outline-color: var(--color-blue-100);
      }
      &:focus-visible {
        outline-color: var(--color-blue-900);
      }
    `}

  ${(props) =>
    props.$type === "edit" &&
    css`
      background-color: var(--color-gray-800);
      color: var(--color-gray-100);
      &:hover {
        background-color: var(--color-gray-900);
      }
      &:focus-visible {
        outline-color: var(--color-gray-800);
      }
    `}

    ${(props) =>
    props.$type === "delete" &&
    css`
      background-color: var(--color-red-1000);
      color: var(--color-gray-100);
      &:focus-visible {
        outline-color: var(--color-red-900);
      }
      &:hover {
        background-color: var(--color-red-1100);
      }
    `}

  &:hover {
    cursor: pointer;
  }
`;

export default ActionButton;
