import { connect } from "react-redux";
import PollCard from "../components/home/PollCard";

const Home = ({ answeredPolls, unansweredPolls, users }) => {
  
  return (
    <div>
      <h1 className=" text-4xl text-center">Dashboard</h1>
      <h2 className=" text-blue-400 text-2xl underline my-8 text-center">Unanswered Polls</h2>
      <div className=" flex gap-6 flex-wrap justify-around">
        {unansweredPolls.map(poll => {
          return (
            <PollCard key={poll.id} poll={poll} author={users[poll.author]} />
          );
        })}
      </div>
      <h2 className=" text-blue-400 text-2xl underline my-8 text-center">Answered Polls</h2>
      <div className=" flex gap-6 flex-wrap justify-around">
        {answeredPolls.map(poll => {
          return (
            <PollCard key={poll.id} poll={poll} author={users[poll.author]} />
          );
        })}
      </div>
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
