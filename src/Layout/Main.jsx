import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import Footer from '../Pages/Shared/Footer'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const Main = () => {
  const {toggle} = useContext(AuthContext)

  return (

<div  data-theme={toggle ? "dark" : "light"} className="w-full">
<div className="max-w-7xl mx-auto">
  <Navbar />
  <Outlet />
  <Footer />
</div>

</div>
  )
}

export default Main
