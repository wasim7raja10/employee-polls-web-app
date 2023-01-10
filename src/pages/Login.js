const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      {/* Login Form with username and password */}
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />


        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;