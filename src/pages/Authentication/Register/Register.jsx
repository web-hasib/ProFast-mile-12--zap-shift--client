import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from './../../../Hooks/useAuth';
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {createUser} = useAuth()
  // console.log(createUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then(res =>{
      console.log(res);
    })
    .catch(err =>{
      console.error(err)
    })
  };
  // console.log(auth);

  return (
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-primary pt-4">
        Create Account !
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
              Register
            </button>
          </fieldset>
        </form>
                    {/* social login here  */}
            <SocialLogin></SocialLogin>

      <span className="text-xs ">Already have an account? <Link className="link-primary link" to='/login'>Login</Link></span>
      </div>
    </div>
  );
};

export default Register;
