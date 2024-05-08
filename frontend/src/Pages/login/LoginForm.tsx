import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../../contexts/AppThemeContext";

const StyledForm = styled.form`
  display: grid;
  gap: 2.4rem;
`;

const Label = styled.label`
  display: inline-block;
  font-size: var(--font-size-xxs);
  font-weight: 500;
  margin-bottom: 0.6rem;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border: 0.2rem solid var(--color-gray-100);
  background-color: var(--color-gray-75);
  border-radius: 9px;
  overflow: hidden;
  padding: 1rem 1.4rem;

  &:focus-within {
    border-color: var(--color-blue-900);
  }
`;

const Input = styled.input`
  outline: none;
  border: 0;
  background-color: inherit;
  height: inherit;
  color: var(--color-gray-700);
  font-weight: 500;
  font-size: var(--font-size-xs);
`;

const ButtonLogin = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue-900);
  font-size: var(--font-size-xs);
  padding: 1.2rem;
  font-weight: 600;
  color: var(--color-blue-100);
  border-radius: 9px;
  margin-top: 2.4rem;

  &:hover {
    background-color: var(--color-blue-1000);
    cursor: pointer;
  }
`;

const ButtonToggle = styled.span`
  background: none;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Error = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  /* font-size: var(--font-size-xxxs); */
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  color: var(--color-red-900);
`;

function LoginForm() {
  const { toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledForm onSubmit={(event) => event.preventDefault()} autoComplete="off">
      <div>
        <Label>Email address</Label>
        <InputWrapper>
          <Input autoComplete="off" />
        </InputWrapper>
        {false && (
          <Error>
            <MdErrorOutline size={14} /> Please provide a valid email address
          </Error>
        )}
      </div>
      <div>
        <Label>Password</Label>
        <InputWrapper>
          <Input autoComplete="off" type={hidePassword ? "password" : "text"} />
          <ButtonToggle
            onClick={() => {
              setHidePassword((show) => !show);
              toggleDarkMode();
            }}
          >
            {hidePassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </ButtonToggle>
        </InputWrapper>
        <Error>
          <MdErrorOutline size={14} /> You've entered an incorrect password
        </Error>
      </div>
      <ButtonLogin onClick={() => navigate("/dashboard")}>Login</ButtonLogin>
    </StyledForm>
  );
}

export default LoginForm;
