import img1 from '../../../assets/images/banner/6.jpg'
import img2 from '../../../assets/images/banner/3.jpg'
import img3 from '../../../assets/images/banner/1.jpg'
import img4 from '../../../assets/images/banner/2.jpg'

const Banner = () => {
  return (
<div className="carousel w-full max-h-[610px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    
    <div className="absolute flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white md:space-y-7 sm:space-y-6 space-y-2 md:pl-12 pl-4'>
 <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold w-1/2">Affordable Price For Car Servicing</h2>
 <p>There are many variations of passages of available, But The Majority Have Suffered Alteration in some Form</p>
 <div className="flex md:gap-4 gap-2 my-2">
  <button className='btn btn-primary'>Discover More</button>
  <button className='btn btn-outline btn-secondary'>Latest Project</button>
 </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full" />
  <div className="absolute flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white md:space-y-7 sm:space-y-6 space-y-2 md:pl-12 pl-4'>
 <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold w-1/2">Affordable Price For Car Servicing</h2>
 <p>There are many variations of passages of available, <br /> But The Majority Have Suffered Alteration in some Form</p>
 <div className="flex md:gap-4 gap-2 my-2">

 </div>
    </div>
    </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full" />
  <div className="absolute flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white md:space-y-7 sm:space-y-6 space-y-2 md:pl-12 pl-4'>
 <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold w-1/2">Affordable Price For Car Servicing</h2>
 <p>There are many variations of passages of available, <br /> But The Majority Have Suffered Alteration in some Form</p>

    </div>
    </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full" />
  <div className="absolute flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
    <div className='text-white md:space-y-7 sm:space-y-6 space-y-2 md:pl-12 pl-4'>
 <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold w-1/2">Affordable Price For Car Servicing</h2>
 <p>There are many variations of passages of available, <br /> But The Majority Have Suffered Alteration in some Form</p>
 <div className="flex md:gap-4 gap-2 my-2">

 </div>
    </div>
    </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Banner
