import React from "react";

const ContactUs = () => {
  return (
    <div className="flex pb-12 flex-col items-center justify-center bg-[#FFF8F5]">
      <h1 className="text-4xl text-center font-bold mt-24 mb-9">
        Let us handle your <br /> project, professionally.
      </h1>
      <div className="p-4 py-6 w-1/2 rounded-lg md:p-8">
        <form>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm text-gray-600">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm text-gray-600">
              Email address
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border--blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600">Message</label>
            <textarea
              className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-36 focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Message"></textarea>
          </div>
          <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
