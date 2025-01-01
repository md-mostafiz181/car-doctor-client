import Container from "../Container/Container";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
  const {signIn}=useContext(AuthContext)


    const handleLogin=e=>{
        e.preventDefault()
        const form =e.target;
        const email = form.email.value;
        const password=form.password.value;
        const user = {email,password}
        console.log(user)

        signIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  return (
    <div>
      <Container>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-full">
              <img src={loginImg} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-2xl font-bold text-center">Login</h1>
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
                    Login
                  </button>
                </div>

                <p>Are you new here? please <Link to='/singUp' className="text-blue-700 font-bold">Sign Up</Link> </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
