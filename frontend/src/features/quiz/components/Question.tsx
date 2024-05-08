// import { useAppSelector } from "../hooks/hooks";
import { useAppSelector } from "../../../redux/hooks";
import Option from "./Option";
import styled from "styled-components";
// import { useLoaderData } from "react-router-dom";
// import { questionObj } from "../interfaces/interface";
// import { useAppDispatch, useAppSelector } from "../hooks/hooks";
// import { storeQuestions } from "../features/quizSlice";

const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  display: block;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const StyledQuestion = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 3rem;
`;

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style: none;
`;

function Question() {
  const { questions, index } = useAppSelector((state) => state.quiz);
  const { question, options } = questions[index];

  return (
    <div>
      <Span>
        Question {index + 1} of {questions.length}
      </Span>
      <StyledQuestion>{question}</StyledQuestion>
      <List>
        {options.map((option, i) => (
          <Option key={option} optIndex={i}>
            {option}
          </Option>
        ))}
      </List>
    </div>
  );
}

export default Question;
