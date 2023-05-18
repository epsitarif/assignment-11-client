import img1 from '../../../assets/images/banner/banner1.jpg'
import img2 from '../../../assets/images/banner/banner2.jpg'
import img3 from '../../../assets/images/banner/banner3.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full flex justify-between transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className='text-white space-y-6 pl-12 ml-10'>
        <h2 className='text-6xl font-bold'> Create, <br /> Imagine <br />& Play</h2>
        <h6>Get ready to be whisked away into a land of toys. <br />
Make your playtime unforgettable NOW!</h6>
<div><button className="btn btn-secondary">Shop Now</button></div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;