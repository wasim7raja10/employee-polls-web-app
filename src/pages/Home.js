import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      <h2 className=" text-blue-400 text-2xl">Unanswered Polls</h2>
      <div>
        {unansweredPolls.map(poll => {
          return (
            <div key={poll.id}>
              <h3>{poll.question}</h3>
              <p>Created by: {users[poll.author].name}</p>
              <Link to={`/poll/${poll.id}`}>View Poll</Link>
            </div>
          );
        })}
      </div>
      <h2 className=" text-blue-400 text-2xl">Answered Polls</h2>
      <div>
        {answeredPolls.map(poll => {
          return (
            <div key={poll.id}>
              <h3>{poll.question}</h3>
              <p>Created by: {users[poll.author].name}</p>
              <Link to={`/poll/${poll.id}`}>View Poll</Link>
            </div>
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
