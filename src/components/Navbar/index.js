import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "../SideBarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import philFIDAimage from "../../assets/philfida.png";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    {/* <Link to="#" className="menu-bars">
                        <FaIcons.FaBars
                            style={{
                                color: "black",
                                height: "50px",
                                width: "50px",
                            }}
                        />
                    </Link> */}
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
                        {/* <li className="navbar-toggle">
                            <Link to="#" className="menu-bars-x">
                                <AiIcons.AiOutlineClose
                                    style={{
                                        color: "black",
                                        height: "15px",
                                        width: "15px",
                                    }}
                                />
                            </Link>
                        </li> */}
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
