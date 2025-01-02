import { useLoaderData } from "react-router-dom";
import Container from "../Container/Container";


const CheckOut = () => {
    const services=useLoaderData()
    const {title,price}=services;
    return (
        <div>
            <Container>
               <h1>All services:{title}</h1>
               <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Check Out</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-600 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-600 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-600 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-300 text-orange-600 font-bold py-2 px-4 rounded-md hover:bg-blue-400 transition duration-300"
        >
          Order Confirm
        </button>
      </form>
    </div>
            </Container>
        </div>
    );
};

export default CheckOut;