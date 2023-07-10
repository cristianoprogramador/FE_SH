import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import { Chat } from "./pages/chat";
import { User } from "./pages/user";
import { Login } from "./pages/login";
import { Projects } from "./pages/projects";
import { Schedule } from "./pages/schedule";

export function AppRoutes({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <>
      {isAuthenticated ? (
        <>
          <Sidebar />
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/users" element={<User />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/schedule" element={<Schedule />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </>
  );
}
