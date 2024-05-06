import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./components/Users";
import UserOverview from "./components/UserOverview";
import Dashboard from "./components/Dashboard";
import AppLayout from "./ui/AppLayout";
import Settings from "./components/Settings";
import Login from "./Pages/Login";
import Results from "./components/Results";
import Uploads from "./components/Uploads";
import HomePage from "./Pages/Home/HomePage";
import Questions from "./components/Questions";
import Question from "./components/Question";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserOverview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="results" element={<Results />} />
          <Route path="uploads" element={<Uploads />}>
            <Route index element={<Navigate replace to="questions" />} />
            <Route path="questions" element={<Questions />} />
            <Route path="questions/:id" element={<Question />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
