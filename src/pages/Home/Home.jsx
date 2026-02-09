import Card from '../../components/Card/Card'
import './home.css'

const issues = [
  { title: 'Streetlight Outage', location: 'Maple Ave • District 4', status: 'Open' },
  { title: 'Water Leak Report', location: 'Riverside Rd • Ward 2', status: 'In Review' },
  { title: 'Broken Sidewalk', location: 'Central Blvd • Zone 9', status: 'Assigned' },
]

function Home() {
  return (
    <section className="page home">
      <div className="home__banner">
        <div>
          <p className="home__banner-title">Urgent city notice</p>
          <p className="home__banner-text">Prioritize safety incidents within 12 hours.</p>
        </div>
        <button type="button" className="home__banner-action">Review</button>
      </div>
      <div className="home__section">
        <div className="home__section-header">
          <h2 className="section-title">Latest reports</h2>
          <button type="button" className="home__link">View all</button>
        </div>
        <div className="home__cards">
          {issues.map((issue) => (
            <Card key={issue.title} {...issue} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
