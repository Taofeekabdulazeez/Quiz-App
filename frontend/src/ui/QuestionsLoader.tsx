import styled from "styled-components";

const List = styled.ul`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  list-style-type: none;
  gap: 1rem;

  & li {
    padding: 1.2rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(
          90deg,
          transparent,
          var(--loader-gray) 90%,
          transparent 100%
        ),
        linear-gradient(var(--color-gray-200) 50px, transparent 0);
      background-repeat: no-repeat;
      background-position: -200px 0, center 100%;
      animation: animloader 1s linear infinite;
    }
  }
`;

const Heading = styled.h4`
  margin-left: 2rem;
  font-weight: 500;
  color: var(--color-gray-800);
`;

type Props = {
  rows?: number;
};

function QuestionsLoader({ rows = 15 }: Props) {
  const dataRows = Array.from({ length: rows }, (_, index) => index);
  return (
    <div>
      <Heading>Edit/Delete question</Heading>
      <List>
        {dataRows.map((row) => (
          <li key={row}></li>
        ))}
      </List>
    </div>
  );
}

export default QuestionsLoader;
