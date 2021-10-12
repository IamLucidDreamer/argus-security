import React from 'react'

const ContactDetails = () => {
    return (
        <div className="w-full lg:w-1/2 mx-auto">
<div className="rounded-lg bg-white mx-4 md:mx-8 my-4 p-2 md:p-4 shadow-button-shadow-2 h-96 overflow-y-scroll">
                <div className="flex items-center mb-4">
                    <span className="inline-block text-red-1">
                        <svg
                            className="w-14 h-14"
                            s
                            viewBox="-32 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                            fill="currentColor"
                            />
                        </svg>
                    </span>
                    <h1 className="text-lg text-gray-3 font-bold mx-5">Contact Details</h1>
                </div>
                
                <form className="flex flex-col text-black font-bold">                
                    <label> Country</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> State/Province</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> City</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Street</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Street Number</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Suite</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Postal Code</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Home Phone</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Call Phone</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    <label> Email</label>
                    <input className="border-b-2 border-black focus:border-red-1 focus:outline-none mb-4"/>
                    
                    <button className= "mx-auto my-4 w-1/2 bg-red-1 text-white py-3.5 font-bold border-2 border-red-1 hover:bg-white hover:text-red-1">Update</button>
                </form>
            </div>
        </div>
    )
}


export default ContactDetails;