import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/CT-Logo-web-side.jpg";

const Header = () => {
  return (
    <header className="container grid grid-cols-3 mx-auto px-24 ">
      <Link to="/" className="hover:opacity-75">
        <img src={logo} alt="logo" width={48} height={48} />
      </Link>

      <nav className="flex justify-center col-span-2">
        <ul className="menu menu-horizontal gap-4 px-1 text-base">
          <li className="hover:text-active">
            <NavLink to={"/"} aria-label="link to hame page">
              Home
            </NavLink>
          </li>
          <li className="hover:text-active">
            <NavLink to={"/catalog"} aria-label="link to catalog page">
              Catalog
            </NavLink>
          </li>
          <li className="hover:text-active">
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
