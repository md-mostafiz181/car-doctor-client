import { Link } from "react-router-dom";
import Container from "../../Container/Container";

const Navbar = () => {
  const navInfo = (
    <>
      <Link to="/">
        {" "}
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/about">
        {" "}
        <li>
          <a>About</a>
        </li>
      </Link>
      <Link to="/service">
        {" "}
        <li>
          <a>Service</a>
        </li>
      </Link>
      <Link to="/blog">
        {" "}
        <li>
          <a>Blog</a>
        </li>
      </Link>
      <Link to="/contact">
        {" "}
        <li>
          <a>Contact</a>
        </li>
      </Link>
    </>
  );
  return (
   <div className="bg-blue-300">
     <Container>
        <div className="navbar bg-blue-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navInfo}
          </ul>
        </div>
        <a className=" text-xl">Car Doctor</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm text-orange-700">Appointment</a>
      </div>
    </div>
    </Container>
   </div>
  );
};

export default Navbar;
