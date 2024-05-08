import styled, { css } from "styled-components";

export const Button = styled.button<{ $type?: string }>`
  background: none;
  border: 0;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: 0.2rem solid var(--color-primary);
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 9px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  ${(props) =>
    props.$type === "inverted" &&
    css`
      background-color: var(--color-bg-900);
      color: var(--color-text);
      border: 0.2rem solid transparent;
    `}
`;
