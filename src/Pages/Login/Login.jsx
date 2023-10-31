import { useContext } from "react";
import loginphoto from "../../assets/images/login/login.svg";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="md:h-screen h-[80vh] flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </>
    );
  }

  const Navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        Swal.fire({
          icon: "success",
          title: "Log in successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        axios
        .post(
          "http://localhost:4000/jwt",
          { user },
          { withCredentials: true }
        )
        .then((res) => {
          if(res.data.success || location.pathname === "/login"){
              Navigate("/")
          }   else{
            Navigate(location.pathname)
          }
        })
 
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        console.log(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginphoto} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <h1 className="md:text-4xl text-3xl font-bold text-center my-4">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />

                <p className="my-2">
                  Don't have an Account?{" "}
                  <Link
                    to={"/register"}
                    className="font-semibold text-green-800"
                  >
                    Register Now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
