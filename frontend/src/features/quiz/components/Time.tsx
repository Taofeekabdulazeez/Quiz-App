import { useEffect, useState } from "react";
// import { useSubmit } from "../hooks/useSubmit";
import styled from "styled-components";
import { MdAccessTime } from "react-icons/md";
import { useQuizSelector } from "../hooks/useQuiz";
import { useSubmit } from "../hooks/useSubmit";
// import { useQuizSelector } from "../hooks/hooks";

const FlexRol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const TextBox = styled.span`
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 600;
  width: 4.8rem;
  aspect-ratio: 1 /1;
  border-radius: 7px;
  background-color: var(--color-bg-900);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  /* margin: 0 auto; */
  margin-bottom: 2.4rem;
`;

const Colon = styled.span`
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: var(--color-text);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

function Time() {
  const { submitQuiz } = useSubmit();
  const { name, email } = useQuizSelector((state) => state.user);

  const { time: qTime, score } = useQuizSelector((state) => state.quiz);
  const [time, setTime] = useState<number | null>(qTime);

  useEffect(
    function () {
      if (time === 0) {
        submitQuiz({ name, email, score });
        return;
      }
      const id = setInterval(function () {
        setTime((time) => (typeof time === "number" ? time - 1 : time));
      }, 1000);
      return () => clearInterval(id);
    },
    [time, name, email, score, submitQuiz]
  );

  if (!time) return null;

  return (
    <Center>
      <P>
        <MdAccessTime size={20} />
        Time Remaining
      </P>
      <FlexRol>
        <TextBox>{String(Math.trunc(time / 60)).padStart(2, "0")}</TextBox>
        <Colon>:</Colon>
        <TextBox>{String(time % 60).padStart(2, "0")}</TextBox>
      </FlexRol>
    </Center>
  );
}

export default Time;
