import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../store/store";

const PrivateRoute = ({ children, isAuth }) => {
  const location = useLocation();
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  

  return children;
};

export default PrivateRoute;