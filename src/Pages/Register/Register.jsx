import loginphoto from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
       }
    

  return (
<div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">

<img src={loginphoto} alt="" />


    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleRegister}>
      <h1 className="md:text-4xl text-3xl font-bold text-center my-4">Register now!</h1>
        <div className="form-control my-2">
          <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="URL" placeholder="Your Photo URL" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control my-2">
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />

          <p className='my-2'>Already have an Account? Please <Link to={'/login'} className='font-semibold text-green-800'>Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  )
}

export default Register
