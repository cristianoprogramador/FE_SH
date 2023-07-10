import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

import user from "../assets/icons/user.svg";
import projects from "../assets/icons/projects.svg";
import schedule from "../assets/icons/schedule.svg";
import chat from "../assets/icons/chat.svg";

export function Sidebar() {
  return (
    <div className="w-48 bg-gradient-to-b from-sideBar-Top from-0% to-sideBar-Bottom to-35% shadow-3xl flex flex-col justify-between text-center">
      <div className="flex flex-col items-center mt-6 text-white gap-1">
        <img
          src="https://avatars.githubusercontent.com/u/102186472?v=4"
          alt="userPhoto"
          className="rounded-full h-24 w-24 border-white border-2"
        />
        <div>
          <div>Cristiano Silva</div>
          <div>(Admin)</div>
        </div>
      </div>
      <nav className="m-4">
        <ul className="text-white">
          <NavLink
            className="flex align-middle items-center mb-5"
            to="/users"
            style={({ isActive }) => ({
              border: isActive ? "2px solid #942EA5" : "2px solid transparent",
              borderRadius: isActive ? "10px" : "10px",
              padding: isActive ? "10px" : "10px",
              transition: "border-color 0.2s ease-in-out",
            })}
          >
            <img src={user} alt="" className="h-8 w-1/2" />
            Equipe
          </NavLink>
          <NavLink
            className="flex align-middle items-center mb-5"
            to="/projects"
            style={({ isActive }) => ({
              border: isActive ? "2px solid #942EA5" : "2px solid transparent",
              borderRadius: isActive ? "10px" : "10px",
              padding: isActive ? "10px" : "10px",
              transition: "border-color 0.2s ease-in-out",
            })}
          >
            <img src={projects} alt="" className="h-8 w-1/2" />
            Projetos
          </NavLink>
          <NavLink
            className="flex align-middle items-center mb-5"
            to="/schedule"
            style={({ isActive }) => ({
              border: isActive ? "2px solid #942EA5" : "2px solid transparent",
              borderRadius: isActive ? "10px" : "10px",
              padding: isActive ? "10px" : "10px",
              transition: "border-color 0.2s ease-in-out",
            })}
          >
            <img src={schedule} alt="" className="h-8 w-1/2" />
            Calendário
          </NavLink>
          <NavLink
            className="flex align-middle items-center mb-5"
            to="/chat"
            style={({ isActive }) => ({
              border: isActive ? "2px solid #942EA5" : "2px solid transparent",
              borderRadius: isActive ? "10px" : "10px",
              padding: isActive ? "10px" : "10px",
              transition: "border-color 0.2s ease-in-out",
            })}
          >
            <img src={chat} alt="" className="h-7 w-1/2" />
            Chat
          </NavLink>
        </ul>
      </nav>

      <div className="flex justify-center align-middle mb-5">
        <img src={logo} alt="logo-SoftwareHouse" />
      </div>
    </div>
  );
}
