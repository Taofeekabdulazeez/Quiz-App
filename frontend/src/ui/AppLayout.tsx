import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";

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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-gray-100)",
            color: "var(--color-gray-700)",
          },
        }}
      />
    </>
  );
}

export default AppLayout;
