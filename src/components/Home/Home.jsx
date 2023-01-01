import ImageHome from "../ImageHome/ImageHome";
import DescriptionMaguey from "../DescriptionMaguey/DescriptionMaguey";
import CarouselHome from "../CarouselHome/CarouselHome";
const Home = () =>{
    return(
        <>
        <div className="fondoHome">
            <ImageHome />
        </div>

        <div className="description">
            <DescriptionMaguey />
        </div>

        <div className="carousel">
            <CarouselHome />
        </div>
        </>
    )
}

export default Home;