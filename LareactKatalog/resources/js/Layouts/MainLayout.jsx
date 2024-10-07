import Navbar from "@/Components/Navbar";
import { initFlowbite } from "flowbite";
import React from "react";
import { useEffect } from "react";

const MainLayout = ({ children }) => {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className="bg-white h-screen">
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;
