import { Route, Routes } from "react-router-dom";
import PrivateWrapper from "./components/wrapper/PrivateWrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className=" container mx-auto">
      <Routes element={<PrivateWrapper />}>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;