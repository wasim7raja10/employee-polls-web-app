import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = ({ loggedIn }) => {
  return <div className=" md:mx-10 mx-4">{loggedIn ? <Outlet /> : <Navigate to="/login" />}</div>;
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(PrivateWrapper);
