import React from "react";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navigate = useNavigate();

  // Call flashMessage when needed
  props.flashMessage();

  const handleRegister = (event) => {
    event.preventDefault();
    let password = event.target.password.value;
    let confirmPass = event.target.confirmPass.value;
    if (password !== confirmPass) {
      props.flashMessage("Passwords do not match", "danger");
    } else {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let formData = JSON.stringify({
        username: event.target.username.value,
        email: event.target.email.value,
        password,
      });
      fetch("https://zcgapi.glitch.me/auth/users", {
        method: "POST",
        headers: myHeaders,
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            props.flashMessage(data.error, "danger");
          } else {
            console.log(data);
            // props.flashMessage(`${data.username} has been created`, "success");
            navigate("/login");
          }
        });
    }
  };

  return (
    <>
      
        <form className="log"action="" onSubmit={handleRegister}>
          <h1 className="logh1"> Sign Up</h1>
          <div className="form-group">
            <div className="form-float">
              <input
                type="text"
                className="form-con"
                placeholder="Enter Email"
                name="email"
              />
              <label className="usernamelog">Email address</label>
            </div>
            <div className="form-float">
              <input
                type="text"
                className="form-con"
                placeholder="Enter Username"
                name="username"
              />
              <label className="usernamelog">Username</label>
            </div>
            <div className="form-float">
              <input
                type="password"
                className="form-con"
                placeholder="Enter Password"
                name="password"
              />
              <label className="usernamelog">Password</label>
            </div>
            <div className="form-float">
              <input
                type="password"
                className="form-con"
                placeholder="Confirm Password"
                name="confirmPass"
              />
              <label className="usernamelog"> Confirm Password</label>
            </div>

            <input
              type="submit"
              value="SIGN UP"
              className="btnn"
            />
          </div>
          <p className="copr">
            &copy; 2023
          </p>
        </form>
    </>
  );
}