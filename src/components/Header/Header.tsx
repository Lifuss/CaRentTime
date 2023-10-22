import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex container mx-auto">
      <a className="btn btn-ghost normal-case text-xl lg:mr-[500px]">LOGO</a>

      <nav className="flex justify-center ">
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
