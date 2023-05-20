import React from "react";
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  // Call flashMessage when needed
  props.flashMessage();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get the data from the form
    let username = event.target.username.value;
    let password = event.target.password.value;
    let stringToEncode = `${username}:${password}`;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${btoa(stringToEncode)}`);
    myHeaders.append("Content-Type", "application/json");

    let response = await fetch(
        "https://zcgamingapi.glitch.me/api/token",
      {
        method: "GET",
        headers: myHeaders,
      }
    );

    if (response.ok) {
      let data = await response.json();
      // Get the token and token expiration from the response
      let token = data.token;
      let expiration = data.token_expiration;

      // Store the value in local storage on the browser
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExp", expiration);

      // flash a success message and redirect back home
      // props.flashMessage("You have successfully logged in", "success");
      props.logUserIn();
      navigate("/home");
    } else {
      // flash a fail message
      props.flashMessage(
        "Your username and/or password are incorrect",
        "danger"
      );
    }
  };

  return (
    <>
                <form className="log1" action="" onSubmit={handleSubmit}>
                  <h1 className="logh1 ">Log In</h1>
                    <div className="form-group">
                        <div className="form-float">
                        <input type="text" className="form-con" placeholder='Enter Username' name='username' />
                        <label className="usernamelog">Username</label>
                        </div>
                        <div className="form-float">
                        <input type="password" className="form-con" placeholder='Enter Password' name='password' />
                        <label className="usernamelog">Password</label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>

                        <input type="submit" value="LOGIN" className="btnn" />
                        <p className="copr">&copy; 2023</p>
                
                    </div>
                </form>
    </>
  );
}