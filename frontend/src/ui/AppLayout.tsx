import styled from "styled-components";
import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "../components/Header";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

function AppLayout() {
  return (
    <Layout>
      <Header />
      <Aside />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default AppLayout;
