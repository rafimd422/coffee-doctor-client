
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
const CheakOut = () => {
    const data = useLoaderData()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const due = form.due.value;
    const message = form.message.value;
    const date = form.date.value;
    const cheakOutData = {name,email,service:data?.data.title,phone,due,img: data?.data.img ,message,date,status:'Please Confirm' }
console.log(cheakOutData)

axios.post('http://localhost:4000/booking', cheakOutData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    console.log(res.data);
    Swal.fire(
        'Good job!',
        'Service Booked Successfully!',
        'success'
      )
navigate('/bookings')
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });  
  
}


  return (
<section className="p-6 md:px-10 py-24 bg-base-200 dark:bg-gray-800 dark:text-gray-50">
	<form className="space-y-12" onSubmit={handleSubmit}>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:mx-10">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="name" className="text-sm">Name</label>
					<input id="firstname" 
                    defaultValue={user?.displayName}
                    type="text" name='name' placeholder="name" className="w-full p-2 rounded-md focus:ring dark:border-gray-700 dark:text-gray-900" required />
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name='email' type="email" defaultValue={user?.email} placeholder="Email" required className="w-full p-2 rounded-md focus:ring dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input id="phone" type="number" required name='phone' placeholder="Phone Number" className="p-2 w-full rounded-md focus:ring dark:border-gray-700 dark:text-gray-900"/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="date" className="text-sm">Date</label>
					<input id="date" name='date' type="date" required className="p-2 w-full rounded-md focus:ring dark:border-gray-700 dark:text-gray-900"/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="due" className="text-sm">Due Amount</label>
					<input id="due" name='due' defaultValue={`$ ${data?.data.price}`} type="text" required className="p-2 w-full rounded-md focus:ring dark:border-gray-700 dark:text-gray-900"/>
				</div>
				<div className="col-span-full">
					<label htmlFor="message" className="text-sm">Message</label>
<textarea name="message" id="message" cols="20" placeholder='Your Messages' rows="10" className="w-full rounded-md focus:ring dark:border-gray-700 dark:text-gray-900 p-2"></textarea>
				</div>
				<input type="submit" value="Order Confirm" className='text-xl font-semibold cursor-pointer col-span-full py-4 bg-orange-600 rounded-[10px] text-white' />
			</div>
		</fieldset>

	</form>
</section>
  )
}

export default CheakOut
