import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHome,
  faUser,
  faPrint,
  faQrcode,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";
// import logo from "../../../../image/logo.jpg";
import PrimaryButton from "./buttons/PrimaryButton";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (path: string) => {
    if (path === "logout") {
      setIsModalOpen(true);
    } else {
      setActiveButton(path); // Set the active button
      navigate(`/dashboard/${path}`);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* <img src={logo} alt="Logo" className="sidebar-logo" /> */}
        <h2 className="sidebar-title">BISU Calape Campus</h2>
      </div>
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faTachometerAlt} />
            </span>
            <span className="text">Dashboard</span>
          </>
        }
        handleButtonClick={() => handleButtonClick("")}
        className={`sidebar-button ${activeButton === "" ? "active" : ""}`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="text">Student</span>
          </>
        }
        handleButtonClick={() => handleButtonClick("student")}
        className={`sidebar-button ${
          activeButton === "student" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faQrcode} />
            </span>
            <span className="text">QR Attendance</span>
          </>
        }
        handleButtonClick={() => handleButtonClick("attendance")}
        className={`sidebar-button ${
          activeButton === "attendance" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faQrcode} />
            </span>
            <span className="text">Qr Management</span>
          </>
        }
        handleButtonClick={() => handleButtonClick("qr-management")}
        className={`sidebar-button ${
          activeButton === "qr-management" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="text">Account</span>
          </>
        }
        handleButtonClick={() => handleButtonClick("account")}
        className={`sidebar-button ${
          activeButton === "account" ? "active" : ""
        }`}
      />
    </div>
  );
};

export default Sidebar;
