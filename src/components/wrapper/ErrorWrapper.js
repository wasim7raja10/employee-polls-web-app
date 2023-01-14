import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ErrorWrapper = ({ loggedIn }) => {
  return <div className=" md:mx-10 mx-4">
    {loggedIn 
      ? <Outlet /> 
      : <Navigate to={`/error`}
    />}
  </div>;
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(ErrorWrapper);
