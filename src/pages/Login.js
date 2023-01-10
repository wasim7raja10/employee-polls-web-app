const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  }
  return (
    <div className=" flex justify-center flex-col items-center gap-6">
      <h1 className=" text-blue-400 text-4xl p-8 text-center">Login</h1>
      {/* Login Form with username and password */}
      <form onSubmit={handleSubmit} className=" form-control w-full max-w-xs space-y-6">
        <div className=" space-y-2">
          <label htmlFor="username">Username</label>
          <input className="input input-bordered w-full max-w-xs" type="text" id="username" name="username" />
        </div>

        <div className=" space-y-2">
          <label htmlFor="password">Password</label>
          <input className="input input-bordered w-full max-w-xs" type="password" id="password" name="password" />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;