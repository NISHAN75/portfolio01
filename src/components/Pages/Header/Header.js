import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="">
                  About me
                </Link>
              </li>
              <li>
                <Link to="/blog" className="">
                  blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="">
                  My projects
                </Link>
              </li>
              <li>
                <Link to="contact" className="">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Link to="/">
              <img
                src="https://images.vexels.com/media/users/3/142336/isolated/preview/bff1bf07bd10a618c15585bad3a73220-letterhead-red-neon-text-n.png?fmt=webp&h=250" className="w-16"
                alt="logo"
              />
              
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About me
              </Link>
            </li>
            <li>
              <Link to="/blog" className="">
                blogs
              </Link>
            </li>
            
            <li>
              <Link to="/project" className="">
               My Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
