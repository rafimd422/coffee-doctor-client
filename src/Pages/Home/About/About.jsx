import person from './../../../assets/images/about_us/person.jpg'
import parts from './../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
<div className="hero lg:min-h-[74vh] min-h-screen -mt-1 bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
<div className='lg:w-1/2 relative'>
<img src={person} className='w-2/3 rounded-lg shadow-2xl' />
<img src={parts} className='w-1/2 absolute right-20 top-1/2 rounded-lg shadow-2xl border-8 border-white' />
    </div>    
    <div className='lg:w-1/2 lg:mt-0 mt-24 space-y-4'> 
    <h3 className='text-3xl text-orange-600 font-bold '>About Us</h3>
      <h1 className="sm:text-5xl text-4xl font-bold">We are qualified & of experience in this field</h1>
      <p className='p-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-2 p-4">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary ms-4">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default About
