import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const { isPending, data } = useQuery({
    queryKey: ["bookData"],
    queryFn: () => {
      return axios.get(`http://localhost:4000/booking?${user?.email}`);
    },
  });

  if (isPending)
    return (
      <div className="md:h-[80vh] [h-90vh] w-full flex justify-center">
        <span className="loading loading-bars loading-lg mx-auto"></span>
      </div>
    );

  return (
<div className="overflow-x-auto my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row */}


      
{data?.data.map(bookingData =>       <tr key={bookingData._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-[150px] h-[150px]">
                <img src={bookingData.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bookingData.name}</div>
            </div>
          </div>
        </td>
        <td>
          {bookingData.service}
          
        </td>
        <td>{bookingData.date}</td>
        <td>{bookingData.due}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)}



    </tbody>
    
  </table>
</div>
  );
};

export default Bookings;
