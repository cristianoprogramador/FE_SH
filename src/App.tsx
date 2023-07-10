import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";

export default function App() {
  const isAuthenticated = true; // State is authenticated just for development

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <AppRoutes isAuthenticated={isAuthenticated} />
      </div>
    </BrowserRouter>
  );
}
