import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container grid grid-cols-3 mx-auto ">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        LOGO
      </Link>

      <nav className="flex justify-center col-span-2">
        <ul className="menu menu-horizontal gap-4 px-1">
          <li>
            <NavLink to={"/"} aria-label="link to hame page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/catalog"} aria-label="link to catalog page">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"} aria-label="link to favorites page">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
