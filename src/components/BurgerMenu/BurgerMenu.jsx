import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="relative lg:hidden z-30">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          rounded
          duration={0.8}
          color={isOpen ? "#c10007" : "#3a3434"}
        />
        {isOpen && (
          <div className="absolute right-2 bg-stone-100 shadow-md rounded-lg py-5 px-7 ">
            <ul className="flex flex-col gap-3 text-lightText items-center">
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
        )}
      </div>
    </>
  );
}

export default BurgerMenu;
