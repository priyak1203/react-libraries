import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* LOGO */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              nav links
            </ul>
          </div>
        </div>

        {/* NAVLINKS */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">nav links</ul>
        </div>

        {/* ICONS */}
        <div className="navbar-end">
          {/* THEME ICONS */}
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                9
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
