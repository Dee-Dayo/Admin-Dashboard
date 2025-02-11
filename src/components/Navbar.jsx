import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuth }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-xl font-bold md:ml-0 ml-14 md:text-2xl">Admin Panel</h1>

        {/* Right-side buttons (Login/Register or Logout) */}
        <div className="flex items-center gap-4">
          {!isAuth ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 md:px-4 md:py-2"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 md:px-4 md:py-2"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 md:px-4 md:py-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
