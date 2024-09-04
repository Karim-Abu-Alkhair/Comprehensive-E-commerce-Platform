import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-2 py-3 px-4  fixed-top bg-blue-500 text-white shadow-sm">
        <li>
          <NavLink to={"/"} className="nav-link ">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"} className="nav-link">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to={"/order-history"} className="nav-link">
            My Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
