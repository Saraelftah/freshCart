import { NavLink } from "react-router-dom";
import logo from "../../assets/LogoMakr-0z3bxn.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


function Navbar() {

  return (
    <>
      <nav className="bg-stone-100">
        <div className="container flex justify-between items-center">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img src={logo} alt="logo" width={100} />

            <ul className="lg:flex flex-col lg:flex-row gap-3 text-lightText hidden">
              <li className="hover:text-greenValley transition duration-300">
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li className="hover:text-greenValley transition duration-300">
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              <li className="hover:text-greenValley transition duration-300">
                <NavLink>Products</NavLink>
              </li>
              <li className="hover:text-greenValley transition duration-300">
                <NavLink>Categories</NavLink>
              </li>
              <li className="hover:text-greenValley transition duration-300">
                <NavLink>Brands</NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:flex flex-col lg:flex-row gap-3 items-center hidden">

            <ul className="flex flex-col lg:flex-row gap-3 text-title">
              <li>
                <NavLink>
                  <i className="fa-brands fa-instagram hover:text-greenValley transition duration-300"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-facebook hover:text-greenValley transition duration-300"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-tiktok hover:text-greenValley transition duration-300"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-twitter hover:text-greenValley transition duration-300"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-linkedin hover:text-greenValley transition duration-300"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-youtube hover:text-greenValley transition duration-300"></i>
                </NavLink>
              </li>
            </ul>

            <ul className="flex flex-col lg:flex-row gap-3 text-lightText">
              <li className="hover:text-greenValley transition duration-300">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li className="hover:text-greenValley transition duration-300">
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              <li className="hover:text-greenValley transition duration-300 hidden">
                <NavLink to={"/home"}>Logout</NavLink>
              </li>
            </ul>
          </div>
          <BurgerMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
