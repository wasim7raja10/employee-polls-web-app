export const LOGIN_AUTHED_USER = 'LOGIN_AUTHED_USER'
export const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER'

const loginAuthedUser = (id) => {
  return {
    type: LOGIN_AUTHED_USER,
    id,
  }
}

const logoutAuthedUser = () => {
  return {
    type: LOGOUT_AUTHED_USER,
  }
}

const handleLoginAuthedUser = (credentials) => {
  return (dispatch, getState) => {
    const { users } = getState()
    const user = Object.values(users).find((user) => user.id === credentials.username &&
      user.password === credentials.password)
    if (user) {
      dispatch(loginAuthedUser(user.id))
    }
  }
}

const handleLogoutAuthedUser = () => {
  return (dispatch) => {
    dispatch(logoutAuthedUser())
  }
}

export { loginAuthedUser, logoutAuthedUser, handleLoginAuthedUser, handleLogoutAuthedUser }