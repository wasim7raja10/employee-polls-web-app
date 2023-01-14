const LOGIN_AUTHED_USER = 'LOGIN_AUTHED_USER'
const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER'

const loginAuthedUser = (authedUser) => {
  return {
    type: LOGIN_AUTHED_USER,
    authedUser,
  }
}

const logoutAuthedUser = () => {
  return {
    type: LOGOUT_AUTHED_USER,
  }
}

const handleLoginAuthedUser = (credential) => {
  return (dispatch, getState) => {
    const { users } = getState()
    const user = Object.values(users).find(user => user.id === credential.username && user.password === credential.password)
    if (!!user) {
      console.log('user', user);
      return dispatch(loginAuthedUser(user))
    } else {
      return false
    }
  }
}

const handleLogoutAuthedUser = () => {
  return (dispatch) => {
    dispatch(logoutAuthedUser())
  }
}

export { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER, loginAuthedUser, logoutAuthedUser, handleLoginAuthedUser, handleLogoutAuthedUser }