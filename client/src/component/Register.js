import React,{useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const [value, onChange] = useState(new Date());
  const registeruser = async (data) => {
    console.log(data);
  };
  const checkPassword = (confirmPassword) => {
if(watch('password').toLowerCase() != confirmPassword.toLowerCase())
{
  setError("confirmpassword", {
  message:"Password doesnot match"
  });
}
else{
  setError("confirmpassword", {
    message:""
    });
}
  }
  return (
    <div className="authentication">
      <div className="authentication-form card px-2 py-2">
        <h1 className="card-title ">Nice to meet you.....</h1>
        <form onSubmit={handleSubmit(registeruser)}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              {...register("firstName", { required: true })}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">last Name</label>
            <input
              type="text"
              className="form-control"
              {...register("lastName", { required: true })}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <DatePicker onChange={onChange} value={value}
            calendarAriaLabel ={true} 
            maxDate= {new Date()}/>
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
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              {...register("confirmpassword", { required: true })}
              onChange={(e) => checkPassword(e.target.value)}
            ></input>
          </div>
          {console.log(errors,errors?.confirmpassword?.message)}
          {errors?.confirmPassword?.message && console.log(errors,errors?.confirmPassword?.message)}
          <div className="mb-3">
        {errors?.confirmpassword?.message ? errors?.confirmpassword?.message : " " }
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Click me to login
            </button>
           
          </div>
        </form>
        <Link to="/login">Click to login</Link>
      </div>
    </div>
  );
};

export default Register;
