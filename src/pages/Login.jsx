import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.init";

const Login = () => {
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e) =>{
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          console.log(email, password);

          setError('')

          signInWithEmailAndPassword(auth, email, password)
          .then(result=>{
            console.log(result.user)
          })
          .catch(err=>{
            setError(err.message)
          })
          

  }


  const handleShowPassword = (e) =>{
    e.preventDefault()
          setShowPassword(!showPassword)  
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input "
                    name="password"
                    placeholder="Password"
                  />
                  <button
                    className="absolute top-[15px] right-4"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <p className="text-red-500">{error}</p>
                </div>
                <button className="btn btn-neutral mt-4">Log in</button>
                <p>
                  Didn't Have An Account ?{" "}
                  <Link to="/register" className="text-blue-500 underline">
                    Register
                  </Link>
                </p>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
