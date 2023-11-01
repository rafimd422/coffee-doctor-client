import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { isPending, data } = useQuery({
    queryKey: ["bookData", user?.email],
    queryFn: () => {
      const userEmail = user.email
      return axios.get(`http://localhost:4000/booking?email=${userEmail}`, {
        withCredentials: true,
      });
    },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    
    
  },);


  if (isPending)
    return (
      <div className="md:h-[80vh] [h-90vh] w-full flex justify-center">
        <span className="loading loading-bars loading-lg mx-auto"></span>
      </div>
    );

const handleDelete = id => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
  axios.delete(`http://localhost:4000/booking/${id}`,{
    headers: {
      'Content-Type' : 'application/json'
    }
  }) .then( data => {
    queryClient.invalidateQueries(["bookData"]);
   }
  ).catch(error => console.log(error.message))
  Swal.fire(
    'Deleted!',
    'Your file has been deleted.',
    'success'
  )}
})}

const handleConfirm = id => {
  axios
    .patch(`http://localhost:4000/booking/${id}`, { status: "Confirmed" }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      console.log(response?.data);
      if (response?.data.acknowledged) {
        console.log('Service modified');
        console.log(response)
      }
      queryClient.invalidateQueries(["bookData"]);
    })
    .catch((error) => {
      console.error(error);
    });
};



  return (
<div className="overflow-x-auto my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Delete</th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row */}


      
{data?.data.map(bookingData =>       <tr key={bookingData._id}>
  <td><button onClick={()=>handleDelete(bookingData._id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-[150px] h-[150px]">
                <img src={bookingData.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </div>
        </td>
        <td>{bookingData.service}</td>
        <td>{bookingData.date}</td>
        <td>{bookingData.due}</td>
       {bookingData?.status === 'Confirmed' ? <td><span className="bg-green-500 p-3 rounded-lg text-white font-bold">Confirmed</span></td> :  <td><button className="bg-red-500 p-3 rounded-lg text-white font-bold" onClick={()=>handleConfirm(bookingData._id)}>{bookingData.status}</button></td>}
      </tr>)}
    </tbody>
    
  </table>
</div>
  );
};

export default Bookings;
