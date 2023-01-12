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
        <h2 className="card-title">{author.name}</h2>
        <p>date : {date}</p>
          <Link to={`/poll/${poll.id}`} className="">Details</Link>
      </div>
    </div>
  )
}

export default PollCard