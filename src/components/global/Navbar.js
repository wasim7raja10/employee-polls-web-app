import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { handleLogoutAuthedUser } from "../../actions/authedUser"

const Navbar = ({ dispatch, authUser }) => {
  const logoutHandle = () => {
    dispatch(handleLogoutAuthedUser())
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link data-testid="logo" to={"/"} className="btn btn-ghost normal-case text-xl">Employee Poll</Link>
        <h2 data-testid="authUserName" className=" w-full text-center text-xl">{authUser?.name}</h2>
      </div>
      <div className="flex-none">
        <ul data-testid="navbuttons" className="menu menu-horizontal px-1">
          <li><Link data-testid="home-link" to={"/"}>Home</Link></li>
          <li><Link data-testid="new-poll-link" to={"/add"}>New Poll</Link></li>
          <li><Link data-testid="leaderboard-link" to={"/leaderboard"}>Leaderboard</Link></li>
          {authUser ? <li><button data-testid="logout-link" onClick={logoutHandle}>Logout</button></li>
            : <li><Link data-testid="login-link" to={"/login"}>Login</Link></li>}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = ({ authUser }) => ({
  authUser,
})

export default connect(mapStateToProps)(Navbar)