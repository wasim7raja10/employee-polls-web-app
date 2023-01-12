import { connect } from "react-redux";
import PollCard from "../components/home/PollCard";

const Home = ({ authUser, polls, users }) => {
  const answeredPolls = polls.filter(poll => {
    return poll.optionOne.votes.includes(authUser.id) || poll.optionTwo.votes.includes(authUser.id);
  });
  const unansweredPolls = polls.filter(poll => {
    return !poll.optionOne.votes.includes(authUser.id) && !poll.optionTwo.votes.includes(authUser.id);
  });
  return (
    <div>
      <h1 className=" text-4xl text-center">Dashboard</h1>
      <h2 className=" text-blue-400 text-2xl underline my-8 text-center">Unanswered Polls</h2>
      <div className=" flex gap-6 flex-wrap">
        {unansweredPolls.map(poll => {
          return (
            <PollCard key={poll.id} poll={poll} author={users[poll.author]} />
          );
        })}
      </div>
      <h2 className=" text-blue-400 text-2xl underline my-8 text-center">Answered Polls</h2>
      <div className=" flex ">
        {answeredPolls.map(poll => {
          return (
            <PollCard key={poll.id} poll={poll} author={users[poll.author]} />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({authUser, questions, users}) => ({
  authUser,
  polls: Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
  ),
  users,
});

export default connect(mapStateToProps)(Home);
