import { Link } from "react-router-dom";
import Container from "../Container/Container";
import signUpImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {

    const {createUser}=useContext(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    console.log(newUser);

    createUser(email,password)
    .then(result=>{
        const newUser=result.user;
        console.log(newUser)
    })
    .catch(error=>{
        console.log(error)
    })
  };
  return (
    <div>
      <div>
        <Container>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="text-center lg:text-left w-full">
                <img src={signUpImg} alt="" />
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                  <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn text-orange-600 bg-blue-300">
                      Sign Up
                    </button>
                  </div>

                  <p>
                    Are you new here? please{" "}
                    <Link to="/login" className="text-blue-700 font-bold">
                      Login
                    </Link>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
