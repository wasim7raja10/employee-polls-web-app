import { useState } from "react";
import { connect } from "react-redux";
import PollCard from "../components/home/PollCard";

const Home = ({ answeredPolls, unansweredPolls, users }) => {
  const [showPoll, setShowPoll] = useState(0)
  return (
    <div>
      <h1 className=" text-4xl text-center">Dashboard</h1>
      <div className="tabs grid place-content-center w-full p-10">
        <div>
          <button onClick={
            () => setShowPoll(0)
          } className={`tab tab-bordered ${showPoll === 0 && "tab-active"}`}>Unanswered Poll</button>
          <button onClick={
            () => setShowPoll(1)
          } className={`tab tab-bordered ${showPoll === 1 && "tab-active"}`}>Answered Poll</button>
        </div>
      </div>
      {
        showPoll === 0
          ? <div>
            <h2 className=" text-blue-400 text-2xl underline my-8 text-center">Unanswered Polls</h2>
            <div className=" flex gap-6 flex-wrap justify-around">
              {unansweredPolls.map(poll => {
                return (
                  <PollCard key={poll.id} poll={poll} author={users[poll.author]} />
                );
              })}
            </div>
          </div>
          : <div>
            <h2 className=" text-blue-400 text-2xl underline my-8 text-center">Answered Polls</h2>
            <div className=" flex gap-6 flex-wrap justify-around">
              {answeredPolls.map(poll => {
                return (
                  <PollCard key={poll.id} poll={poll} author={users[poll.author]} />
                );
              })}
            </div>
          </div>
      }

    </div>
  );
};

const mapStateToProps = ({ authUser, questions, users }) => {
  const answeredPolls = Object.values(questions).filter(poll => {
    return poll.optionOne.votes.includes(authUser.id) || poll.optionTwo.votes.includes(authUser.id);
  }).sort((a, b) => b.timestamp - a.timestamp);
  const unansweredPolls = Object.values(questions).filter(poll => {
    return !poll.optionOne.votes.includes(authUser.id) && !poll.optionTwo.votes.includes(authUser.id);
  }).sort((a, b) => b.timestamp - a.timestamp);
  return ({
    answeredPolls,
    unansweredPolls,
    users,
  })
};

export default connect(mapStateToProps)(Home);
