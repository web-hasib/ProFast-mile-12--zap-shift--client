import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navg = useNavigate();
  // console.log(location);
  const from = location?.state?.from || '/'
  const {signIn} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email,data.password).then(res=>{

      // console.log(res)
      Swal.fire('login success')
      navg(from)
    }
    )
    .catch(err=>console.log(err))
  };

  return (
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-primary pt-4">
        Login now!
      </h1>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <span className="text-red-400 text-xs">Email Required</span>
            )}

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true, minLength: 6 })}
                className="input w-full pr-10"
                placeholder="*********"
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 z-10" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {errors.password?.type === "required" && (
              <span className="text-red-400 text-xs">Password is Required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-400 text-xs">
                Password should at least 6 char or longer
              </span>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-secondary mt-4">
              Login
            </button>
          </fieldset>
        </form>
            {/* social login here  */}
            <SocialLogin></SocialLogin>

      <span className="text-xs ">dont have an account? <Link className="link-primary link" to='/register'>Register</Link></span>
      </div>
    </div>
  );
};

export default Login;
