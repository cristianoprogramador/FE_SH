import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import { Chat } from "./pages/chat";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Projects } from "./pages/projects";
import { Schedule } from "./pages/schedule";

export default function App() {
  const isAuthenticated = true; // State is authenticated just in development

  return (
    <BrowserRouter>
      <div className="flex">
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <>
            <Sidebar />
            <div className="flex-grow">
              <Routes>
                <Route path="/users" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/schedule" element={<Schedule />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
