import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
