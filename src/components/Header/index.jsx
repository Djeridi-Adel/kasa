import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.png'
import '../../utils/style/header.css'


function Header() {
  return (
    <div className='NavContainer'>
      <Link to="/">
        <img className='HomeLogo' src={Logo} alt='Logo Kasa'/>
      </Link>
      <div className='navBar'>
        <Link to={"/"}>
          <div className='link'>Accueil</div>
        </Link>
        <Link to={"/About"}>
          <div className='link'>À propos</div>
        </Link>
      </div>
    </div>
  )
}

export default Header