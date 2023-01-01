
const CarouselHome = ()=>{
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={require("../media/carru1.jpg")} className="d-block w-100" alt="rosas" />
            </div>
            <div class="carousel-item">
              <img src={require("../media/carru3.JPG")} className="d-block w-100" alt="productos" />
            </div>
            <div class="carousel-item">
              <img src={require("../media/carru4.jpg")} className="d-block w-100" alt="entrega" />
            </div>
            <div class="carousel-item">
              <img src={require("../media/carru5.jpg")} className="d-block w-100" alt="shampoo" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> 
        )
}

export default CarouselHome;