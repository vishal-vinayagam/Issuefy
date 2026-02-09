import { NavLink } from 'react-router-dom'
import './navbar.css'

const navItems = [
  { to: '/', label: 'Home', icon: 'H' },
  { to: '/explore', label: 'Explore', icon: 'E' },
  { to: '/report', label: 'Report', icon: '+' , primary: true },
  { to: '/track', label: 'Track', icon: 'T' },
  { to: '/profile', label: 'Profile', icon: 'P' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navItems.map((item) => (
          <li key={item.to} className={item.primary ? 'navbar__item navbar__item--primary' : 'navbar__item'}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                [
                  'navbar__link',
                  item.primary ? 'navbar__link--primary' : '',
                  isActive ? 'navbar__link--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              <span className="navbar__icon">{item.icon}</span>
              <span className="navbar__label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
