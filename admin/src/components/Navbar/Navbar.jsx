import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({ onMenuClick, isMenuOpen }) => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <button className="menu-toggle" onClick={onMenuClick} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className="navbar-brand">
          <h1 className="brand-name">Tomato.</h1>
          <p className="admin-panel-text">Admin Panel</p>
        </div>
      </div>
      <img className='profile' src={assets.profile_image} alt="Profile" />
    </div>
  )
}

export default Navbar
