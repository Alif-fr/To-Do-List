import React from "react";
import { Link } from "react-router-dom";

const Login = ({ username, setUsername }) => {
  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <div id="login">
      <h3 id="loginname">
        {username ? `Hi, ${username}!` : `Hi... Who are you again?`}
      </h3>
      {username ? (
        <p>
          <Link to="/login" id="logref" onClick={handleLogout}>
            Not you?
          </Link>
          <span id="loginlogout"> We will miss you :(</span>
        </p>
      ) : (
        <p>
          <Link to="/login" id="logref">
            Click Here
          </Link>
          <span id="loginlogout"> to login so we could remember you!</span>
        </p>
      )}
    </div>
  );
};

export default Login;
