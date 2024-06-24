import { useState } from "react";
import "../assets/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setError("Enter your Username and Password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        localStorage.setItem("username", username);
        window.location.href="/";
      } else {
        setError("Invalid Username or Password");
      }
    } else {
      const userExist = users.some((user) => user.username === username);
      if (userExist) {
        setError("Username already taken");
      } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        setError("Registration successful. Please Log in");
        setIsLogin(true);
      }
    }
  };

  const setIsLoginHandler = (newstate) => {
    setIsLogin(newstate);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="LoginPage">
      <form className="logincontent" id="loginForm" onSubmit={handleSubmit}>
        <h1>
          {isLogin ? "Log in to start your own list!" : "Register Here!"}
          {error && <p className="error">{error}</p>}
        </h1>
        <div className="logininput">
          <div className="submitinput">
            <div className="userpass">
              <div className="user">
                <input
                  id="userInput"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="pass">
                <input
                  id="passInput"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="submitlogin" />
            <button id="inputSubmit" type="submit">
              {isLogin ? "Log in!" : "Register!"}
            </button>
          </div>
          <p>
            {isLogin ? "First time here? " : "Already have an account? "}
            <br />
            <a id="regRef" onClick={() => setIsLoginHandler(!isLogin)}>
              {isLogin ? "Register Here" : "Log in Here"}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
