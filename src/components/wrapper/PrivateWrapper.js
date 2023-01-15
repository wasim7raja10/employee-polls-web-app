import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login";

const PrivateWrapper = ({ loggedIn }) => {
  return <div className=" md:mx-10 mx-4">
    {loggedIn
      ? <Outlet />
      : <Login />
    }
  </div>;
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(PrivateWrapper);
