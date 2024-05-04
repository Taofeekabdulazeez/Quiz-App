import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const StyledLogin = styled.div`
  width: 50rem;
  max-width: 85%;
  margin-inline: auto;
  background-color: var(--bg-layer-1);
  padding: 3.2rem 2.4rem;
  margin-top: 9rem;
  border-radius: 23px;
`;

const Heading = styled.h1`
  font-size: var(--font-size-md);
  font-weight: 700;
  margin-bottom: 3.2rem;
  text-align: center;
`;

const Text = styled.p`
  font-size: var(--font-size-xxs);
  font-weight: 500;
  color: var(--color-gray-600);
  text-align: center;
  margin-bottom: 3rem;
`;

function Login() {
  return (
    <StyledLogin>
      <Heading>Login to your account</Heading>
      {false && <Text>Please Provide your Login credentials</Text>}
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
