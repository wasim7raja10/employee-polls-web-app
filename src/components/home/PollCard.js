import { Link } from "react-router-dom"

const PollCard = ({ poll, author }) => {
  const date = new Date(poll.timestamp).toLocaleDateString()
  return (
    <div className=" flex gap-5 shadow-xl w-80">
      <figure className=" w-28 h-28 border-slate-50 object-cover">
        {author.avatarURL ? <img src={author.avatarURL} alt="avatar" /> : <img src="https://via.placeholder.com/150" alt="avatar" />
          }
      </figure>
      <div className="pr-4 pt-2">
        <h2 className="">{author.name}</h2>
        <p className=" py-2">date : {date}</p>
        <Link to={`/poll/${poll.id}`} className=" p-2 bg-blue-500 text-white mt-2 rounded-md">Details</Link>
      </div>
    </div>
  )
}

export default PollCard