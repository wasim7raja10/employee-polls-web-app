import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/polls";

const Poll = ({ authUser, users, questions, dispatch }) => {
  // get the poll id from the url
  const { id } = useParams();
  const authorName = users[questions[id].author].name;
  const authUserAnswer = users[authUser.id].answers[id];
  const [answer, setAnswer] = useState(authUserAnswer);
  const initialVoteCount = {
    optionOne: questions[id].optionOne.votes.length,
    optionTwo: questions[id].optionTwo.votes.length,
  };
  const [voteCount, setVoteCount] = useState(initialVoteCount);
  return (
    <div>
      <h1 className=" text-center text-2xl font-extrabold">Poll by {authorName}</h1>
      {
        users[questions[id].author].avatarURL
          ? <img
            src={users[questions[id].author].avatarURL}
            alt="avatar"
            className="rounded-full w-20 h-20 mx-auto" />
          : <div className="rounded-full w-20 h-20 mx-auto bg-gray-400 grid place-content-center">
            <span className="text-2xl font-extrabold text-center">{authorName[0]}</span>
          </div>
      }
      <div className="mt-12 flex flex-col gap-6">
        <h2 className=" text-center text-2xl font-extrabold">Would you rather</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              if (answer) return;
              dispatch(handleAddAnswer(id, "optionOne"))
              setAnswer("optionOne");
              setVoteCount((prev) => ({ ...prev, optionOne: prev.optionOne + 1 }));
            }}
            className={`btn btn-lg btn-outline flex  flex-col gap-4 ${answer === 'optionOne' && "bg-green-400"}`}
          >
            <span>{questions[id].optionOne.text}</span>
            {authUserAnswer && <span>
              votes: {voteCount.optionOne} {" "}
              ({((voteCount.optionOne / (voteCount.optionOne + voteCount.optionTwo)) * 100).toFixed(2)} %)
            </span>}
          </button>
          <button
            onClick={() => {
              if (answer) return;
              dispatch(handleAddAnswer(id, "optionTwo"))
              setAnswer("optionTwo");
              setVoteCount((prev) => ({ ...prev, optionTwo: prev.optionTwo + 1 }));
            }}
            className={`btn btn-lg btn-outline flex  flex-col gap-4 ${answer === 'optionTwo' && "bg-green-400"}`}
          >
            <span>{questions[id].optionOne.text}</span>
            {authUserAnswer && <span>
              votes: {voteCount.optionTwo} {" "}
              ({((voteCount.optionTwo / (voteCount.optionOne + voteCount.optionTwo)) * 100).toFixed(2)} %)
            </span>}
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ authUser, users, questions }) => {
  return {
    authUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Poll);