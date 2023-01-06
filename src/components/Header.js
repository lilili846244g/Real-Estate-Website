import React from "react";

//impor link
import { Link } from "react-router-dom";
//impor logo
import Logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/*  logo  */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/*  button */}
        <div className="flex item-center gap-6">
          <Link className="hover:text-violet-900 px-4 py-2 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
