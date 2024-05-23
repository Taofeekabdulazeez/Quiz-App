import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./features/users/components/Users";
import UserOverview from "./features/users/components/UserOverview";
import Dashboard from "./Pages/app/Dashboard";
import AppLayout from "./ui/AppLayout";
import Settings from "./Pages/app/Settings";
import Login from "./Pages/login/Login";
import Results from "./Pages/app/Results";
import Uploads from "./Pages/app/Uploads";
import HomePage from "./Pages/Home/HomePage";
import Questions from "./Pages/app/Questions";
import QuizApp from "./Pages/quiz/QuizApp";
import ResultOverview from "./features/results/components/ResultOverview";
import QuizProvider from "./features/quiz/store/QuizProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route
          path="quiz"
          element={
            <QuizProvider>
              <QuizApp />
            </QuizProvider>
          }
        />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserOverview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="results" element={<Results />} />
          <Route path="results/:id" element={<ResultOverview />} />
          <Route path="uploads" element={<Uploads />}>
            <Route index element={<Navigate replace to="questions" />} />
            <Route path="questions" element={<Questions />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
