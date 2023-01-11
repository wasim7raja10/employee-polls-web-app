import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleLoginAuthedUser } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(handleLoginAuthedUser({ username, password }));
  };

  if (loggedIn) {
    console.log("logged in");
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  return (
    <div className=" flex justify-center flex-col items-center gap-6">
      <h1 className=" text-blue-400 text-4xl p-8 text-center">Login</h1>
      {/* Login Form with username and password */}
      <form onSubmit={handleSubmit} className=" form-control w-full max-w-xs space-y-6">
        <div className=" space-y-2">
          <label htmlFor="username">Username</label>
          <input readOnly value={"tylermcginnis"} className="input input-bordered w-full max-w-xs" type="text" id="username" name="username" />
        </div>

        <div className=" space-y-2">
          <label htmlFor="password">Password</label>
          <input readOnly value={"abc321"} className="input input-bordered w-full max-w-xs" type="password" id="password" name="password" />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
