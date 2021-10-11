import React, {useState} from 'react'
import SideNav from './Components/SideNav';
import ProfileBar from './Components/ProfileBar';
import NavLms from './Components/LMS/NavLms';


const LmsHome = () => {

  const [show , setShow] = useState(1);

    return (
    <div className="w-full flex flew-col md:flex-row bg-client">
      <div className="w-36 md:w-72 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full">
        <ProfileBar />
        <NavLms />
        <h1 className="text-center text-3xl sm:text-4xl font-bold my-6">Class Management</h1>
        <div className="bg-white shadow-button-shadow-2 max-w-1366 mx-3 2xl:mx-auto my-6 rounded-2xl">
          <nav className="flex flex-col md:flex-row text-gray-3 text-lg items-center">
            <button onClick={() => setShow(1)} className="w-52 md:w-1/4 shadow-button-shadow-2 py-4 rounded-2xl font-bold hover:shadow-none">Class Overview</button>
            <button onClick={() =>setShow(2)} className="w-52 md:w-1/4 shadow-button-shadow-2 py-4 rounded-2xl font-bold hover:shadow-none">Class Material</button>
            <button onClick={() =>setShow(3)} className="w-52 md:w-1/4 shadow-button-shadow-2 py-4 rounded-2xl font-bold hover:shadow-none">Enroll Students</button>
            <button onClick={() =>setShow(4)} className="w-52 md:w-1/4 shadow-button-shadow-2 py-4 rounded-2xl font-bold hover:shadow-none">Message Board</button>
          </nav>
          <div className="p-4">
            <div className={show === 1 ? "block" : "hidden"}>
                1
            </div>
            <div className={show === 2 ? "block" : "hidden"}>
              2
            </div>
            <div className={show === 3 ? "block" : "hidden"}>
              3
            </div>
            <div className={show === 4 ? "block" : "hidden"}>
              4
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LmsHome;