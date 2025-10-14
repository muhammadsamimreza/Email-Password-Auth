import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPAssword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms =e.target.terms.checked;
    console.log(email, password, terms);
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      console.log("pass no matched");
      return;
    }
    setError("");
    setSuccess(false);
    if(!terms){
      setError("Please checked Our Terms And Conditons")
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("New user", result.user);
        setSuccess(true);
        e.target.reset()
        sendEmailVerification(result.user)
        .then(()=>{
          alert("Verify your Email")
        })
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPAssword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister}>
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
                  <p className="text-green-500">
                    {success && "Successfully Created"}
                  </p>
                </div>
                <div>
                  <label className="label">
                    <input
                    name="terms"
                      type="checkbox"
                      defaultChecked
                      className="checkbox text-black"
                    />
                    Accept Our Term And Condition
                  </label>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
          <p>Already  Have An Account ? <Link to='/login' className="text-blue-500 underline">Lon in</Link></p>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
