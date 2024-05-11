import React from 'react'

function Form() {
    return (
        <>
            <div className="md:w-1/2 w-full">
                <h1 className="text-4xl font-bold text-center text-[#160026] mt-4">Contact Us</h1>
                <form action="#" method="POST" className="bg-white shadow-sm rounded p-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-medium font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-400 focus:ring p-2 focus:ring-purple-200 focus:ring-opacity-50" placeholder="John Doe" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-medium font-bold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 focus:ring-opacity-50 p-2" placeholder="example@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-medium font-bold mb-2">Message</label>
                        <textarea id="message" name="message" className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-200 focus:ring-opacity-50 p-2" rows="6" placeholder="Your message here..." required></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-[#E23F77] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
