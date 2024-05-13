import styled from "styled-components";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Notification from "../components/Notification";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

function AppLayout() {
  return (
    <>
      <Layout>
        <Header />
        <Aside />
        <Main>
          <Outlet />
        </Main>
      </Layout>
      <Notification />
    </>
  );
}

export default AppLayout;
