import { Route, Routes } from "react-router-dom";
import PrivateWrapper from "./components/wrapper/PrivateWrapper";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className=" container mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateWrapper user="wasim" />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;