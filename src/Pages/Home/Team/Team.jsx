import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

const Team = () => {
  return (
    <>
      <p className='text-center text-orange-600 text-xl font-bold'>Team</p>
      <h3 className="text-center my-4 text-neutral-900 text-5xl font-bold">Meet Our Team</h3>
      <p className='w-[714px] text-center text-neutral-500 text-base capitalize leading-[30px] mx-auto my-4 md:mb-20 mb-8'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-2">
        <div className="card w-96 bg-base-100 shadow-xl h-fit mb-8 mx-auto">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className='text-neutral-500 text-md font-semibold'>Engine Expert</p>
            <div className="card-actions mt-2">
              <FaSquareFacebook className='text-4xl' />
              <FaLinkedin className='text-4xl' />
              <FaSquareInstagram className='text-4xl' />
            </div>
          </div>
        </div>
        
        <div className="card w-96 bg-base-100 shadow-xl h-fit mb-8 mx-auto">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className='text-neutral-500 text-md font-semibold'>Engine Expert</p>
            <div className="card-actions mt-2">
              <FaSquareFacebook className='text-4xl' />
              <FaLinkedin className='text-4xl' />
              <FaSquareInstagram className='text-4xl' />
            </div>
          </div>
        </div>
        
        <div className="card w-96 bg-base-100 shadow-xl h-fit mb-8 mx-auto">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className='text-neutral-500 text-md font-semibold'>Engine Expert</p>
            <div className="card-actions mt-2">
              <FaSquareFacebook className='text-4xl' />
              <FaLinkedin className='text-4xl' />
              <FaSquareInstagram className='text-4xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
