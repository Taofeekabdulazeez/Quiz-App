import styled from "styled-components";

const StyledLogo = styled.a`
  & img {
    display: block;
    height: 10rem;
  }
`;

function Logo() {
  return (
    <StyledLogo className="logo-box" href="\#">
      <img src="Buddylogo.png" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
