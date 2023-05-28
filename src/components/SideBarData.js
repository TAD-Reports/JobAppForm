import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Applicants",
        path: "/job-applicants",
        icon: <FaIcons.FaUserTie />,
        cName: "nav-text",
    },
    {
        title: "Positions Library",
        path: "/job-positions",
        icon: <BiIcons.BiLibrary />,
        cName: "nav-text",
    },
    {
        title: "Landing Page",
        path: "/landing-page",
        icon: <BiIcons.BiLibrary />,
        cName: "nav-text",
    },
];
