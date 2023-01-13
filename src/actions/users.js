export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

const addUserQuestion = ({ author, id }) => {
  return {
    type: ADD_USER_QUESTION,
    author,
    id
  };
}

const addUserAnswer = ({ authUser, qid, answer }) => {
  return {
    type: ADD_USER_ANSWER,
    authUser,
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