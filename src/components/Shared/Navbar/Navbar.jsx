import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
    })
    .catch(error=>{
      console.log(error)
    })

  }
  const navInfo = (
    <>
    <Link to="/" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors mr-2">Home</Link>
    <Link to="/about" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors mr-2">About</Link>
    <Link to="/service" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors mr-2">Service</Link>
    <Link to="/blog" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors mr-2">Blog</Link>
    <Link to="/contact" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors mr-2">Contact</Link>
    {
    user?.email? 
    <>
    <Link to="/bookings" className="text-white text-lg font-semibold hover:text-blue-400 transition-colors mr-2">My Bookings</Link>
    <Link to="/" className="bg-red-500 text-white text-lg px-4 py-2 rounded-md hover:bg-red-600 transition-all mr-2"><button onClick={handleLogOut}>Log Out</button></Link>
    </>
    :
      <Link to="/login" className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600 transition-all mr-2">Login</Link>
      
    }


    </>
  );
  return (
    <div className="bg-blue-300">
      <Container>
        <div className="navbar bg-blue-300">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
          {/* <div className="navbar-end">
       <NavLink to="/login"> <a className="btn btn-sm text-orange-700">Login</a></NavLink>
      </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
