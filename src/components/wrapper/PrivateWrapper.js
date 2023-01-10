import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = ({ user }) => {
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateWrapper;