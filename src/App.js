import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { receiveInitialData } from "./actions/initialData";
import Navbar from "./components/global/Navbar";
import PrivateWrapper from "./components/wrapper/PrivateWrapper";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import NewPoll from "./pages/NewPoll";
import Poll from "./pages/Poll";

const App = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(receiveInitialData())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className=" container mx-auto">
      {loggedIn && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/questions/:id" element={<Poll />} />
          <Route path="/add" element={<NewPoll />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(App);
