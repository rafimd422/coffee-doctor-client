import { FaCalendarDays } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"

const ContactInfo = () => {
  return (
<div className='md:max-h-[250px] h-fit bg-neutral-900 rounded-md lg:px-4 lg:py-1 py-6 my-12'>
  <div className="flex lg:gap-4 flex-wrap justify-center">
    <div className="flex text-white items-center gap-3 p-6">
      <div>
        <FaCalendarDays className="md:text-3xl text-2xl" />
      </div>
      <div>
        <h3 className="text-base lg:font-medium font-normal">
          We are open Monday-Friday
        </h3>
        <p className="lg:text-2xl text-xl font-bold">7:00 am - 9:00 pm</p>
      </div>
    </div>

    <div className="flex text-white items-center gap-3 p-6">
      <div>
        <FaPhoneAlt className="lg:text-3xl text-2xl" />
      </div>
      <div>
        <h3 className="text-base lg:font-medium font-normal">
          Have a question?
        </h3>
        <p className="lg:text-2xl text-xl font-bold">+2546 251 2658</p>
      </div>
    </div>

    <div className="flex text-white items-center gap-3 p-6">
      <div>
        <FaLocationDot className="lg:text-3xl text-2xl" />
      </div>
      <div>
        <h3 className="text-base lg:font-medium font-normal">
          Need a repair? Our address
        </h3>
        <p className="lg:text-2xl text-xl font-bold">Liza Street, New York</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default ContactInfo
