import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/authedUser"

const authUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      console.log("action.authedUser", action.authedUser);
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
}

export default authUser;
