import './card.css'

function Card({ title, location, status }) {
  return (
    <article className="card">
      <div>
        <h3 className="card__title">{title}</h3>
        <p className="card__location">{location}</p>
      </div>
      <span className="card__status">{status}</span>
    </article>
  )
}

export default Card
