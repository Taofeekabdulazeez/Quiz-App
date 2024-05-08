import styled, { css } from "styled-components";

const StyledGuide = styled.div`
  margin-top: 6rem;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FlexRol = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const Span = styled.span<{ $type?: "unanswered" | "answered" | "current" }>`
  background: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--color-primary); */
  color: var(--color-primary);
  border: 0.15rem solid var(--color-primary);
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.4rem;

  ${(props) =>
    props.$type === "answered" &&
    css`
      background-color: #bee0f5;
      color: #0672cb;
    `}

  ${(props) =>
    props.$type === "current" &&
    css`
      background-color: var(--color-primary);
      color: #fff;
      border: 0.15rem solid var(--color-primary);
    `}
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-text);
`;

function UserGuide() {
  return (
    <StyledGuide>
      <FlexCol>
        <FlexRol>
          <Span>X</Span>
          <Text>Unanswered</Text>
        </FlexRol>
        <FlexRol>
          <Span $type="answered">X</Span>
          <Text>Answered</Text>
        </FlexRol>
        <FlexRol>
          <Span $type="current">X</Span>
          <Text>Current</Text>
        </FlexRol>
      </FlexCol>
    </StyledGuide>
  );
}

export default UserGuide;
