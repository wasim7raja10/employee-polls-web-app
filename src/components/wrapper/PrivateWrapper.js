import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = ({ loggedIn }) => {
  return <>{loggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(PrivateWrapper);
