import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/polls";

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate()
  const [options, setOptions] = useState({
    firstOption: '',
    secondOption: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (options.firstOption === '' || options.secondOption === '') {
      alert("Please enter both options");
      return;
    }
    dispatch(handleAddQuestion(options.firstOption, options.secondOption));
    navigate("/")
  }
  return (
    <div>
      <h1 className=" text-4xl text-center">New Poll</h1>
      <form onSubmit={handleSubmit} className="">
        <div className=" flex flex-col">
          <label data-testid="firstOptionLabel" className=" text-xl py-4" htmlFor="firstOption">First Option</label>
          <input
            value={options.firstOption}
            onChange={(e) => setOptions({ ...options, firstOption: e.target.value })}
            type="text"
            name="firstOption"
            id="firstOption"
            data-testid="firstOption"
            className="input w-full border-2 border-slate-500"
          />
        </div>

        <div className=" flex flex-col">
          <label data-testid="secondOptionLabel" className=" text-xl py-4" htmlFor="secondOption">Second Option</label>
          <input
            value={options.secondOption}
            onChange={(e) => setOptions({ ...options, secondOption: e.target.value })}
            type="text"
            name="secondOption"
            id="secondOption"
            data-testid="secondOption"
            className="input w-full border-2 border-slate-500" />
        </div>

        <button type="submit"
          data-testid="submit-poll"
          className="btn mt-6">
          Add Poll
        </button>
      </form>
    </div>
  )
}

export default connect()(NewPoll);
