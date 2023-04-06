import React from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const checkLogin = async (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <div className="authentication">
      <div className="authentication-form card px-2 py-2">
        <h1 className="card-title ">Remaind me.....</h1>
        <form onSubmit={handleSubmit(checkLogin)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            ></input>
          </div>
          <div className="mb-3">
            <label>password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            ></input>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Click me to login
            </button>
          </div>
        </form>
        <Link to ='/register'>Click to Register</Link>
      </div>
    </div>
  );
};

export default Login;
