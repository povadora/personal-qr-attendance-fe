import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoginPage.scss";
// import logo from "./../../../image/final.png";
// import barangayImage from "../../../image/login.jpg";
import { FaUser, FaLock } from "react-icons/fa";
import axiosInstance from "../../utils/AxioInstance";

interface UserData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = (): boolean => {
    if (!userData.username || !userData.password) {
      setValidationError("Username and Password are required");
      return false;
    }
    setValidationError("");
    return true;
  };

  const onClick = async () => {
    if (!validateForm()) return;

    try {
      const response = await axiosInstance.post(
        "http://localhost:3001/accounts/auth-login",
        {
          userName: userData.username,
          password: userData.password,
        }
      );
      console.log("Login successful", response.data);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(
        "Login failed: " + (error.response?.data?.message || "Unknown error")
      );
    }
  };

  useEffect(() => {
    if (location.state && location.state.message) {
      alert(location.state.message);
    }
  }, [location.state]);

  return (
    <div className="login-container">
      <div className="image-section">
        {/* <img src={barangayImage} alt="Barangay" /> */}
      </div>
      <div className="form-section">
        <div className="logo">{/* <img src={logo} alt="Logo" /> */}</div>
        <h1 className="login-title">LOG-IN</h1>
        <form className="log-in-form">
          <div className="input-field">
            <FaUser />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={onClick}>
            LOG-IN
          </button>
        </form>
        {validationError && <p>{validationError}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
