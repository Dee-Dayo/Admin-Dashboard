import React from "react";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Register from "./pages/Auth/Register/Register.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Dashboard from "./features/dashboard/Dashboard.jsx";
import Admin from "./features/admin/admin.jsx";
import SettingsPage from "./features/dashboard/SettingsPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";



const App = () => {
  const location = useLocation();
  const excludePaths = ["/register", "/login"];
  const isAuth = localStorage.getItem("token");
  console.log(isAuth);

  return (
    <div className="flex">
      {!excludePaths.includes(location.pathname) && <Sidebar />}
      <div className="flex-1">
        <Navbar isAuth={isAuth} />
        <div className="p-6">

          <Routes>
            <Route path="/" element={isAuth ? <Dashboard /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
          </Routes>
        
        </div>
      </div>
    </div>
  );
};

export default App;
