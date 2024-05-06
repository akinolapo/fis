import React from 'react'

const page = () => {
  return (
       <div>

      {/* Contact form */}
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row">
          {/* Contact form */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Drop Us a Line</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-900 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Send Now
              </button>
            </form>
          </div>
          {/* Contact form ends */}
        </div>
      </div>
    </div>
  )
}

export default page