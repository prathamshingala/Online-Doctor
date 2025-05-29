import { NavLink } from "react-router-dom";
export default function Active_About() {
  <div>
    <ul className="navbar">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "#fd7702" }} to="/About">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "#fd7702" }} to="/ContactUs">
          Contact Us
        </NavLink>
      </li>
    </ul>
  </div>;
}
