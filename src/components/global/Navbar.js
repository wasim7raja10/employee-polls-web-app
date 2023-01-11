import { connect } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { handleLogoutAuthedUser } from "../../actions/authedUser"

const Navbar = ({ dispatch }) => {
  const logoutHandle = () => {
    dispatch(handleLogoutAuthedUser())
    return <Navigate to="/login" />
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">Employee Poll</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/new"}>New Poll</Link></li>
          <li><Link to={"/leaderboard"}>Leaderboard</Link></li>
          <li><button onClick={logoutHandle}>Logout</button></li>
        </ul>
      </div>
    </div>
  )
}

export default connect()(Navbar)