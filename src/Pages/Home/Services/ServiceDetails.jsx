import { Link, useLoaderData } from 'react-router-dom'

const ServiceDetails = () => {
    const data = useLoaderData()
    const serviceDetails = data.data;
    return (
    <div className='h-screen'>
<Link to={`/cheakout/${serviceDetails._id}`}>
<button className='bg-orange-600 rounded-[5px] px-8 py-4 ms-2'>Proceed CheakOut</button> 
</Link>
</div>
  )
}

export default ServiceDetails
