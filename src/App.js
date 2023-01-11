import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { receiveInitialData } from "./actions/initialData";
import PrivateWrapper from "./components/wrapper/PrivateWrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = ({dispatch, loggedIn}) => {
  useEffect(() => {
    dispatch(receiveInitialData())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className=" container mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateWrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
