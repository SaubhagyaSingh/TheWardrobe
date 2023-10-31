import React, { useState } from "react";
import "./login.css";

const Login = () => {
  // State variables for form fields and validation messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else if (/[@#$%^&*!]/.test(username)) {
      setUsernameError("Username cant contain any special character");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (password.trim().length < 10) setPasswordError("Minimum Length is 8 characters.Please Recheck Your password");

    if (isValid) {
      // Perform your authentication or form submission logic here
      // For example, you can make an API request to authenticate the user
      console.log(
        "Form submitted with username:",
        username,
        "and password:",
        password
      );
    }
  };

  return (
    <div>
      {/* ... Existing JSX code ... */}

      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <span className="error">{usernameError}</span>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="error">{passwordError}</span>

        <button type="submit">Log In</button>
        {/* ... Social login options ... */}
      </form>
    </div>
  );
};

export default Login;
