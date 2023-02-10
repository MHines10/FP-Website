import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarStyle.css";
import { ToggleContainer } from "../App";

export default function Navbar(props) {
  const { themeSwitch, setThemeSwtich } = useContext(ToggleContainer);

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          {props.loggedIn ? (
            <>
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/category">
                Category
              </Link>
              <Link className="nav-link" to="/updateinfo">
                UpdateUserInfo
              </Link>
              <Link className="nav-link" to="/" onClick={props.logUserOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </>
          )}

          <form action="" className="row">
            <div className="End">
              <div
                className="Toggle-Container"
                onClick={() => setThemeSwtich(!themeSwitch)}
              >
                <div
                  className={
                    themeSwitch ? "Toggle-Switcher-Moved" : "Toggle-Switcher"
                  }
                ></div>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}
