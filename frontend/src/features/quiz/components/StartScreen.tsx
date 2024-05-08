import { useDispatch } from "react-redux";
// import { storeUser } from "../features/userSlice";
import styled from "styled-components";

// import { startQuiz } from "../features/quizSlice";
import { useState } from "react";
import { storeUser } from "../../../redux/reducers/userReducer";
import { startQuiz } from "../../../redux/reducers/quizReducer";

const StyledStartScreen = styled.div`
  height: 100vh;
  /* background-color: var(--color-primary); */
  background: linear-gradient(to top left, #02223d, #033966);
  display: grid;
  place-content: center;
`;

const LoginForm = styled.form`
  background: linear-gradient(to bottom right, #e6f1fa, #f7f7f8);
  width: 50rem;
  padding: 3.2rem;
  border-radius: 23px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  font-weight: 600;
  text-align: center;
  /* color: #e6f1fa; */
`;

const Button = styled.button`
  background-color: var(--color-primary);
  color: #fff;
  border: 0;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  padding: 1.2rem 1.4rem;
  border-radius: 19px;
  cursor: pointer;

  &.empty {
    background-color: #3291df;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 1rem;
  color: var(--color-text);
  line-height: 1.6;
`;

const Input = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 1.8rem;
  border-radius: 17px;
  outline: none;
  background-color: #fff;
  border: 0.2rem solid transparent;

  &:focus {
    border: 0.2rem solid var(--color-primary);
  }
`;

const Inputbox = styled.div`
  display: grid;
  gap: 1rem;
`;

const FlexCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

function StartScreen() {
  const [name, setName] = useState("a");
  const [email, setEmail] = useState("a");
  // const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useDispatch();

  const handleStartQuiz = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || !email) return;
    dispatch(storeUser({ name, email }));
    dispatch(startQuiz());
  };

  return (
    <StyledStartScreen>
      <LoginForm onSubmit={handleStartQuiz}>
        <Heading>Welcome</Heading>
        <FlexCol>
          <Inputbox>
            <Label>Name</Label>
            <Input
              type="name"
              value={name}
              spellCheck={false}
              onChange={(event) => setName(event.target.value)}
            />
          </Inputbox>
          <Inputbox>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              spellCheck={false}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Inputbox>
          <Button>Start Quiz</Button>
        </FlexCol>
      </LoginForm>
    </StyledStartScreen>
  );
}

export default StartScreen;
