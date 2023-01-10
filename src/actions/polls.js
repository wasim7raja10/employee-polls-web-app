import { saveQuestion, saveQuestionAnswer } from "../data/api";
import { addUserAnswer, addUserQuestion } from "./users";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
}

const addAnswerQuestion = (author, qid, answer) => {
  return {
    type: ADD_ANSWER_QUESTION,
    author,
    qid,
    answer,
  };
}

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

const handleAddQuestion = (firstOption, secondOption) => {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    const question = await saveQuestion(firstOption, secondOption, authedUser);
    dispatch(addQuestion(question));
    dispatch(addUserQuestion(question));
  };
}

const handleAddAnswer = (questionId, answer) => {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    await saveQuestionAnswer(authedUser.id, questionId, answer);
    dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
    dispatch(addUserAnswer(authedUser.id, questionId, answer));
  };
}

export { handleAddQuestion, handleAddAnswer, receiveQuestions };