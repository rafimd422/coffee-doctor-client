import { useContext } from 'react';
import loginphoto from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {

const {signIn} = useContext(AuthContext)

   const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
signIn(email,password)
.then(result => {
  console.log(result.user)
}).catch(error = cosole.log(error.message))

  }

  return (
<div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">

<img src={loginphoto} alt="" />


    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
      <h1 className="md:text-4xl text-3xl font-bold text-center my-4">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />

          <p className='my-2'>Don't have an Account? <Link to={'/register'} className='font-semibold text-green-800'>Register Now</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
