import './Footer.css'
const Footer = () => {
    return(
        
        <footer class="py-4">
        <div class="row footer ">
          <div class="col-4 col-md-2 mb-3">
            <h5>Ver productos</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="shampoo.html" class="nav-link p-0">Shampoo Sólido</a></li>
              <li class="nav-item mb-2"><a href="acondicionador.html" class="nav-link p-0">Acondicionador Sólido</a></li>
              <li class="nav-item mb-2"><a href="hotoil.html" class="nav-link p-0">Hot Oil</a></li>
              <li class="nav-item mb-2"><a href="manteca.html" class="nav-link p-0">Manteca Corporal Sólida</a></li>
              <li class="nav-item mb-2"><a href="desodorante.html" class="nav-link p-0">Desodorante Sólido</a></li>
            </ul>
          </div>
          <div class="col-4 col-md-2 mb-3">
            <h5>Acerca de nosotros</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="nosotros.html" class="nav-link p-0 ">Acerca de Maguey</a></li>
              <li class="nav-item mb-2"><a href="nosotros.html" class="nav-link p-0 ">Nuestro Compromiso</a></li>
              <li class="nav-item mb-2"><a href="nosotros.html" class="nav-link p-0 ">Misión</a></li>
              <li class="nav-item mb-2"><a href="nosotros.html" class="nav-link p-0 ">Visión</a></li>
            </ul>
          </div>
          <div class="col-4 col-md-2 mb-3">
            <h5>Términos y condiciones</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="usuario.html" class="nav-link p-0 ">Envíos</a></li>
              <li class="nav-item mb-2"><a href="usuario.html" class="nav-link p-0 ">Devoluciones</a></li>
              <li class="nav-item mb-2"><a href="preguntas.html" class="nav-link p-0 ">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div class="col-4 col-md-2 mb-3">
            <h5>Contáctanos</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="https://www.facebook.com/magueycosmetica" class="nav-link p-0" target="_blank">Facebook</a></li>
              <li class="nav-item mb-2"><a href="https://www.instagram.com/magueycosmetica/" class="nav-link p-0" target="_blank">Instagram</a></li>
              <li class="nav-item mb-2"><a href="https://www.whatsapp.com/?lang=es" class="nav-link p-0" target="_blank">Whatsapp</a></li>
            </ul>
          </div>
  
        <div class="d-flex flex-column flex-sm-row justify-content-between  border-top">
          <p>&copy; 2022 Maguey, Todos los derechos reservados.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" href="https://www.facebook.com/magueycosmetica" target="_blank"><img class="faceLogo" src={require('../media/facebook-logo.png')} width="45" alt="fb_logo" /></a></li>
            <li class="ms-3"><a class="link-dark" href="https://www.instagram.com/magueycosmetica/" target="_blank"><img class="instaLogo" src={require('../media/instalogo.png')} width="45" alt="ig_logo" /></a></li>
          </ul>
        </div>
        </div>
      </footer>
    )
}

export default Footer;