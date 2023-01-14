import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleLoginAuthedUser } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: "tylermcginnis",
    password: "abc321",
  });
  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLoginAuthedUser(credentials));
  }; 

  const handleLogin = (username, password) => {
    dispatch(handleLoginAuthedUser({ username, password }));
  };

  return (
    <div className=" flex justify-center flex-col items-center gap-6">
      <h1 className=" text-blue-400 text-4xl p-8 text-center">Login</h1>
      <div className="dropdown">
        <label data-testid="existing-user-label" tabIndex="0" className="btn m-1">Existing User</label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li onClick={() => {
            handleLogin("sarahedo", "password123")
          }}><span>Sarah Edo</span></li>
          <li onClick={() => {
           handleLogin("tylermcginnis", "abc321")
          }}><span>Tyler McGinnis</span></li>
          <li onClick={() => {
            handleLogin("mtsamis", "xyz123")
          }}><span>Mike Tsamis</span></li>
          <li onClick={() => {
           handleLogin("zoshikanlu", "pass246")
          }}><span>Zenobia Oshikanlu</span></li>
        </ul>
      </div>
      {/* Login Form with username and password */}
      <form onSubmit={handleSubmit} className=" form-control w-full max-w-xs space-y-6">
        <div className=" space-y-2">
          <label data-testid="username-label" htmlFor="username">Username</label>
          <input data-testid="username-input" onChange={
            (e) => setCredentials({
              ...credentials,
              username: e.target.value
            })
          } value={credentials.username} className="input input-bordered w-full max-w-xs" type="text" id="username" name="username" />
        </div>

        <div className=" space-y-2">
          <label data-testid="password-label" htmlFor="password">Password</label>
          <input data-testid="password-input" onChange={
            (e) => setCredentials({
              ...credentials,
              password: e.target.value
            })
          } value={credentials.password} className="input input-bordered w-full max-w-xs" type="password" id="password" name="password" />
        </div>
        <button data-testid="submit-login" className="btn">Login</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  return {
    loggedIn: !!authUser,
  };
}

export default connect(mapStateToProps)(Login);
