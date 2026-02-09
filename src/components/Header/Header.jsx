import './header.css'

function Header({ title, profileImage }) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__profile">
        <img src={profileImage} alt="Profile" />
      </div>
    </header>
  )
}

export default Header
