import { Route, Routes } from "react-router-dom";
import { Chat } from "./pages/chat";
import { User } from "./pages/user";
import { Login } from "./pages/login";
import { Projects } from "./pages/projects";
import { Schedule } from "./pages/schedule";
import { MainLayout } from "./components/mainlayout";

export function AppRoutes() {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <MainLayout>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </MainLayout>
  ) : (
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
  );
}
