import Card from '../../components/Card/Card'
import './profile.css'

const reports = [
  { title: 'Graffiti Cleanup', location: 'East Market • Zone 5', status: 'Closed' },
  { title: 'Storm Drain Blocked', location: 'Hillcrest • Ward 3', status: 'Open' },
]

function Profile() {
  return (
    <section className="page profile">
      <div className="profile__header">
        <div className="profile__avatar">IS</div>
        <div>
          <h2 className="section-title">Isabella Stone</h2>
          <p className="profile__role">Community Reporter</p>
        </div>
      </div>
      <div className="profile__toggle">
        <div>
          <h3>Privacy mode</h3>
          <p>Hide personal information on public reports.</p>
        </div>
        <button type="button" className="profile__switch">On</button>
      </div>
      <div className="profile__reports">
        <h2 className="section-title">My reports</h2>
        <div className="profile__list">
          {reports.map((report) => (
            <Card key={report.title} {...report} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profile
