import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = ({ user }) => {
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateWrapper);
