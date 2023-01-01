
const ImageHome = () => {
    return (
        <>
      <div className="row g-0 fondo1">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={require("../media/fondo2.jpg")} className="d-block w-100" alt="naturales" />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ImageHome;