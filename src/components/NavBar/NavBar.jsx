import { Link } from 'react-router-dom'
import './NavBar.css'
 

const NavBar = () =>{
    return(
<nav className="navbar navbar-expand-lg p-0 ">
  <div className="container-fluid">
    <Link to={'/home'} className="navbar-brand" href="#"><img src={require('../media/logo.png')} className='img_logo' alt='imagenLogo' width="60"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/home/nosotros'} className="nav-link" aria-current="page" href="#">Nosotros</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Shampoo Sólido</Link></li>
            <li><Link className="dropdown-item" href="#">Acondicionador Sólido</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={'/home/preguntas'} className="nav-link" href="#">Preguntas Frecuentes</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar