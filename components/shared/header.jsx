"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import CartButton from "./cartButton";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="z-40 fixed right-0 h-screen flex justify-center top-80">
        <CartButton
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Header;
