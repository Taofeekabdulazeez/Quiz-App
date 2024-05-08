import { MdAccessTime } from "react-icons/md";
import styled from "styled-components";

const FlexCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const FlexRol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
`;

const Time = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-text);
`;

function Timer() {
  return (
    <FlexCol>
      <MdAccessTime size={32} />
      <FlexRol>
        <Span>Time remaining</Span>
        <Time>14 : 08</Time>
      </FlexRol>
    </FlexCol>
  );
}

export default Timer;
