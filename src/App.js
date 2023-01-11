import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { receiveInitialData } from "./actions/initialData";
import PrivateWrapper from "./components/wrapper/PrivateWrapper";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Poll from "./pages/Poll";

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
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/poll/:id" element={<Poll/>} />
        </Route>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
