import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import {FaArrowRightLong, FaCentercode} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Services = () => {
const [asc, setAsc] = useState(true)

const { isPending, data: services, error, refetch } = useQuery({
  queryKey: ['services'],
  queryFn: () => {
    return axios.get(`http://localhost:4000/services?sort=${asc ? 'asc' : 'dsc'}`);
  }
});

console.log('isPending:', isPending);
console.log('services:', services);
console.log('error:', error);

if (isPending) return <div className="flex justify-center items-center h-[40vh] w-full"><span className="text-center loading loading-bars loading-lg"></span></div>



const handleSortByPrice = () => {
  setAsc(!asc);
  console.log('Sort direction:', asc ? 'asc' : 'dsc');
  refetch()
};


  return (
    <div className='my-4'>

      <div className='text-center'><h3 className='text-2xl font-bold text-orange-600'>
        Services
        </h3>
        <h2 className='text-5xl lg:font-extrabold font-bold light:text-neutral-900 mb-2'>Our services Area</h2>
        <p className='max-w-[710px] mx-auto light:text-neutral-500 text-base capitalize leading-[30px] my-2'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>


        <div className="flex justify-between lg:mx-16 mx-10">
  <p></p>
  <button onClick={handleSortByPrice} className='btn'>{asc ? 'Low to High' : 'High to Low'}</button>
</div>
<div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4 py-8'>


{services?.data.map(services => <div key={services.service_id} className="card card-compact w-96 bg-base-100 shadow-md mx-auto">
  <figure><img src={services.img} className='max-h-[208px]' alt="Shoes" /></figure>
  <div className="card-body">
<div className="flex justify-between items-center jus">
    <div>
    <h2 className="card-title">{services.title}</h2>
    <p className='text-orange-600 text-xl font-semibold'>Price: {parseInt(services.price)}</p>

    </div>

<Link to={`/servicedetails/${services._id}`}>
<FaArrowRightLong className='text-xl me-6 cursor-pointer' />
</Link>
</div>
  </div>
</div>)}

</div>


    </div>
  )
}

export default Services
