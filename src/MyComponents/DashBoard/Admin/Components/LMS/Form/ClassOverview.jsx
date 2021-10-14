import React, { useState } from "react";

const ClassOverview = () => {
  const [newclass, setnewclass] = useState(false);

  return (
    <div>
      <h1 className="font-bold text-center text-lg my-3">Dates Here</h1>
      <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
        <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Class
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Date
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Enrolled
        </h1>
        <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Location
        </h1>
        <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
          Instructor
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">Class ID</h1>
          <h1 className="text-left">Lorem ipsum dolor sit amet consectetur adipisi.</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
          <h1 className="font-bold">23:00</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg hover:bg-red-1 hover:text-white font-bold">
          <h1 className="">
            Clickable Button list enrolled students on the bottom.
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Percentage Bar</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>Thisasd dasasdfa</h1>
        </div>
      </div>
      <div className="border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3">
        <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
          <h1 className="text-center w-full lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Select
          </h1>
          <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Student ID
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Student Name
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Phone Number
          </h1>
          <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Registration
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
          <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <input type="checkbox" className="h-8 w-8 bg-red-1 text-red-1" />
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="font-bold">123456789010</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">Testing test testing</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">352345234</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">(yy/mm/dd)</h1>
            <h1 className="font-bold">23:00</h1>
          </div>
        </div>
        <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
        <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
          <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <input type="checkbox" className="h-8 w-8 bg-red-1 text-red-1" />
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="font-bold">123456789010</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">Testing test testing</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">352345234</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">(yy/mm/dd)</h1>
            <h1 className="font-bold">23:00</h1>
          </div>
        </div>
        <div className="flex">
          <button className="mx-auto mt-2 mb-4 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">REMOVE</button>
        </div>
      </div>
      <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
      <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl lg:border-none border-client shadow-cards lg:shadow-none">
      <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="font-bold">Class ID</h1>
          <h1 className="text-left">Lorem ipsum dolor sit amet consectetur adipisi.</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">(yy/mm/dd)</h1>
          <h1 className="font-bold">23:00</h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg hover:bg-red-1 hover:text-white font-bold">
          <h1 className="">
            Clickable Button list enrolled students on the bottom.
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
          <h1 className="">Percentage Bar</h1>
        </div>
        <div className="flex flow-col items-center justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0">
          <h1>Thisasd dasasdfa</h1>
        </div>
      </div>
      <div className="border-t-3 border-b-3 lg:border-none border-red-1 lg:shadow-cards rounded-2xl my-5 pt-4 lg:px-3">
        <div className="hidden lg:flex flex-row text-base xl:text-lg items-stretch mb-2">
          <h1 className="text-center w-full lg:w-1/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Select
          </h1>
          <h1 className="text-center w-full lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Student ID
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Student Name
          </h1>
          <h1 className="text-center lg:w-3/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Phone Number
          </h1>
          <h1 className="text-center lg:w-2/12 px-3 py-3 text-gray-2 font-bold rounded-xl border-2 bg-client mx-1">
            Registration
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
          <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <input type="checkbox" className="h-8 w-8 bg-red-1 text-red-1" />
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="font-bold">123456789010</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">Testing test testing</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">352345234</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">(yy/mm/dd)</h1>
            <h1 className="font-bold">23:00</h1>
          </div>
        </div>
        <div className="block lg:hidden bg-red-1 w-full h-0.5 my-4 bg-opacity-0"></div>
        <div className="flex flex-col lg:flex-row text-lg mb-2 rounded-xl shadow-cards lg:shadow-none">
          <div className="flex flex-col justify-center items-center text-center lg:w-1/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <input type="checkbox" className="h-8 w-8 bg-red-1 text-red-1" />
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="font-bold">123456789010</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">Testing test testing</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-3/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">352345234</h1>
          </div>
          <div className="flex flex-col justify-center text-center lg:w-2/12 px-3 py-3 text-gray-2 rounded-xl border-2 mx-1 my-1 lg:my-0 text-lg lg:text-sm xl:text-lg">
            <h1 className="">(yy/mm/dd)</h1>
            <h1 className="font-bold">23:00</h1>
          </div>
        </div>
        <div className="flex">
          <button className="mx-auto mt-2 mb-4 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">REMOVE</button>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={() => setnewclass(!newclass)}
          className="mx-auto my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg"
        >
          NEW CLASS
        </button>
      </div>
      <div className={newclass ? "block" : "hidden"}>
        <form className="flex flex-wrap justify-center items-center text-lg font-bold text-gray-3">
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="text"
              placeholder="Class Name DropDown"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
            <input
              type="text"
              placeholder="Instructor Name DropDown"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="date"
              placeholder=""
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
            <input
              type="time"
              placeholder="First Name"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly my-4">
            <input
              type="text"
              placeholder="Location DropDown"
              className="bg-client p-5 w-full lg:w-5/12 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
            <input
              type="number"
              placeholder="Number of Spots"
              className="bg-client p-5 w-full lg:w-5/12 mt-8 lg:mt-0 rounded-xl focus:outline-none ring-2 ring-white focus:ring-gray-2"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
            <button className="my-8 w-56 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1 rounded-lg">
              DELETE CLASS
            </button>
            <button className="my-8 w-56 bg-green-1 text-white py-3.5 font-bold border-2 border-green-1 hover:bg-white hover:text-green-1 rounded-lg">
              ADD CLASS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassOverview;
