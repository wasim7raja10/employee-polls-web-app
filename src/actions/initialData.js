import { getInitialData } from "../data/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./polls";

const receiveInitialData = () => {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}

export { receiveInitialData };
