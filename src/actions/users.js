export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

const addUserQuestion = ({ id, author }) => {
  return {
    type: ADD_USER_QUESTION,
    id,
    author,
  };
}

const addUserAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export { addUserQuestion, addUserAnswer, receiveUsers }