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
    const { authUser } = getState();
    const question = {
      optionOneText: firstOption,
      optionTwoText: secondOption,
      author: authUser,
    };
    const questionResponse = await saveQuestion(question);
    console.log(questionResponse);
    dispatch(addQuestion(questionResponse));
    dispatch(addUserQuestion(questionResponse));
  };
}

const handleAddAnswer = (questionId, answer) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    const answerObject = {
      authedUser: authUser.id,
      qid: questionId,
      answer,
    };
    const isAdded = await saveQuestionAnswer(answerObject);
    if(isAdded) {
      dispatch(addAnswerQuestion(authUser.id, questionId, answer));
      dispatch(addUserAnswer(authUser.id, questionId, answer));
    }
  };
}

export { handleAddQuestion, handleAddAnswer, receiveQuestions };