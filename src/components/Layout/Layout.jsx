import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import './layout.css'

const pageTitles = {
  '/': 'Home',
  '/explore': 'Explore',
  '/report': 'Report',
  '/track': 'Track',
  '/profile': 'Profile',
}

const profileImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="%23f2f2f2"/><circle cx="60" cy="50" r="26" fill="%23e0e0e0"/><rect x="26" y="82" width="68" height="24" rx="12" fill="%23e0e0e0"/></svg>'

function Layout() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] || 'Issuefy'

  return (
    <div className="app-shell">
      <div className="app-container">
        <Header title={title} profileImage={profileImage} />
        <main className="layout__content">
          <Outlet />
        </main>
        <Navbar />
      </div>
    </div>
  )
}

export default Layout
