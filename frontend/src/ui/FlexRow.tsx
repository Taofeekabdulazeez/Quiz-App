import styled from "styled-components";

const FlexRow = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap || "1rem"};
  justify-content: space-between;
`;

export default FlexRow;
