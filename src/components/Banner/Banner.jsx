import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide4" className="btn btn-circle bg-blue-300 mr-2">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-blue-300">
              ❯
            </a>
          </div>

          
        </div>

        
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide1" className="btn btn-circle bg-blue-300 mr-2">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-blue-300">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide2" className="btn btn-circle bg-blue-300 mr-2">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-blue-300">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full h-[600px]" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide3" className="btn btn-circle bg-blue-300 mr-2">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle bg-blue-300 ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner5} className="w-full h-[600px]" />
          <div className="absolute  left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end ">
            <a href="#slide4" className="btn btn-circle bg-blue-300 mr-2">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-blue-300">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
