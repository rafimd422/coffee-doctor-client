import { useEffect, useState } from 'react'
import axios from 'axios';
import {FaArrowRightLong} from "react-icons/fa6";

const Services = () => {
    const [services,setServices] = useState([])

useEffect(() =>{
 axios.get('services.json')
 .then(data => setServices(data.data))
},[])


  return (
    <div className='my-4'>
      <div className='text-center'><h3 className='text-2xl font-bold text-orange-600'>
        Services
        </h3>
        <h2 className='text-5xl lg:font-extrabold font-bold text-neutral-900 mb-2'>Our services Area</h2>
        <p className='max-w-[710px] mx-auto text-neutral-500 text-base capitalize leading-[30px] my-2'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
<div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4 py-8'>


{services.map(services =>     <div key={services.service_id} className="card card-compact w-96 bg-base-100 shadow-md mx-auto">
  <figure><img src={services.img} className='max-h-[208px]' alt="Shoes" /></figure>
  <div className="card-body">
<div className="flex justify-between items-center jus">
    <div>
    <h2 className="card-title">{services.title}</h2>
    <p className='text-orange-600 text-xl font-semibold'>Price: {services.price}</p>
    </div>

    <FaArrowRightLong className='text-xl me-6 cursor-pointer' />
</div>
  </div>
</div>)}

</div>


    </div>
  )
}

export default Services
