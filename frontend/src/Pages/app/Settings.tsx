import styled from "styled-components";

function Settings() {
  return (
    <Container>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        voluptatibus excepturi hic aut laudantium iure ea quod consectetur
        similique corporis ut reprehenderit perspiciatis molestiae autem ab
        officiis! Repellendus, saepe ducimus.
      </P>
    </Container>
  );
}

export default Settings;

const Container = styled.div`
  background-color: wheat;
`;

const P = styled.p`
  font-size: 34px;
`;
