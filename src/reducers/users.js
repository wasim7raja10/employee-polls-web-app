import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USERS } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION:
      console.log(action);
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [...state[action.author].questions, action.id]
        },
      };
    case ADD_USER_ANSWER:
      console.log(action);
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;
