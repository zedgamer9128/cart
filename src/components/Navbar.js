import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo"> VIJAY SHANKER CLOTH STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/Cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
