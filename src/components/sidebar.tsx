import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="bg-gray-200 w-64">
      <nav>
        <ul>
          <li>
            <Link to="/users">Equipe</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/schedule">Calendário</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
