import './DescriptionMaguey.css'
const DescriptionMaguey = () => {
    return(
        <div className="row g-0">
            <div className="col-xs-12 col-sm-12 col-lg-6 border izquierda1">
                <h2 className="text-center">
                    Maguey México-Cosmética Sólida
                </h2>
                <p className="text-center">
                  Somos Maguey Cosmética, un pequeño taller de Cosmética Natural Sólida en
                  Puebla, Puebla. Estamos comprometidos con el medio ambiente y creemos en ser
                  respetuosos de nuestro planeta y sus recursos.
                  Buscamos generar conciencia para dejar atrás la cultura de Usar y tirar iniciando
                  desde la rutina de baño con nuestros productos de higiene personal en formato
                  sólido. 
                </p>
            </div>
              <div className="col-xs-12 col-sm-12 col-lg-6 img2">
                <img src={require("../media/fotoros.jpg")} width="100%" alt="rosas" />
            </div>
        </div>
    )
}


export default DescriptionMaguey;