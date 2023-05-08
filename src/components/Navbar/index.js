import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "../SideBarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import philFIDAimage from "../../assets/philfida.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import userLogo from "../../assets/userlogo.png";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <div className="logo-container">
                        <img
                            src={philFIDAimage}
                            alt="philFIDAlogo"
                            style={{
                                height: "90px",
                                width: "90px",
                            }}
                        />
                        <p className="logo-text">
                            PHILIPPINE FIBER INDUSTRY DEVELOPMENT AUTHORITY
                        </p>
                        <p className="logo-text-2">HUMAN RESOURCE MANAGEMENT</p>
                    </div>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <div
                            className="user-icon"
                            sx={{ textAlign: "center", marginBottom: "200px" }}
                        >
                            <img
                                src={userLogo}
                                alt="userlogo"
                                style={{ height: "80px", width: "80px" }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: "Poppins,sans-serif",
                                    color: "#fff",
                                }}
                            >
                                Salem, Mark Joseph V.
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Poppins,sans-serif",
                                    color: "#fff",
                                    fontSize: "11px",
                                }}
                            >
                                AUTHORIZED PERSONNEL
                            </Typography>
                        </div>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
