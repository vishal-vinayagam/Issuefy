import './explore.css'

const categories = ['Roads', 'Lighting', 'Water', 'Waste', 'Parks', 'Safety']

function Explore() {
  return (
    <section className="page explore">
      <div className="explore__search">
        <input type="text" placeholder="Search issues or districts" />
        <button type="button">Search</button>
      </div>
      <div className="explore__section">
        <h2 className="section-title">Categories</h2>
        <div className="explore__grid">
          {categories.map((category) => (
            <button key={category} type="button" className="explore__card">
              <span>{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore
